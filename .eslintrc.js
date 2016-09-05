module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  globals: {
    "ga": true,
    "__SERVER_PATH__": true,
    "__ENV__": true,
    "lib": true
  },
  env: {
    "browser": true,
    // "node": true,
    "es6": true
  },
  // add your custom rules here
  'rules': {
    "no-multiple-empty-lines": [2, {"max": 4}],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'camelcase': 0
  }
}
