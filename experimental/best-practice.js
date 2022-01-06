// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    "react-hooks/exhaustive-deps": "off", // https://github.com/facebook/react/issues/14920
  },
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
        "@typescript-eslint/ban-types": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/ban-types.md
        "@typescript-eslint/strict-boolean-expressions": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
        "@typescript-eslint/triple-slash-reference": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/triple-slash-reference.md
      },
    },
  ],
};
