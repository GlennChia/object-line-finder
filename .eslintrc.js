module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
  }
};