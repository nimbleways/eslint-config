// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
    rules: {
      "accessor-pairs": [
        "error",
        {
          getWithoutSet: false,
          setWithoutGet: true,
          enforceForClassMembers: true,
        },
      ], // https://eslint.org/docs/rules/accessor-pairs
      "array-callback-return": [
        "error",
        { allowImplicit: false, checkForEach: true },
      ], // https://eslint.org/docs/rules/array-callback-return
      "block-scoped-var": "error", // https://eslint.org/docs/rules/block-scoped-var
      "class-methods-use-this": ["error", { exceptMethods: [] }], // https://eslint.org/docs/rules/class-methods-use-this
      complexity: ["error", { max: 10 }], // https://eslint.org/docs/rules/complexity
      "consistent-return": ["error", { treatUndefinedAsUnspecified: true }], // https://eslint.org/docs/rules/consistent-return
      curly: ["error", "all"], // https://eslint.org/docs/rules/curly
      "default-case": "off", // https://eslint.org/docs/rules/default-case
      "default-case-last": "error", // https://eslint.org/docs/rules/default-case-last
      "default-param-last": "off", // https://eslint.org/docs/rules/default-param-last
      "dot-location": "off", // https://eslint.org/docs/rules/dot-location
      "dot-notation": "off", // https://eslint.org/docs/rules/dot-notation
      eqeqeq: ["error", "smart"], // https://eslint.org/docs/rules/eqeqeq
      "grouped-accessor-pairs": ["error", "getBeforeSet"], // https://eslint.org/docs/rules/grouped-accessor-pairs
      "guard-for-in": "error", // https://eslint.org/docs/rules/guard-for-in
      "max-classes-per-file": ["error", 3], // https://eslint.org/docs/rules/max-classes-per-file
      "no-alert": "error", // https://eslint.org/docs/rules/no-alert
      "no-caller": "error", // https://eslint.org/docs/rules/no-caller
      "no-case-declarations": "error", // https://eslint.org/docs/rules/no-case-declarations
      "no-constructor-return": "error", // https://eslint.org/docs/rules/no-constructor-return
      "no-div-regex": "error", // https://eslint.org/docs/rules/no-div-regex
      "no-else-return": ["error", { allowElseIf: false }], // https://eslint.org/docs/rules/no-else-return
      "no-empty-function": "off", // https://eslint.org/docs/rules/no-empty-function
      "no-empty-pattern": "error", // https://eslint.org/docs/rules/no-empty-pattern
      "no-eq-null": "error", // https://eslint.org/docs/rules/no-eq-null
      "no-eval": ["error", { allowIndirect: false }], // https://eslint.org/docs/rules/no-eval
      "no-extend-native": ["error", { exceptions: [] }], // https://eslint.org/docs/rules/no-extend-native
      "no-extra-bind": "error", // https://eslint.org/docs/rules/no-extra-bind
      "no-extra-label": "off", // https://eslint.org/docs/rules/no-extra-label
      "no-fallthrough": ["error", { commentPattern: "falls through" }], // https://eslint.org/docs/rules/no-fallthrough
      "no-floating-decimal": "off", // https://eslint.org/docs/rules/no-floating-decimal
      "no-global-assign": ["error", { exceptions: [] }], // https://eslint.org/docs/rules/no-global-assign
      "no-implicit-coercion": [
        "error",
        {
          boolean: true,
          number: true,
          string: true,
          disallowTemplateShorthand: true,
          allow: [],
        },
      ], // https://eslint.org/docs/rules/no-implicit-coercion
      "no-implicit-globals": "off", // https://eslint.org/docs/rules/no-implicit-globals
      "no-implied-eval": "off", // https://eslint.org/docs/rules/no-implied-eval
      "no-invalid-this": "off", // https://eslint.org/docs/rules/no-invalid-this
      "no-iterator": "error", // https://eslint.org/docs/rules/no-iterator
      "no-labels": ["error", { allowLoop: false, allowSwitch: false }], // https://eslint.org/docs/rules/no-labels
      "no-lone-blocks": "error", // https://eslint.org/docs/rules/no-lone-blocks
      "no-loop-func": "off", // https://eslint.org/docs/rules/no-loop-func
      "no-magic-numbers": "off", // https://eslint.org/docs/rules/no-magic-numbers
      "no-multi-spaces": "off", // https://eslint.org/docs/rules/no-multi-spaces
      "no-multi-str": "error", // https://eslint.org/docs/rules/no-multi-str
      "no-native-reassign": "off", // https://eslint.org/docs/rules/no-native-reassign
      "no-new": "error", // https://eslint.org/docs/rules/no-new
      "no-new-func": "error", // https://eslint.org/docs/rules/no-new-func
      "no-new-wrappers": "error", // https://eslint.org/docs/rules/no-new-wrappers
      "no-nonoctal-decimal-escape": "error", // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
      "no-octal": "error", // https://eslint.org/docs/rules/no-octal
      "no-octal-escape": "error", // https://eslint.org/docs/rules/no-octal-escape
      "no-param-reassign": ["error", { props: true }], // https://eslint.org/docs/rules/no-param-reassign
      "no-proto": "error", // https://eslint.org/docs/rules/no-proto
      "no-redeclare": "off", // https://eslint.org/docs/rules/no-redeclare
      "no-restricted-properties": "off", // https://eslint.org/docs/rules/no-restricted-properties
      "no-return-assign": ["error", "always"], // https://eslint.org/docs/rules/no-return-assign
      "no-return-await": "off", // https://eslint.org/docs/rules/no-return-await
      "no-script-url": "error", // https://eslint.org/docs/rules/no-script-url
      "no-self-assign": ["error", { props: true }], // https://eslint.org/docs/rules/no-self-assign
      "no-self-compare": "error", // https://eslint.org/docs/rules/no-self-compare
      "no-sequences": ["error", { allowInParentheses: false }], // https://eslint.org/docs/rules/no-sequences
      "no-throw-literal": "off", // https://eslint.org/docs/rules/no-throw-literal
      "no-unmodified-loop-condition": "error", // https://eslint.org/docs/rules/no-unmodified-loop-condition
      "no-unused-expressions": "off", // https://eslint.org/docs/rules/no-unused-expressions
      "no-unused-labels": "off", // https://eslint.org/docs/rules/no-unused-labels
      "no-useless-call": "error", // https://eslint.org/docs/rules/no-useless-call
      "no-useless-catch": "error", // https://eslint.org/docs/rules/no-useless-catch
      "no-useless-concat": "error", // https://eslint.org/docs/rules/no-useless-concat
      "no-useless-escape": "error", // https://eslint.org/docs/rules/no-useless-escape
      "no-useless-return": "error", // https://eslint.org/docs/rules/no-useless-return
      "no-void": ["error", { allowAsStatement: false }], // https://eslint.org/docs/rules/no-void
      "no-warning-comments": [
        "warn",
        { terms: ["todo", "fixme", "tofix", "fix"], location: "start" },
      ], // https://eslint.org/docs/rules/no-warning-comments
      "no-with": "error", // https://eslint.org/docs/rules/no-with
      "prefer-named-capture-group": "error", // https://eslint.org/docs/rules/prefer-named-capture-group
      "prefer-promise-reject-errors": ["error", { allowEmptyReject: false }], // https://eslint.org/docs/rules/prefer-promise-reject-errors
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }], // https://eslint.org/docs/rules/prefer-regex-literals
      radix: ["error", "always"], // https://eslint.org/docs/rules/radix
      // TO BE CHALLENGED
      "react-hooks/exhaustive-deps": "off", // https://github.com/facebook/react/issues/14920
      "require-await": "off", // https://eslint.org/docs/rules/require-await
      "require-unicode-regexp": "error", // https://eslint.org/docs/rules/require-unicode-regexp
      "vars-on-top": "off", // https://eslint.org/docs/rules/vars-on-top
      "wrap-iife": "off", // https://eslint.org/docs/rules/wrap-iife
      yoda: ["error", "never", { exceptRange: true }], // https://eslint.org/docs/rules/yoda
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
          "@typescript-eslint/adjacent-overload-signatures": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
          "@typescript-eslint/await-thenable": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/await-thenable.md
          "@typescript-eslint/ban-ts-comment": [
            "error",
            {
              "ts-expect-error": "allow-with-description",
              "ts-ignore": true,
              "ts-nocheck": true,
              "ts-check": false,
              minimumDescriptionLength: 5,
            },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md
          // TO BE CHALLENGED
          "@typescript-eslint/ban-types": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/ban-types.md
          "@typescript-eslint/class-literal-property-style": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/class-literal-property-style.md
          "@typescript-eslint/consistent-type-assertions": [
            "error",
            { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
          "@typescript-eslint/default-param-last": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/default-param-last.md
          "@typescript-eslint/dot-notation": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/dot-notation.md
          "@typescript-eslint/method-signature-style": ["error", "property"], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/method-signature-style.md
          "@typescript-eslint/no-base-to-string": [
            "error",
            { ignoredTypeNames: [] },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-base-to-string.md
          "@typescript-eslint/no-confusing-void-expression": [
            "error",
            { ignoreArrowShorthand: false, ignoreVoidOperator: false },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
          "@typescript-eslint/no-duplicate-imports": [
            "error",
            { includeExports: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
          "@typescript-eslint/no-dynamic-delete": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
          "@typescript-eslint/no-empty-function": [
            "error",
            {
              allow: [
                "private-constructors",
                "protected-constructors",
                "decoratedFunctions",
              ],
            },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-empty-function.md
          "@typescript-eslint/no-empty-interface": [
            "error",
            { allowSingleExtends: false },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-empty-interface.md
          "@typescript-eslint/no-explicit-any": [
            "error",
            { fixToUnknown: false, ignoreRestArgs: false },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-explicit-any.md
          "@typescript-eslint/no-extraneous-class": [
            "error",
            {
              allowConstructorOnly: false,
              allowEmpty: false,
              allowStaticOnly: false,
              allowWithDecorator: true,
            },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-extraneous-class.md
          "@typescript-eslint/no-floating-promises": [
            "error",
            { ignoreVoid: false, ignoreIIFE: false },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-floating-promises.md
          "@typescript-eslint/no-for-in-array": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-for-in-array.md
          "@typescript-eslint/no-implicit-any-catch": [
            "error",
            { allowExplicitAny: false },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
          "@typescript-eslint/no-implied-eval": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-implied-eval.md
          "@typescript-eslint/no-inferrable-types": [
            "error",
            { ignoreParameters: true, ignoreProperties: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md
          "@typescript-eslint/no-invalid-this": [
            "error",
            { capIsConstructor: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-invalid-this.md
          "@typescript-eslint/no-invalid-void-type": [
            "error",
            { allowInGenericTypeArguments: true, allowAsThisParameter: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
          "@typescript-eslint/no-loop-func": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-loop-func.md
          "@typescript-eslint/no-magic-numbers": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md
          "@typescript-eslint/no-misused-new": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-misused-new.md
          "@typescript-eslint/no-misused-promises": [
            "error",
            { checksVoidReturn: true, checksConditionals: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-misused-promises.md
          "@typescript-eslint/no-namespace": [
            "error",
            { allowDeclarations: false, allowDefinitionFiles: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-namespace.md
          "@typescript-eslint/no-redeclare": [
            "error",
            { builtinGlobals: true, ignoreDeclarationMerge: false },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-redeclare.md
          "@typescript-eslint/no-require-imports": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-require-imports.md
          "@typescript-eslint/no-this-alias": [
            "error",
            { allowDestructuring: true, allowedNames: [] },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-this-alias.md
          "@typescript-eslint/no-throw-literal": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-throw-literal.md
          "@typescript-eslint/no-unnecessary-condition": [
            "error",
            {
              allowConstantLoopConditions: false,
              allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
          "@typescript-eslint/no-unnecessary-qualifier": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
          "@typescript-eslint/no-unnecessary-type-arguments": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
          "@typescript-eslint/no-unnecessary-type-assertion": [
            "error",
            { typesToIgnore: [] },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
          "@typescript-eslint/no-unnecessary-type-constraint": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
          "@typescript-eslint/no-unused-expressions": [
            "error",
            {
              allowShortCircuit: true,
              allowTernary: true,
              allowTaggedTemplates: true,
              enforceForJSX: true,
            },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unused-expressions.md
          "@typescript-eslint/no-unused-vars-experimental": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
          "@typescript-eslint/no-useless-constructor": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-useless-constructor.md
          "@typescript-eslint/no-var-requires": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-var-requires.md
          "@typescript-eslint/non-nullable-type-assertion-style": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
          "@typescript-eslint/prefer-as-const": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-as-const.md
          "@typescript-eslint/prefer-enum-initializers": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
          "@typescript-eslint/prefer-function-type": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-function-type.md
          "@typescript-eslint/prefer-includes": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-includes.md
          "@typescript-eslint/prefer-literal-enum-member": [
            "error",
            { allowBitwiseExpressions: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
          "@typescript-eslint/prefer-namespace-keyword": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
          "@typescript-eslint/prefer-nullish-coalescing": [
            "error",
            {
              ignoreConditionalTests: false,
              ignoreMixedLogicalExpressions: false,
            },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
          "@typescript-eslint/prefer-optional-chain": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
          "@typescript-eslint/prefer-readonly": [
            "error",
            { onlyInlineLambdas: false },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-readonly.md
          "@typescript-eslint/prefer-reduce-type-parameter": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
          "@typescript-eslint/prefer-regexp-exec": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
          "@typescript-eslint/prefer-return-this-type": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-return-this-type.md
          "@typescript-eslint/prefer-string-starts-ends-with": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
          "@typescript-eslint/prefer-ts-expect-error": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
          "@typescript-eslint/promise-function-async": [
            "error",
            {
              allowedPromiseNames: [],
              checkArrowFunctions: true,
              checkFunctionDeclarations: true,
              checkFunctionExpressions: true,
              checkMethodDeclarations: true,
            },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/promise-function-async.md
          "@typescript-eslint/require-array-sort-compare": [
            "error",
            { ignoreStringArrays: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
          "@typescript-eslint/require-await": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/require-await.md
          "@typescript-eslint/restrict-plus-operands": [
            "error",
            { checkCompoundAssignments: true },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
          "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
              allowNumber: true,
              allowBoolean: false,
              allowAny: false,
              allowNullish: false,
            },
          ], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
          "@typescript-eslint/return-await": ["error", "in-try-catch"], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/return-await.md
          // TO BE CHALLENGED
          "@typescript-eslint/strict-boolean-expressions": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
          "@typescript-eslint/switch-exhaustiveness-check": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
          // TO BE CHALLENGED
          "@typescript-eslint/triple-slash-reference": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/triple-slash-reference.md
          "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/unbound-method.md
        },
      },
    ],
  };
  