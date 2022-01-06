// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["simple-import-sort"],
  rules: {
    "sort-imports": "off",
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
        "@typescript-eslint/consistent-type-definitions": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        "@typescript-eslint/member-ordering": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/member-ordering.md
        "@typescript-eslint/no-type-alias": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/no-type-alias.md
        "@typescript-eslint/typedef": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.29.0/packages/eslint-plugin/docs/rules/typedef.md
      },
    },
  ],
};
