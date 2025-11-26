module.exports = {
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["**/*.{js,jsx}", "!**/node_modules/**"],
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
};
