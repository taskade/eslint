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
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: {
          memberTypes: [
            // Index signature
            'signature',

            // Fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            'public-abstract-field',
            'protected-abstract-field',
            'private-abstract-field',

            'public-field',
            'protected-field',
            'private-field',

            'static-field',
            'instance-field',
            'abstract-field',

            'field',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'constructor',

            // Methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',

            'public-abstract-method',
            'protected-abstract-method',
            'private-abstract-method',

            'public-method',
            'protected-method',
            'private-method',

            'static-method',
            'instance-method',
            'abstract-method',

            'method',
          ],
          order: 'alphabetically',
        },
      },
    ],
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
    'no-shadow': 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'warn',
  },
};
