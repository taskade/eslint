export default {
  env: {
    es6: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/camelcase': 'off', // NOTE: (stan@taskade.com) This rule is deprecated.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'no-implicit-coercion': 'error',
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
