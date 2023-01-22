// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["simple-import-sort"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
      },
    ],
    "simple-import-sort/exports": "off",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          /**
           * Styles related imports
           * - import "index.css"
           * - import "button.scss"
           */
          ["^.+\\.s?css$"],
          /**
           * Side Effect imports
           */
          ["^\\u0000"],
          /**
           * React related imports
           * - import * as React from "react";
           */
          ["^react$", "^react-dom$"],
          /**
           * Alias path imports
           */
          ["^~", "^@/"],
          /**
           * Parent imports
           * - ../patch
           * - ../
           */
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          /**
           * Same level import
           * - ./nav
           * - ./nav/menu-item
           * - ./
           */
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "array-bracket-newline": "off", // https://eslint.org/docs/rules/array-bracket-newline
    "array-bracket-spacing": "off", // https://eslint.org/docs/rules/array-bracket-spacing
    "array-element-newline": "off", // https://eslint.org/docs/rules/array-element-newline
    "block-spacing": "off", // https://eslint.org/docs/rules/block-spacing
    "brace-style": "off", // https://eslint.org/docs/rules/brace-style
    camelcase: [
      "error",
      {
        properties: "always",
        ignoreDestructuring: true,
        ignoreImports: false,
        ignoreGlobals: true,
        allow: [],
      },
    ], // https://eslint.org/docs/rules/camelcase
    "capitalized-comments": "off", // https://eslint.org/docs/rules/capitalized-comments
    "comma-dangle": "off", // https://eslint.org/docs/rules/comma-dangle
    "comma-spacing": "off", // https://eslint.org/docs/rules/comma-spacing
    "comma-style": "off", // https://eslint.org/docs/rules/comma-style
    "computed-property-spacing": "off", // https://eslint.org/docs/rules/computed-property-spacing
    "consistent-this": "off", // https://eslint.org/docs/rules/consistent-this
    "eol-last": "off", // https://eslint.org/docs/rules/eol-last
    "func-call-spacing": "off", // https://eslint.org/docs/rules/func-call-spacing
    "func-name-matching": [
      "error",
      "always",
      { considerPropertyDescriptor: true, includeCommonJSModuleExports: false },
    ], // https://eslint.org/docs/rules/func-name-matching
    "func-names": ["error", "as-needed", { generators: "as-needed" }], // https://eslint.org/docs/rules/func-names
    "func-style": "off", // https://eslint.org/docs/rules/func-style
    "function-call-argument-newline": "off", // https://eslint.org/docs/rules/function-call-argument-newline
    "function-paren-newline": "off", // https://eslint.org/docs/rules/function-paren-newline
    "id-blacklist": "off", // https://eslint.org/docs/rules/id-blacklist
    "id-denylist": "off", // https://eslint.org/docs/rules/id-denylist
    "id-length": ["error", { min: 2, properties: "always", exceptions: ["e", "_"] }], // https://eslint.org/docs/rules/id-length
    "id-match": "off", // https://eslint.org/docs/rules/id-match
    "implicit-arrow-linebreak": "off", // https://eslint.org/docs/rules/implicit-arrow-linebreak
    indent: "off", // https://eslint.org/docs/rules/indent
    "indent-legacy": "off", // https://eslint.org/docs/rules/indent-legacy
    "jsx-quotes": "off", // https://eslint.org/docs/rules/jsx-quotes
    "key-spacing": "off", // https://eslint.org/docs/rules/key-spacing
    "keyword-spacing": "off", // https://eslint.org/docs/rules/keyword-spacing
    "line-comment-position": "off", // https://eslint.org/docs/rules/line-comment-position
    "linebreak-style": "off", // https://eslint.org/docs/rules/linebreak-style
    "lines-around-comment": "off", // https://eslint.org/docs/rules/lines-around-comment
    "lines-around-directive": "off", // https://eslint.org/docs/rules/lines-around-directive
    "lines-between-class-members": "off", // https://eslint.org/docs/rules/lines-between-class-members
    "logical-assignment-operators": ["error", "always", { enforceForIfStatements: false }], // https://eslint.org/docs/latest/rules/logical-assignment-operators
    "max-depth": ["error", { max: 3 }], // https://eslint.org/docs/rules/max-depth
    "max-len": "off", // https://eslint.org/docs/rules/max-len
    "max-lines": ["error", { max: 300, skipBlankLines: true, skipComments: true }], // https://eslint.org/docs/rules/max-lines
    "max-lines-per-function": "off", // https://eslint.org/docs/latest/rules/max-lines-per-function
    "max-nested-callbacks": ["error", { max: 2 }], // https://eslint.org/docs/rules/max-nested-callbacks
    "max-params": ["error", { max: 4 }], // https://eslint.org/docs/rules/max-params
    "max-statements": ["error", { max: 25 }, { ignoreTopLevelFunctions: false }], // https://eslint.org/docs/rules/max-statements
    "max-statements-per-line": ["error", { max: 1 }], // https://eslint.org/docs/rules/max-statements-per-line
    "multiline-comment-style": "off", // https://eslint.org/docs/rules/multiline-comment-style
    "multiline-ternary": "off", // https://eslint.org/docs/rules/multiline-ternary
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true,
        newIsCapExceptions: [],
        capIsNewExceptions: [],
        properties: true,
      },
    ], // https://eslint.org/docs/rules/new-cap
    "new-parens": "off", // https://eslint.org/docs/rules/new-parens
    "newline-after-var": "off", // https://eslint.org/docs/rules/newline-after-var
    "newline-before-return": "off", // https://eslint.org/docs/rules/newline-before-return
    "newline-per-chained-call": "off", // https://eslint.org/docs/rules/newline-per-chained-call
    "no-array-constructor": "off", // https://eslint.org/docs/rules/no-array-constructor
    "no-bitwise": ["error", { allow: [], int32Hint: false }], // https://eslint.org/docs/rules/no-bitwise
    "no-continue": "off", // https://eslint.org/docs/rules/no-continue
    "no-inline-comments": "off", // https://eslint.org/docs/rules/no-inline-comments
    "no-lonely-if": "error", // https://eslint.org/docs/rules/no-lonely-if
    "no-mixed-operators": "off", // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-spaces-and-tabs": "off", // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-multi-assign": ["error", { ignoreNonDeclaration: false }], // https://eslint.org/docs/rules/no-multi-assign
    "no-multiple-empty-lines": "off", // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-negated-condition": "error", // https://eslint.org/docs/rules/no-negated-condition
    "no-nested-ternary": "error", // https://eslint.org/docs/rules/no-nested-ternary
    "no-new-object": "error", // https://eslint.org/docs/rules/no-new-object
    "no-plusplus": "off", // https://eslint.org/docs/rules/no-plusplus
    "no-restricted-syntax": "off", // https://eslint.org/docs/rules/no-restricted-syntax
    "no-spaced-func": "off", // https://eslint.org/docs/rules/no-spaced-func
    "no-tabs": "off", // https://eslint.org/docs/rules/no-tabs
    "no-ternary": "off", // https://eslint.org/docs/rules/no-ternary
    "no-trailing-spaces": "off", // https://eslint.org/docs/rules/no-trailing-spaces
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        enforceInMethodNames: false,
        allowFunctionParams: true,
      },
    ], // https://eslint.org/docs/rules/no-underscore-dangle
    "no-unneeded-ternary": ["error", { defaultAssignment: false }], // https://eslint.org/docs/rules/no-unneeded-ternary
    "no-whitespace-before-property": "off", // https://eslint.org/docs/rules/no-whitespace-before-property
    "nonblock-statement-body-position": "off", // https://eslint.org/docs/rules/nonblock-statement-body-position
    "object-curly-newline": "off", // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-spacing": "off", // https://eslint.org/docs/rules/object-curly-spacing
    "object-property-newline": "off", // https://eslint.org/docs/rules/object-property-newline
    "one-var": "off", // https://eslint.org/docs/rules/one-var
    "one-var-declaration-per-line": "off", // https://eslint.org/docs/rules/one-var-declaration-per-line
    "operator-assignment": ["error", "always"], // https://eslint.org/docs/rules/operator-assignment
    "operator-linebreak": "off", // https://eslint.org/docs/rules/operator-linebreak
    "padded-blocks": "off", // https://eslint.org/docs/rules/padded-blocks
    "padding-line-between-statements": "off", // https://eslint.org/docs/rules/padding-line-between-statements
    "prefer-exponentiation-operator": "error", // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-object-spread": "error", // https://eslint.org/docs/rules/prefer-object-spread
    "quote-props": "off", // https://eslint.org/docs/rules/quote-props
    quotes: "off", // https://eslint.org/docs/rules/quotes
    "require-jsdoc": "off", // https://eslint.org/docs/rules/require-jsdoc
    semi: "off", // https://eslint.org/docs/rules/semi
    "semi-spacing": "off", // https://eslint.org/docs/rules/semi-spacing
    "semi-style": "off", // https://eslint.org/docs/rules/semi-style
    "sort-keys": "off", // https://eslint.org/docs/rules/sort-keys
    "sort-vars": "off", // https://eslint.org/docs/rules/sort-vars
    "space-before-blocks": "off", // https://eslint.org/docs/rules/space-before-blocks
    "space-before-function-paren": "off", // https://eslint.org/docs/rules/space-before-function-paren
    "space-in-parens": "off", // https://eslint.org/docs/rules/space-in-parens
    "space-infix-ops": "off", // https://eslint.org/docs/rules/space-infix-ops
    "space-unary-ops": "off", // https://eslint.org/docs/rules/space-unary-ops
    "spaced-comment": "off", // https://eslint.org/docs/rules/spaced-comment
    "switch-colon-spacing": "off", // https://eslint.org/docs/rules/switch-colon-spacing
    "template-tag-spacing": "off", // https://eslint.org/docs/rules/template-tag-spacing
    "unicode-bom": "off", // https://eslint.org/docs/rules/unicode-bom
    "wrap-regex": "off", // https://eslint.org/docs/rules/wrap-regex
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
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/array-type.md
        "@typescript-eslint/ban-tslint-comment": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
        "@typescript-eslint/brace-style": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/brace-style.md
        "@typescript-eslint/comma-dangle": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/comma-dangle.md
        "@typescript-eslint/comma-spacing": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/comma-spacing.md
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports", disallowTypeAnnotations: true },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        "@typescript-eslint/explicit-function-return-type": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          { accessibility: "explicit", ignoredMethodNames: [], overrides: {} },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        "@typescript-eslint/explicit-module-boundary-types": [
          "error",
          {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        "@typescript-eslint/func-call-spacing": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/func-call-spacing.md
        "@typescript-eslint/indent": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/indent.md
        "@typescript-eslint/keyword-spacing": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/keyword-spacing.md
        "@typescript-eslint/lines-between-class-members": [
          "error",
          "always",
          { exceptAfterSingleLine: true, exceptAfterOverload: true },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/lines-between-class-members.md
        "@typescript-eslint/member-delimiter-style": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        "@typescript-eslint/no-array-constructor": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-array-constructor.md
        "@typescript-eslint/no-confusing-non-null-assertion": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
        "@typescript-eslint/no-extra-non-null-assertion": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
        "@typescript-eslint/no-non-null-assertion": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
        "@typescript-eslint/no-parameter-properties": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-parameter-properties.md
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
          "error",
          {
            allowComparingNullableBooleansToTrue: true,
            allowComparingNullableBooleansToFalse: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
        "@typescript-eslint/object-curly-spacing": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/object-curly-spacing.md
        "@typescript-eslint/prefer-for-of": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-for-of.md
        "@typescript-eslint/semi": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/semi.md
        "@typescript-eslint/sort-type-union-intersection-members": [
          "error",
          { checkIntersections: true, checkUnions: true },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
        "@typescript-eslint/space-before-function-paren": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/space-before-function-paren.md
        "@typescript-eslint/space-infix-ops": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/space-infix-ops.md
        "@typescript-eslint/type-annotation-spacing": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
      },
    },
    {
      "files": ["*.{spec,test}.{ts,tsx}"],
      "rules": {
        "max-nested-callbacks": ["error", { "max": 4 }],
      }
    }
  ],
};
