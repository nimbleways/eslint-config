// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    "for-direction": "error", // https://eslint.org/docs/rules/for-direction
    "getter-return": "error", // https://eslint.org/docs/rules/getter-return
    "no-async-promise-executor": "error", // https://eslint.org/docs/rules/no-async-promise-executor,
    "no-await-in-loop": "error", // https://eslint.org/docs/rules/no-await-in-loop
    "no-compare-neg-zero": "error", // https://eslint.org/docs/rules/no-compare-neg-zero
    "no-cond-assign": "error", // https://eslint.org/docs/rules/no-cond-assign
    "no-console": "error", // https://eslint.org/docs/rules/no-console
    "no-constant-binary-expression": "error", // https://eslint.org/docs/latest/rules/no-constant-binary-expression
    "no-constant-condition": "off", // https://eslint.org/docs/rules/no-constant-condition
    "no-control-regex": "error", // https://eslint.org/docs/rules/no-control-regex
    "no-debugger": "error", // https://eslint.org/docs/rules/no-debugger
    "no-dupe-args": "error", // https://eslint.org/docs/rules/no-dupe-args
    "no-dupe-else-if": "error", // https://eslint.org/docs/rules/no-dupe-else-if
    "no-dupe-keys": "error", // https://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case": "error", // https://eslint.org/docs/rules/no-duplicate-case
    "no-empty": ["error", { allowEmptyCatch: true }], // https://eslint.org/docs/rules/no-empty
    "no-empty-character-class": "error", // https://eslint.org/docs/rules/no-empty-character-class
    "no-empty-static-block": "error", // https://eslint.org/docs/latest/rules/no-empty-static-block
    "no-ex-assign": "error", // https://eslint.org/docs/rules/no-ex-assign
    "no-extra-boolean-cast": ["error", { enforceForLogicalOperands: true }], // https://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-parens": "off", // https://eslint.org/docs/rules/no-extra-parens
    "no-extra-semi": "off", // https://eslint.org/docs/rules/no-extra-semi
    "no-func-assign": "error", // https://eslint.org/docs/rules/no-func-assign
    "no-import-assign": "error", // https://eslint.org/docs/rules/no-import-assign
    "no-inner-declarations": ["error", "both"], // https://eslint.org/docs/rules/no-inner-declarations
    "no-invalid-regexp": ["error", { allowConstructorFlags: [] }], // https://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: false,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
      },
    ], // https://eslint.org/docs/rules/no-irregular-whitespace
    "no-loss-of-precision": "off", // https://eslint.org/docs/rules/no-loss-of-precision
    "no-misleading-character-class": "error", // https://eslint.org/docs/rules/no-misleading-character-class
    "no-negated-in-lhs": "off", // https://eslint.org/docs/rules/no-negated-in-lhs
    "no-new-native-nonconstructor": "error", // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    "no-obj-calls": "error", // https://eslint.org/docs/rules/no-obj-calls
    "no-promise-executor-return": "error", // https://eslint.org/docs/rules/no-promise-executor-return
    "no-prototype-builtins": "error", // https://eslint.org/docs/rules/no-prototype-builtins
    "no-regex-spaces": "error", // https://eslint.org/docs/rules/no-regex-spaces
    "no-setter-return": "error", // https://eslint.org/docs/rules/no-setter-return
    "no-sparse-arrays": "error", // https://eslint.org/docs/rules/no-sparse-arrays
    "no-template-curly-in-string": "error", // https://eslint.org/docs/rules/no-template-curly-in-string
    "no-unexpected-multiline": "error", // https://eslint.org/docs/rules/no-unexpected-multiline
    "no-unreachable": "error", // https://eslint.org/docs/rules/no-unreachable
    "no-unreachable-loop": ["error", { ignore: [] }], // https://eslint.org/docs/rules/no-unreachable-loop
    "no-unsafe-finally": "error", // https://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-negation": ["error", { enforceForOrderingRelations: true }], // https://eslint.org/docs/rules/no-unsafe-negation
    "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }], // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    "no-useless-backreference": "error", // https://eslint.org/docs/rules/no-useless-backreference
    "require-atomic-updates": "error", // https://eslint.org/docs/rules/require-atomic-updates
    "use-isnan": ["error", { enforceForSwitchCase: true, enforceForIndexOf: true }], // https://eslint.org/docs/rules/use-isnan
    "valid-jsdoc": "off", // https://eslint.org/docs/rules/valid-jsdoc
    "valid-typeof": ["error", { requireStringLiterals: true }], // https://eslint.org/docs/rules/valid-typeof
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
        "@typescript-eslint/no-dupe-class-members": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
        "@typescript-eslint/no-extra-parens": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-extra-parens.md
        "@typescript-eslint/no-extra-semi": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-extra-semi.md
        "@typescript-eslint/no-loss-of-precision": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
        "@typescript-eslint/no-unsafe-argument": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
        "@typescript-eslint/no-unsafe-assignment": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
        "@typescript-eslint/no-unsafe-call": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unsafe-call.md
        "@typescript-eslint/no-unsafe-member-access": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
        "@typescript-eslint/no-unsafe-return": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unsafe-return.md
      },
    },
  ],
};
