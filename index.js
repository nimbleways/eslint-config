// @ts-check

// Workaround to avoid declaring plugins and parsers as peer dependencies
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./configurations/possible-errors.js",
    "./configurations/best-practice.js",
    "./configurations/es6",
    "./configurations/variables",
    "./configurations/stylistic",
    "./configurations/jsx-a11y",
  ],
  plugins: [],
  rules: {},
  overrides: [
    /**
     * Typescript Overrides
     */
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      rules: {},
    },
  ],
};
