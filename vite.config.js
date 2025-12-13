import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({
  define: {
    VERSION: JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "NumToWord",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        if (format === "es") return "index.mjs";
        if (format === "cjs") return "index.cjs";
        if (format === "umd") return "index.umd.js";
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
