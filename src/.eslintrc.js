module.exports = {
  env: {
    browser: true,
    node: false,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
};
