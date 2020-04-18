export default {
  plugins: ['simple-import-sort'],
  rules: {
    eqeqeq: ['error', 'always', { null: 'never' }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^draft'],
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'warn',
  },
};
