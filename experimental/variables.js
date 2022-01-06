// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
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
      rules: {
        "@typescript-eslint/naming-convention": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/naming-convention.md
      },
    },
  ],
};
