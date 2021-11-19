"use strict";

module.exports = {
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "text-summary", "cobertura"],
  coveragePathIgnorePatterns: [
    "node_modules/",
    "coverage/",
    "coverage-ts/",
    "__tests__/"
  ],
  collectCoverageFrom: [
    "**/*.ts",
    "!**/node_modules/**",
    "!**/__tests__/**",
    "!**/*.config.js",
    "!.*.js",
    "!**/.*.js",
    "!coverage/**",
    "!jest/**",
    "!**/.cache/**"
  ],
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(test).ts"],
  testPathIgnorePatterns: ["node_modules", "dist"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  setupFilesAfterEnv: ["jest-mock-console/dist/setupTestFramework.js"],
  coverageThreshold: {
    global: {
      statements: "100",
      branches: "100",
      functions: "100",
      lines: "100"
    }
  }
};
