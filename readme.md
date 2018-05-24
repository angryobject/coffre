# Coffre

Coffre *(stands for "chest" in french)* is a configuration files manager. It copies predefined config files organized into presets into current directory.

This is a simple util i made for myself because got tired of copy-pasting files from previous projects and poor memory for various config options in different tools. Currently it's best suited for bootstrapping frontend/node projects but it may change in future. Files are not exhaustive and may need some manual editing for current project needs after being copied. And they may be opinionated.

## Install

```
npm i -g coffre
# or
yarn global add coffre
```

## Usage

```
coffre <preset1> [<preset2> <preset3> ...]

coffre --help # for help
```

For example:

```bash
# copy `package.json`, `readme.md` and `license`:
coffre project

# copy `.gitignore` and `.gitattributes`:
coffre git

# copy `.editorconfig`:
coffre editor
```

## Presets & included files:

**package**

```
package.json
readme.md
license
```

**git**

```
.gitignore
.gitattributes
```

**editor**

```
.editorconfig
```

**lint**

```
.eslintrc
.eslintignore
.prettierrc
.prettierignore
.lintstagedrc
```

**npm**

```
.npmignore
```

**core**

```
package preset
git preset
editor preset
lint preset
npm preset
```

**webpack**

```
core preset
webpack.config.js
.babelrc
postcss.config.js
jest.config.js
.browserslistrc
```

**rollup**

```
core preset
rollup.config.js
.babelrc
.browserslistrc
```
