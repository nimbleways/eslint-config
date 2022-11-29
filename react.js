// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./index.js", "plugin:react/recommended"],

  rules: {
    "react/jsx-sort-props": [
      "warn",
      {
        reservedFirst: ["key"],
      },
    ],
  },
};
