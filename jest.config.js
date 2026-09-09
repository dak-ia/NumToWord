// prettierがCJSの中で動的importするので、npm testは--experimental-vm-modules付きで起動している
export default {
  testEnvironment: "node",
  maxWorkers: "50%",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "scripts/**/*.ts",
    "!**/*.test.ts",
    // jestからは実行できないので、CIのgenerate:checkで動かして確認する
    "!scripts/generate.ts",
    "!scripts/loadDictionaries.ts",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/coverage/**",
  ],
  testMatch: ["**/__tests__/**/*.test.{js,ts}", "**/?(*.)+(spec|test).{js,ts}"],
  coverageReporters: ["text", "lcov", "clover", "json-summary"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    VERSION: "0.1.0-test",
  },
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
