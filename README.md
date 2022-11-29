![nimble-eslint-config](./banner.png)


[Nimbleways](https://www.nimbleways.com/)'s standardized [ESLint](https://github.com/eslint/eslint) configuration with bundled dependencies ([Prettier, TypeScript, etc.](./package.json))

**Table of contents**

- [Installing](#installing)
  - [React Projects](#react-projects)
  - [Next.js Projects](#nextjs-projects)
- [Usage](#usage)

---

## Installation

Using NPM:
```
npm install --save-dev @nimbleways/eslint-config
```
Using Yarn:
```
yarn add --dev @nimbleways/eslint-config
```
This packages requires `eslint@^7` as a required peer depedency.

## Usage
### React Projects

```js
module.exports = {
  extends: [
    "@nimbleways/eslint-config",
    // ...
  ],
};
```
### Next.js Projects
Add `eslint-config-next` as dev dependency.
```js
module.exports = {
  extends: [
    "plugin:@next/next/recommended",
    "@nimbleways/eslint-config",
    // ...
  ],
};
```


## LICENSE
[MIT License, Copyright © 2022 Nimbleways](./LICENSE)