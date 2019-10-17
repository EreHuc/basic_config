module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['prettier'],
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      modules: true,
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        'destructuring': 'any',
        'ignoreReadBeforeAssign': false
      }
    ],
    'prefer-arrow-callback': ['error', {'allowUnboundThis': false}]
  }
};
