import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import taskadePlugin from '@taskade/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tsEslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    ignores: ['lib/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@taskade': taskadePlugin,
      prettier: prettierPlugin,
      '@stylistic': stylisticPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Use only the basic rules from our plugin for now
      ...taskadePlugin.configs.base.rules,
      ...taskadePlugin.configs.recommended.rules,
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
  },
];
