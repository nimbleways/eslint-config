# @nimbleways/eslint-config

![nimble-eslint-config](./banner.png)

[![npm version](https://badge.fury.io/js/@nimbleways%2Feslint-config.svg)](https://www.npmjs.com/package/@nimbleways/eslint-config)


[Nimbleways](https://www.nimbleways.com/)'s standardized [ESLint](https://github.com/eslint/eslint) configuration with bundled dependencies ([Prettier, TypeScript, etc.](./package.json))

**Table of contents**

- [Installation](#installation)
- [Usage](#usage)
  - [React Projects](#react-projects)
  - [Next.js Projects](#nextjs-projects)

---

## Installation

Using npm:
```
npm install --save-dev @nimbleways/eslint-config
```
Using Yarn:
```
yarn add --dev @nimbleways/eslint-config
```
Using pnpm:
```
pnpm add --save-dev @nimbleways/eslint-config
```

This package requires these peer depedencies:
https://github.com/nimbleways/eslint-config/blob/6e04a77fb3e4580643e63dbecfce48ba65643100/package.json#L31-L35

## Usage
In your ESLint config file:
### React Projects
```diff
module.exports = {
  extends: [
+    "@nimbleways/eslint-config",
    // ...
  ],
};
```
### Next.js Projects
```diff
module.exports = {
  extends: [
    "plugin:@next/next/recommended",
+    "@nimbleways/eslint-config",
    // ...
  ],
};
```


## LICENSE
[MIT License, Copyright © 2023 Nimbleways](./LICENSE)
