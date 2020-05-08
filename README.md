# @taskade/eslint

## Getting Started

```sh
yarn add @taskade/eslint-plugin --dev
```

## To Develop

```sh
yarn build:watch
```

Go to `packages/example` and test out the ESLint rules

## Additional Configurations Recommended

### [`@typescript-eslint/strict-boolean-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md)

> NOTE: (stan@taskade.com) This rule might also cause performance issue in large project.

Not on by default due to additional configuration (`parserOptions.project`) needed.

```json
{
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": "error"
  },
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```
