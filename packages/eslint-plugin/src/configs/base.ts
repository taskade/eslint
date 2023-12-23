import { ESLint } from 'eslint';

export default {
  env: {
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    'plugin:prettier/recommended',
    'plugin:@taskade/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // https://node.green/#ES2020
    ecmaVersion: 2020,
    sourceType: 'module',
    useJSXTextNode: true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        bracketSameLine: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
} satisfies ESLint.ConfigData;
