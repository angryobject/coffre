module.exports = {
  package: [
    {
      'core/package': 'package.json',
      'core/readme': 'readme.md',
      'core/license': 'license',
    },
  ],

  git: [
    {
      'core/gitignore': '.gitignore',
      'core/gitattributes': '.gitattributes',
    },
  ],

  editor: [
    {
      'core/editorconfig': '.editorconfig',
    },
  ],

  lint: [
    {
      'core/eslint': '.eslintrc',
      'core/eslintignore': '.eslintignore',
      'core/prettier': '.prettierrc',
      'core/prettierignore': '.prettierignore',
      'core/lintstaged': '.lintstagedrc',
    },
  ],

  npm: [
    {
      'core/npmignore': '.npmignore',
    },
  ],

  core: ['package', 'git', 'editor', 'lint', 'npm'],

  webpack: [
    'core',
    {
      'bundlers/webpack/webpack': 'webpack.config.js',
      'bundlers/webpack/babel': '.babelrc',
      'bundlers/webpack/postcss': 'postcss.config.js',
      'bundlers/webpack/jest': 'jest.config.js',
      'bundlers/browserslist': '.browserslistrc',
    },
  ],

  rollup: [
    'core',
    {
      'bundlers/rollup/rollup': 'rollup.config.js',
      'bundlers/rollup/babel': '.babelrc',
      'bundlers/browserslist': '.browserslistrc',
    },
  ],
};
