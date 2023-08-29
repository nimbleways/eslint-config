# @nimbleways/eslint-config

![nimble-eslint-config](./banner.png)

[![npm version](https://badge.fury.io/js/@nimbleways%2Feslint-config.svg)](https://badge.fury.io/js/@nimbleways%2Feslint-config)


[Nimbleways](https://www.nimbleways.com/)'s standardized [ESLint](https://github.com/eslint/eslint) configuration with bundled dependencies ([Prettier, TypeScript, etc.](./package.json))

**Table of contents**

- [Installing](#installing)
  - [React Projects](#react-projects)
  - [Next.js Projects](#nextjs-projects)
- [Usage](#usage)

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
- eslint: >=8.27.0
- prettier: >=2.5.1
- typescript: >=4.5.4

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
