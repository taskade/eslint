# @taskade/eslint

## Getting Started

```sh
npm install --save-dev @taskade/eslint-plugin
```

## Contributing

This project uses [Changesets](https://github.com/changesets/changesets) for version management. When contributing:

1. Make your changes
2. Run `npm run changeset` to create a changeset
3. Commit both your changes and the changeset file
4. Push to `main` - a version PR will be created automatically

See [`.changeset/USAGE.md`](./.changeset/USAGE.md) for detailed changeset usage instructions.

## To Develop

```sh
npm run build:watch
```

Go to `packages/example` and test out the ESLint rules

## Publishing

Packages are automatically published to both npmjs.com and GitHub Packages when changeset version PRs are merged. See [`.github/PUBLISH_WORKFLOW.md`](./.github/PUBLISH_WORKFLOW.md) for details.

## Additional Configurations Recommended

### [`@typescript-eslint/strict-boolean-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md)

> NOTE: (stan@taskade.com) This rule might also cause performance issue in large project.

Not on by default due to additional configuration (`parserOptions.project`) needed.

### [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises/)

Requires promises to be handled properly (awaited, returned, or explicitly handled). Not on by default due to additional configuration (`parserOptions.project`) needed.

```json
{
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/no-floating-promises": "error"
  },
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```
