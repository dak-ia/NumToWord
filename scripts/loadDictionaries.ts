import { join, resolve } from "node:path";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import type { SourceModule } from "./generateDigits.ts";
import { build } from "esbuild";
import { pathToFileURL } from "node:url";

// 生成物自体がsrc/index.tsから参照されるので、辞書と変換処理だけを束ねて読み込む
export const loadDictionaries = async (): Promise<SourceModule> => {
  const dir = await mkdtemp(join(process.cwd(), "node_modules", ".generate-"));
  const entry = join(dir, "entry.ts");
  // パスをそのまま埋めるとWindowsの\uや\nがエスケープとして読まれる
  const reExport = (path: string): string => `export * from ${JSON.stringify(resolve(path))};\n`;
  await writeFile(entry, reExport("src/dictionaries/index.ts") + reExport("src/utils/replaceDigits.ts"));
  const bundled = join(dir, "bundle.mjs");
  try {
    await build({ entryPoints: [entry], bundle: true, format: "esm", outfile: bundled, logLevel: "error" });
    return (await import(pathToFileURL(bundled).href)) as SourceModule;
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
};
