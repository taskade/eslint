import js from '@eslint/js';
import tsEslint from 'typescript-eslint';
import taskadePlugin from '@taskade/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      '@taskade': taskadePlugin,
      'prettier': prettierPlugin,
    },
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Use only the basic rules from our plugin for now
      ...taskadePlugin.configs.base.rules,
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
  },
  {
    files: ['scripts/**/*.{js,mjs}', '*.{js,mjs}'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
  },
]; 