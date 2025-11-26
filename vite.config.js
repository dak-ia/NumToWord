import { defineConfig } from "vite";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/NumToWord.js"),
      name: "NumToWord",
      formats: ["es", "cjs"],
      fileName: (format) => `NumToWord.${format === "es" ? "mjs" : "cjs"}`,
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
