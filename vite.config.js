import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({
  define: {
    VERSION: JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      entry: "./src/index.js",
      name: "NumToWord",
      formats: ["es", "cjs"],
      fileName: (format) => `NumToWord.${format === "es" ? "mjs" : "cjs"}`,
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
