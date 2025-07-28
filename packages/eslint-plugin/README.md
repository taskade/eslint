# @taskade/eslint-plugin Configurations

This plugin provides ESLint configurations for Taskade projects, compatible with ESLint v9 flat config.

## Usage with ESLint v9 Flat Config

### Installation

```bash
npm install --save-dev @taskade/eslint-plugin eslint@^9.0.0
```

### Basic Usage

```javascript
// eslint.config.js
import js from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import taskade from '@taskade/eslint-plugin';

export default [
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@taskade': taskade,
    },
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...taskade.configs.base.rules,
      // Add custom overrides here
    },
  },
];
```

### Using Recommended Configuration

```javascript
// eslint.config.js
import js from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import taskade from '@taskade/eslint-plugin';

export default [
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@taskade': taskade,
      '@typescript-eslint': typescriptEslint.plugin,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parser: typescriptEslint.parser,
    },
    rules: {
      ...taskade.configs.base.rules,
      ...taskade.configs.recommended.rules,
    },
  },
];
```

## Available Configurations

### base
Base configuration with Prettier and React support.

### recommended  
Additional TypeScript and import sorting rules for enhanced code quality.

## Migrating from ESLint v8

If you're upgrading from ESLint v8, you'll need to:

1. Update your `.eslintrc.*` files to `eslint.config.js` 
2. Use the flat config format shown above
3. Install the required dependencies: `@eslint/js`, `typescript-eslint`, `globals`
4. Update your plugins to use object syntax instead of string arrays
