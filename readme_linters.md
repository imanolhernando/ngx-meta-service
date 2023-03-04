
# Linters

install dev  "htmlhint": "^1.1.4",

add .htmlhintrc

``

    {
      "attr-value-not-empty": false
    }

``

update eslint

``

    {
      "prefer-destructuring":"warn",
      "object-shorthand":"warn",
    }

``

update eslint

``
{
  "arrowParens": "always",
  "cursorOffset": 0,
  "embeddedLanguageFormatting": "auto",
  "filepath": "",
  "insertPragma": false,
  "htmlWhitespaceSensitivity": "css",
  "printWidth": 80,
  "plugins": [],
  "pluginSearchDirs": [],
  "overrides": [],
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": true,
  "requirePragma": false,
  "singleAttributePerLine": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "singleQuote": true,
  "bracketSpacing": true,
  "bracketSameLine": true,
  "endOfLine": "lf"
}
``
npm i -D @commitlint/{cli,config-conventional}

 .commitlintrc.json

{
  "extends": ["@commitlint/config-conventional"]
}

commitlint.config.js

module.exports = {
  extends: ['@commitlint/config-conventional'],
};

npm i -D husky

npx husky install

npx husky add .husky/commit-msg 'npx commitlint --edit $1'
