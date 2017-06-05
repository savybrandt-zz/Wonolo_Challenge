module.exports = {
  // https://github.com/feross/standard/blob/master/RULES.md
  extends: [
    'standard',
    'standard-react'
  ],
  parser: 'babel-eslint',
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // required space before parenthesis of anonymous function
    // disallow space before parenthesis of named function
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }]
  }
}
