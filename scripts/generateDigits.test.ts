import { buildEntries, findStale, main, prettify, renderBarrel, renderConverter } from "./generateDigits.ts";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import type { DigitWords } from "../src/types/index.ts";
import type { FormatSource } from "./generateDigits.ts";
import { LetterCase } from "../src/constants/index.ts";
import { join } from "node:path";

// prettierの設定はファイルの位置から引かれるので、リポジトリ内に作業ディレクトリを作る
const withTempDir = async <T>(run: (_dir: string) => Promise<T>): Promise<T> => {
  const dir = await mkdtemp(join("node_modules", ".test-generate-"));
  try {
    return await run(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
};

const base = {
  digits: ["ze", "on", "tw", "th", "fo", "fi", "si", "se", "ei", "ni"] as const,
  join: "-",
  decimalPoint: " dot ",
  minus: "neg ",
  infinity: "inf",
};

const enDigitWords: DigitWords = { ...base, name: "English", letterCase: LetterCase.capitalize };
const jpDigitWords: DigitWords = { ...base, name: "Japanese", label: "Japanese kanji" };
const romanDigitWords: DigitWords = { ...base, name: "Roman", label: "Roman numeral", letterCase: LetterCase.upper };

const exampleOf = (number: number | string, dictionary: DigitWords): string => `<${dictionary.name}:${number}>`;
const load = async () => ({
  replaceDigits: (number: number | string, dictionary: DigitWords) => exampleOf(number, dictionary),
  enDigitWords,
  jpDigitWords,
  romanDigitWords,
});
const formatSource: FormatSource = async (_path, text) => `${text}// formatted\n`;
const io = () => ({ log: jest.fn(), error: jest.fn() });

describe("renderConverter", () => {
  test("takes a letter case when the dictionary has one", () => {
    const source = renderConverter({
      fn: "numToEnglishDigits",
      wordsExport: "enDigitWords",
      label: "English",
      hasLetterCase: true,
      examples: [{ input: "0123", output: "Ze-on-tw-th" }],
    });
    expect(source).toContain("letterCase?: LetterCase");
    expect(source).toContain('import type { LetterCase } from "../../constants";');
    expect(source).toContain("@param letterCase - Overrides the default letter case of the language");
    expect(source).toContain('numToEnglishDigits("0123") // "Ze-on-tw-th"');
  });

  test("leaves out the letter case parameter when the dictionary has none", () => {
    const source = renderConverter({
      fn: "numToJapaneseDigits",
      wordsExport: "jpDigitWords",
      label: "Japanese kanji",
      hasLetterCase: false,
      examples: [{ input: "0123", output: "ze-on-tw-th" }],
    });
    expect(source).toContain("(number: number | string): string =>\n  replaceDigits(number, jpDigitWords);");
    expect(source).not.toContain("letterCase");
    expect(source).not.toContain("LetterCase");
    expect(source).toContain("Converts a number to Japanese kanji digit by digit.");
  });

  test("orders the imports the way sort-imports expects", () => {
    const order = (wordsExport: string): number[] => {
      const source = renderConverter({ fn: "f", wordsExport, label: "l", hasLetterCase: true, examples: [] });
      return ['from "../../constants"', 'from "../../dictionaries"', 'from "../../utils"'].map((from) =>
        source.indexOf(from)
      );
    };
    const [constants, dictionaries, utils] = order("enDigitWords");
    expect(constants).toBeLessThan(dictionaries);
    expect(dictionaries).toBeLessThan(utils);

    const [, romanDictionaries, romanUtils] = order("romanDigitWords");
    expect(romanUtils).toBeLessThan(romanDictionaries);
  });

  test("leaves out the example tag when there is nothing to show", () => {
    const source = renderConverter({
      fn: "f",
      wordsExport: "enDigitWords",
      label: "l",
      hasLetterCase: false,
      examples: [],
    });
    expect(source).not.toContain("@example");
    expect(source).toContain(" * @returns l representing each digit\n */");
  });

  test("writes an example line per input, with Infinity as a number literal", () => {
    const source = renderConverter({
      fn: "numToEnglishDigits",
      wordsExport: "enDigitWords",
      label: "English words",
      hasLetterCase: true,
      examples: [
        { input: "1.500", output: "on dot fi" },
        { input: Infinity, output: "inf" },
      ],
    });
    expect(source).toContain('numToEnglishDigits("1.500") // "on dot fi"');
    expect(source).toContain('numToEnglishDigits(Infinity) // "inf"');
    expect(source).toContain("@returns English words representing each digit");
  });
});

describe("renderBarrel", () => {
  test("re-exports every generated converter", () => {
    expect(renderBarrel([{ fn: "numToAaaDigits" }, { fn: "numToBbbDigits" }])).toBe(
      '// このファイルはnpm run generateからの自動生成のため手動編集禁止\nexport { numToAaaDigits } from "./numToAaaDigits";\nexport { numToBbbDigits } from "./numToBbbDigits";\n'
    );
  });
});

describe("buildEntries", () => {
  test("takes only the dictionaries and sorts them by function name", () => {
    const entries = buildEntries({ romanDigitWords, enDigitWords, siSymbols: {}, jpOnesPlace: [] }, exampleOf);
    expect(entries.map((e) => e.fn)).toEqual(["numToEnglishDigits", "numToRomanDigits"]);
  });

  test("falls back to the name when the dictionary has no label", () => {
    const entries = buildEntries({ enDigitWords, jpDigitWords }, exampleOf);
    expect(entries.map((e) => e.label)).toEqual(["English words", "Japanese kanji"]);
  });

  test("reads whether a letter case is available from the dictionary", () => {
    const entries = buildEntries({ enDigitWords, jpDigitWords }, exampleOf);
    expect(entries.map((e) => e.hasLetterCase)).toEqual([true, false]);
  });

  test("rejects a dictionary that is not shaped like one", () => {
    expect(() => buildEntries({ brokenDigitWords: { name: "Broken" } }, exampleOf)).toThrow(
      "brokenDigitWordsがDigitWordsの形をしていない"
    );
  });

  test("rejects a dictionary that does not cover every digit", () => {
    const words = { ...enDigitWords, digits: ["ze", "on", "tw"] };
    expect(() => buildEntries({ shortDigitWords: words }, exampleOf)).toThrow(
      "shortDigitWordsがDigitWordsの形をしていない"
    );
  });

  test("rejects a name that cannot be part of an identifier", () => {
    const words = { ...enDigitWords, name: "Brazilian Portuguese" };
    expect(() => buildEntries({ ptBrDigitWords: words }, exampleOf)).toThrow(
      'ptBrDigitWordsのnameが識別子として使えない: "Brazilian Portuguese"'
    );
  });

  test("rejects two dictionaries that would generate the same function", () => {
    expect(() => buildEntries({ aDigitWords: enDigitWords, bDigitWords: enDigitWords }, exampleOf)).toThrow(
      "nameが重複している: numToEnglishDigits"
    );
  });

  test("rejects an empty set of dictionaries", () => {
    expect(() => buildEntries({ siSymbols: {} }, exampleOf)).toThrow("辞書が1つも見つからない");
  });

  test("builds every example by converting through the dictionary", () => {
    const entry = buildEntries({ enDigitWords }, exampleOf)[0];
    expect(entry.examples).toEqual([
      { input: "0123", output: "<English:0123>" },
      { input: "1.500", output: "<English:1.500>" },
      { input: Infinity, output: "<English:Infinity>" },
    ]);
  });
});

describe("findStale", () => {
  test("reports a generated file that no dictionary asks for", () => {
    expect(findStale(["numToGoneDigits.ts"], ["numToEnglishDigits.ts"])).toEqual(["numToGoneDigits.ts"]);
  });

  test("keeps a file that a dictionary asks for", () => {
    expect(findStale(["numToEnglishDigits.ts"], ["numToEnglishDigits.ts"])).toEqual([]);
  });

  test("keeps tests, which are written by hand", () => {
    expect(findStale(["numToGoneDigits.test.ts"], ["numToEnglishDigits.ts"])).toEqual([]);
  });

  test("keeps files that are not TypeScript", () => {
    expect(findStale(["README.md"], ["numToEnglishDigits.ts"])).toEqual([]);
  });
});

describe("main", () => {
  test("refuses an argument it does not know instead of writing", async () => {
    await withTempDir(async (dir) => {
      const { log, error } = io();
      expect(await main({ argv: ["--chek"], outDir: dir, load, formatSource, log, error })).toBe(1);
      expect(await readdir(dir)).toEqual([]);
      expect(error).toHaveBeenCalledWith("知らない引数: --chek");
      expect(log).not.toHaveBeenCalled();
    });
  });

  test("writes a converter per dictionary plus a barrel", async () => {
    await withTempDir(async (dir) => {
      const { log, error } = io();
      expect(await main({ argv: [], outDir: dir, load, formatSource, log, error })).toBe(0);
      expect((await readdir(dir)).sort()).toEqual([
        "index.ts",
        "numToEnglishDigits.ts",
        "numToJapaneseDigits.ts",
        "numToRomanDigits.ts",
      ]);
      expect(log).toHaveBeenCalledWith(`生成4件: ${dir}（3言語、うち大文字小文字あり2）`);
      expect(error).not.toHaveBeenCalled();
    });
  });

  test("reports nothing moved when the files are already up to date", async () => {
    await withTempDir(async (dir) => {
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });
      const { log } = io();
      expect(await main({ argv: [], outDir: dir, load, formatSource, log, error: jest.fn() })).toBe(0);
      expect(log).toHaveBeenCalledWith(`変更なし: ${dir}（3言語、うち大文字小文字あり2）`);
    });
  });

  test("removes a converter whose dictionary is gone", async () => {
    await withTempDir(async (dir) => {
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });
      await writeFile(join(dir, "numToGoneDigits.ts"), "export const numToGoneDigits = () => '';\n");
      const { log } = io();
      expect(await main({ argv: [], outDir: dir, load, formatSource, log, error: jest.fn() })).toBe(0);
      expect(await readdir(dir)).not.toContain("numToGoneDigits.ts");
      // 削除だけでも件数に数える
      expect(log).toHaveBeenCalledWith(`生成1件: ${dir}（3言語、うち大文字小文字あり2）`);
    });
  });

  test("leaves hand-written tests alone", async () => {
    await withTempDir(async (dir) => {
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });
      await writeFile(join(dir, "numToEnglishDigits.test.ts"), "test.skip('x', () => {});\n");
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });
      expect(await readdir(dir)).toContain("numToEnglishDigits.test.ts");
    });
  });

  test("accepts a directory that does not exist yet", async () => {
    await withTempDir(async (dir) => {
      const nested = join(dir, "digits");
      expect(await main({ argv: [], outDir: nested, load, formatSource, ...io() })).toBe(0);
      expect(await readdir(nested)).toContain("index.ts");
    });
  });

  test("passes the check when the files match the dictionaries", async () => {
    await withTempDir(async (dir) => {
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });
      const { log, error } = io();
      expect(await main({ argv: ["--check"], outDir: dir, load, formatSource, log, error })).toBe(0);
      expect(log).toHaveBeenCalledWith(expect.stringContaining("最新"));
      expect(error).not.toHaveBeenCalled();
    });
  });

  test("fails the check when a file no longer matches its dictionary", async () => {
    await withTempDir(async (dir) => {
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });
      await writeFile(join(dir, "numToEnglishDigits.ts"), "手で書き換えた\n");
      const { log, error } = io();
      expect(await main({ argv: ["--check"], outDir: dir, load, formatSource, log, error })).toBe(1);
      expect(error).toHaveBeenCalledWith(`辞書と食い違っている: ${join(dir, "numToEnglishDigits.ts")}`);
      expect(error).toHaveBeenCalledWith("npm run generateを実行すること");
      expect(error).not.toHaveBeenCalledWith(expect.stringContaining("辞書に無いのに残っている"));
      // --checkは書き換えない
      expect(await readFile(join(dir, "numToEnglishDigits.ts"), "utf8")).toBe("手で書き換えた\n");
    });
  });

  test("fails the check when a converter is left over", async () => {
    await withTempDir(async (dir) => {
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });
      await writeFile(join(dir, "numToGoneDigits.ts"), "export const numToGoneDigits = () => '';\n");
      const { log, error } = io();
      expect(await main({ argv: ["--check"], outDir: dir, load, formatSource, log, error })).toBe(1);
      expect(error).toHaveBeenCalledWith(`辞書に無いのに残っている: ${join(dir, "numToGoneDigits.ts")}`);
      expect(error).not.toHaveBeenCalledWith(expect.stringContaining("辞書と食い違っている"));
      // --checkは消さない
      expect(await readdir(dir)).toContain("numToGoneDigits.ts");
    });
  });

  test("fails the check when a file is stale and another is left over", async () => {
    await withTempDir(async (dir) => {
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });
      await writeFile(join(dir, "numToEnglishDigits.ts"), "手で書き換えた\n");
      await writeFile(join(dir, "numToGoneDigits.ts"), "export const numToGoneDigits = () => '';\n");
      const { error } = io();
      expect(await main({ argv: ["--check"], outDir: dir, load, formatSource, log: jest.fn(), error })).toBe(1);
      expect(error).toHaveBeenCalledWith(expect.stringContaining("辞書と食い違っている"));
      expect(error).toHaveBeenCalledWith(expect.stringContaining("辞書に無いのに残っている"));
    });
  });

  test("writes every converter and the barrel through the formatter", async () => {
    await withTempDir(async (dir) => {
      await main({ argv: [], outDir: dir, load, formatSource, ...io() });

      expect(await readFile(join(dir, "numToEnglishDigits.ts"), "utf8")).toBe(
        `// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { enDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to English words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns English words representing each digit
 * @example
 * numToEnglishDigits("0123") // "<English:0123>"
 * numToEnglishDigits("1.500") // "<English:1.500>"
 * numToEnglishDigits(Infinity) // "<English:Infinity>"
 */
export const numToEnglishDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, enDigitWords, letterCase);
// formatted
`
      );

      // 先頭以外も辞書ごとに書き分けられていること
      const japanese = await readFile(join(dir, "numToJapaneseDigits.ts"), "utf8");
      expect(japanese).toContain("replaceDigits(number, jpDigitWords)");
      expect(japanese).not.toContain("letterCase");
      expect(japanese).not.toContain("LetterCase");
      expect(japanese).toContain("// formatted");

      expect(await readFile(join(dir, "index.ts"), "utf8")).toBe(
        `// このファイルはnpm run generateからの自動生成のため手動編集禁止
export { numToEnglishDigits } from "./numToEnglishDigits";
export { numToJapaneseDigits } from "./numToJapaneseDigits";
export { numToRomanDigits } from "./numToRomanDigits";
// formatted
`
      );
    });
  });
});

describe("prettify", () => {
  test("formats with the repository's Prettier settings", async () => {
    const formatted = await prettify("src/converters/digits/x.ts", "export  const  a=1\n");
    expect(formatted).toBe("export const a = 1;\n");
  });
});
