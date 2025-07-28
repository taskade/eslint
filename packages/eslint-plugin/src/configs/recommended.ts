export default {
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    sourceType: 'module',
  },
  rules: {
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    '@typescript-eslint/camelcase': 'off', // NOTE: (stan@taskade.com) This rule is deprecated.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-empty-function': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    // NOTE :(stan@taskade.com) Commented away due to additional configuration (`parserOptions.project`) needed.
    // '@typescript-eslint/strict-boolean-expressions': 'error',
    curly: ['error', 'all'],
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
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
  },
} as const;
