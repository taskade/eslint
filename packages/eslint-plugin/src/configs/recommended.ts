export default {
  plugins: [
    'simple-import-sort'
  ],
  rules: {
    eqeqeq: ['error', 'always', { null: 'never' }],
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'warn',
  },
};
