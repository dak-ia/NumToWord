import { main, prettify } from "./generateDigits.ts";
import { loadDictionaries } from "./loadDictionaries.ts";

const OUT_DIR = "src/converters/digits";

process.exit(
  await main({
    argv: process.argv.slice(2),
    outDir: OUT_DIR,
    load: loadDictionaries,
    formatSource: prettify,
    log: console.log,
    error: console.error,
  })
);
