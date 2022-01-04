// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [],
  plugins: [],
  rules: {},
  overrides: [
    /**
     * Assuming all the projects uses Typescript
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
