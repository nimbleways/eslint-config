// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./possible-errors.js"],
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
