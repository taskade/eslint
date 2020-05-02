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
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-empty-function': 'off',
    // NOTE :(stan@taskade.com) Commented away due to additional configuration (`parserOptions.project`) needed.
    // '@typescript-eslint/strict-boolean-expressions': 'error',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'no-implicit-coercion': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^draft'],
      },
    ],
    'no-shadow': 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'warn',
  },
};
