// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: false },
    ], // https://eslint.org/docs/rules/arrow-body-style
    "arrow-parens": "off", // https://eslint.org/docs/rules/arrow-parens
    "arrow-spacing": "off", // https://eslint.org/docs/rules/arrow-spacing
    "constructor-super": "error", // https://eslint.org/docs/rules/constructor-super
    "generator-star-spacing": "off", // https://eslint.org/docs/rules/generator-star-spacing
    "no-class-assign": "error", // https://eslint.org/docs/rules/no-class-assign
    "no-confusing-arrow": "off", // https://eslint.org/docs/rules/no-confusing-arrow
    "no-const-assign": "error", // https://eslint.org/docs/rules/no-const-assign
    "no-dupe-class-members": "off", // https://eslint.org/docs/rules/no-dupe-class-members
    "no-duplicate-imports": "off", // https://eslint.org/docs/rules/no-duplicate-imports
    "no-new-symbol": "error", // https://eslint.org/docs/rules/no-new-symbol
    "no-restricted-exports": "off", // https://eslint.org/docs/rules/no-restricted-exports
    "no-restricted-imports": "off", // https://eslint.org/docs/rules/no-restricted-imports
    "no-this-before-super": "error", // https://eslint.org/docs/rules/no-this-before-super
    "no-useless-computed-key": ["error", { enforceForClassMembers: true }], // https://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-constructor": "off", // https://eslint.org/docs/rules/no-useless-constructor
    "no-useless-rename": [
      "error",
      { ignoreImport: false, ignoreExport: false, ignoreDestructuring: false },
    ], // https://eslint.org/docs/rules/no-useless-rename
    "no-var": "error", // https://eslint.org/docs/rules/no-var
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false,
      },
    ], // https://eslint.org/docs/rules/object-shorthand
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: true, allowUnboundThis: false },
    ], // https://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const": [
      "error",
      { destructuring: "all", ignoreReadBeforeAssign: false },
    ], // https://eslint.org/docs/rules/prefer-const
    "prefer-destructuring": ["error", { object: true, array: false }], // https://eslint.org/docs/rules/prefer-destructuring
    "prefer-numeric-literals": "error", // https://eslint.org/docs/rules/prefer-numeric-literals
    "prefer-reflect": "off", // https://eslint.org/docs/rules/prefer-reflect
    "prefer-rest-params": "error", // https://eslint.org/docs/rules/prefer-rest-params
    "prefer-spread": "error", // https://eslint.org/docs/rules/prefer-spread
    "prefer-template": "error", // https://eslint.org/docs/rules/prefer-template
    "require-yield": "error", // https://eslint.org/docs/rules/require-yield
    "rest-spread-spacing": "off", // https://eslint.org/docs/rules/rest-spread-spacing
    "sort-imports": "off", // https://eslint.org/docs/rules/sort-imports
    "symbol-description": "error", // https://eslint.org/docs/rules/symbol-description
    "template-curly-spacing": "off", // https://eslint.org/docs/rules/template-curly-spacing
    "yield-star-spacing": "off", // https://eslint.org/docs/rules/yield-star-spacing
  },
};
