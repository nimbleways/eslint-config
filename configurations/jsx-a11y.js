// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["**/*.[jt]sx"],
      extends: ["plugin:jsx-a11y/recommended"],
      rules: {
        "jsx-a11y/lang": "off",
        "jsx-a11y/no-aria-hidden-on-focusable": "off",
        "jsx-a11y/prefer-tag-over-role": "off",
      },
    },
  ],
};
