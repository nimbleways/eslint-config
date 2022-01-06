// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    "init-declarations": "off", // https://eslint.org/docs/rules/init-declarations
    "no-catch-shadow": "off", // https://eslint.org/docs/rules/no-catch-shadow
    "no-delete-var": "error", // https://eslint.org/docs/rules/no-delete-var
    "no-label-var": "off", // https://eslint.org/docs/rules/no-label-var
    "no-restricted-globals": "off", // https://eslint.org/docs/rules/no-restricted-globals
    "no-shadow": "off", // https://eslint.org/docs/rules/no-shadow
    "no-shadow-restricted-names": "error", // https://eslint.org/docs/rules/no-shadow-restricted-names
    "no-undef": "off", // https://eslint.org/docs/rules/no-undef
    "no-undef-init": "error", // https://eslint.org/docs/rules/no-undef-init
    "no-undefined": "off", // https://eslint.org/docs/rules/no-undefined
    "no-unused-vars": "off", // https://eslint.org/docs/rules/no-unused-vars
    "no-use-before-define": "off", // https://eslint.org/docs/rules/no-use-before-define
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
        "@typescript-eslint/init-declarations": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/init-declarations.md
        "@typescript-eslint/no-shadow": [
          "error",
          {
            builtinGlobals: false,
            hoist: "all",
            ignoreTypeValueShadow: false,
            ignoreFunctionTypeParameterNameValueShadow: false,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-shadow.md
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            vars: "all",
            ignoreRestSiblings: false,
            args: "all",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unused-vars.md
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false,
            classes: true,
            variables: true,
            enums: true,
            typedefs: true,
            ignoreTypeReferences: false,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-use-before-define.md
        "@typescript-eslint/unified-signatures": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/unified-signatures.md
      },
    },
  ],
};
