export default {
  testEnvironment: "node",
  maxWorkers: "50%",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!**/node_modules/**", "!**/dist/**", "!**/coverage/**"],
  testMatch: ["**/__tests__/**/*.test.js", "**/?(*.)+(spec|test).js"],
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
