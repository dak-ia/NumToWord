import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import type { DigitWords } from "../src/types/index.ts";
import { join } from "node:path";

const HEADER = "// このファイルはnpm run generateからの自動生成のため手動編集禁止";

export type DigitExample = {
  input: number | string;
  output: string;
};

export type DigitEntry = {
  fn: string;
  wordsExport: string;
  label: string;
  hasLetterCase: boolean;
  examples: readonly DigitExample[];
};

export type SourceModule = {
  replaceDigits: (_number: number | string, _words: DigitWords) => string;
  [key: string]: unknown;
};

export type FormatSource = (_path: string, _text: string) => Promise<string>;

const firstImportMember = (line: string): string => line.slice(line.indexOf("{") + 1, line.indexOf("}")).trim();

// 入力を@exampleの行と結果の計算で別々に書くと、食い違っても生成物としては整合してしまう
const EXAMPLE_INPUTS: readonly (number | string)[] = ["0123", "1.500", Infinity];

// JSON.stringifyはInfinityをnullにするので、数値は文字列化だけにする
const literal = (value: number | string): string => (typeof value === "string" ? JSON.stringify(value) : String(value));

export const renderConverter = ({ fn, wordsExport, label, hasLetterCase, examples }: DigitEntry): string => {
  // 大文字小文字を持たない言語に引数を残すと、undefinedしか入らない選択肢が公開の型に出てしまう
  const letterCaseParam = hasLetterCase ? ", letterCase?: LetterCase" : "";
  const letterCaseArg = hasLetterCase ? ", letterCase" : "";
  const letterCaseDoc = hasLetterCase
    ? "\n * @param letterCase - Overrides the default letter case of the language"
    : "";
  // sort-importsはメンバー名で並べるので、辞書の変数名によって順序が変わる
  const imports = [
    `import { ${wordsExport} } from "../../dictionaries";`,
    'import { replaceDigits } from "../../utils";',
  ];
  if (hasLetterCase) imports.push('import type { LetterCase } from "../../constants";');
  imports.sort((a, b) => (firstImportMember(a) < firstImportMember(b) ? -1 : 1));
  // 例が空のときにタグだけ残ると壊れたJSDocになる
  const exampleLines = examples.map(
    ({ input, output }) => `\n * ${fn}(${literal(input)}) // ${JSON.stringify(output)}`
  );
  const exampleDoc = exampleLines.length === 0 ? "" : `\n * @example${exampleLines.join("")}`;
  return `${HEADER}
${imports.join("\n")}

/**
 * Converts a number to ${label} digit by digit.
 * @param number - The number to convert${letterCaseDoc}
 * @returns ${label} representing each digit${exampleDoc}
 */
export const ${fn} = (number: number | string${letterCaseParam}): string =>
  replaceDigits(number, ${wordsExport}${letterCaseArg});
`;
};

export const renderBarrel = (entries: readonly Pick<DigitEntry, "fn">[]): string =>
  `${HEADER}\n${entries.map(({ fn }) => `export { ${fn} } from "./${fn}";`).join("\n")}\n`;

// nameは関数名とファイル名の両方になるので、識別子として使えない字が混ざると生成物が壊れる
const NAME_PATTERN = /^[A-Z][A-Za-z0-9]*$/;

// 語が足りなくてもjoinがundefinedを空文字にするので、個数まで見ないと@exampleだけがサイレントに壊れる
const isDigitWords = (value: unknown): value is DigitWords =>
  typeof value === "object" &&
  value !== null &&
  Array.isArray((value as DigitWords).digits) &&
  (value as DigitWords).digits.length === 10;

export const buildEntries = (
  dictionaries: Record<string, unknown>,
  exampleOf: (_number: number | string, _words: DigitWords) => string
): DigitEntry[] => {
  const entries = Object.entries(dictionaries)
    .filter(([wordsExport]) => wordsExport.endsWith("DigitWords"))
    .map(([wordsExport, dictionary]) => {
      if (!isDigitWords(dictionary)) {
        throw new Error(`${wordsExport}がDigitWordsの形をしていない`);
      }
      if (!NAME_PATTERN.test(dictionary.name)) {
        throw new Error(`${wordsExport}のnameが識別子として使えない: ${JSON.stringify(dictionary.name)}`);
      }
      return {
        fn: `numTo${dictionary.name}Digits`,
        wordsExport,
        label: dictionary.label ?? `${dictionary.name} words`,
        hasLetterCase: dictionary.letterCase !== undefined,
        examples: EXAMPLE_INPUTS.map((input) => ({ input, output: exampleOf(input, dictionary) })),
      };
    })
    .sort((a, b) => (a.fn < b.fn ? -1 : 1));

  if (entries.length === 0) {
    throw new Error("辞書が1つも見つからない");
  }
  const duplicated = entries.find((entry, index) => entries[index + 1]?.fn === entry.fn);
  if (duplicated !== undefined) {
    throw new Error(`nameが重複している: ${duplicated.fn}`);
  }
  return entries;
};

// テストは生成対象ではない
export const findStale = (existingNames: readonly string[], wantedNames: readonly string[]): string[] =>
  existingNames.filter((name) => name.endsWith(".ts") && !name.endsWith(".test.ts") && !wantedNames.includes(name));

// 整形しないと生成物がformat:checkに引っかかる
export const prettify: FormatSource = async (path, text) => {
  const { format, resolveConfig } = await import("prettier");
  return format(text, { ...(await resolveConfig(path)), filepath: path });
};

export type MainOptions = {
  argv: readonly string[];
  outDir: string;
  load: () => Promise<SourceModule>;
  formatSource: FormatSource;
  log: (_message: string) => void;
  error: (_message: string) => void;
};

/**
 * 辞書から変換関数を生成して書き出す
 * @returns 終了コード
 */
export const main = async ({ argv, outDir, load, formatSource, log, error }: MainOptions): Promise<number> => {
  // --checkの綴りを間違えると、そのまま書き込みと削除が走ってしまう
  const unknown = argv.filter((arg) => arg !== "--check");
  if (unknown.length > 0) {
    error(`知らない引数: ${unknown.join(", ")}`);
    return 1;
  }
  const { replaceDigits, ...dictionaries } = await load();
  const entries = buildEntries(dictionaries, (number, dictionary) => replaceDigits(number, dictionary));

  const files = new Map<string, string>();
  for (const entry of entries) {
    const path = join(outDir, `${entry.fn}.ts`);
    files.set(path, await formatSource(path, renderConverter(entry)));
  }
  const barrelPath = join(outDir, "index.ts");
  files.set(barrelPath, await formatSource(barrelPath, renderBarrel(entries)));

  const wanted = [...entries.map(({ fn }) => `${fn}.ts`), "index.ts"];
  const stale = findStale(await readdir(outDir).catch(() => []), wanted);

  const changed: string[] = [];
  for (const [path, text] of files) {
    if ((await readFile(path, "utf8").catch(() => null)) !== text) changed.push(path);
  }

  const summary = `${entries.length}言語、うち大文字小文字あり${entries.filter((e) => e.hasLetterCase).length}`;

  if (argv.includes("--check")) {
    if (changed.length > 0 || stale.length > 0) {
      for (const path of changed) error(`辞書と食い違っている: ${path}`);
      for (const name of stale) error(`辞書に無いのに残っている: ${join(outDir, name)}`);
      error("npm run generateを実行すること");
      return 1;
    }
    log(`最新: ${outDir}（${summary}）`);
    return 0;
  }

  await mkdir(outDir, { recursive: true });
  for (const [path, text] of files) {
    if (changed.includes(path)) await writeFile(path, text);
  }
  for (const name of stale) await rm(join(outDir, name));
  const moved = changed.length + stale.length;
  log(`${moved === 0 ? "変更なし" : `生成${moved}件`}: ${outDir}（${summary}）`);
  return 0;
};
