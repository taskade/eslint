# GitHub Actions Publish Workflow

This repository includes a GitHub Actions workflow that automatically publishes packages to both npmjs.com and GitHub Packages when a release is created.

## Overview

The workflow is located at `.github/workflows/publish.yml` and provides:

- **Dual Publishing**: Publishes to both npmjs.com and GitHub Packages
- **Provenance**: Includes npm provenance for npmjs.com publications
- **Version Checking**: Skips npm publishing if version already exists
- **Retry Logic**: Handles transient publishing failures with retries
- **Dry Run Support**: Manual workflow trigger with dry-run option
- **Build Fallbacks**: Continues with esbuild-only build if TypeScript fails
- **Comprehensive Logging**: Detailed output and summaries

## Triggers

### Automatic (Release)
The workflow runs automatically when:
- A GitHub release is published
- Publishes the current version to both registries

### Manual (Workflow Dispatch)
The workflow can be triggered manually with:
- Optional dry-run mode (no actual publishing)
- Use GitHub UI: Actions → Publish Packages → Run workflow
- Use GitHub CLI: `gh workflow run publish.yml --input dry_run=true`

## Prerequisites

### Secrets Required
The workflow requires these repository secrets:

1. **`NPM_TOKEN`**: NPM automation token for npmjs.com
   - Create at: https://www.npmjs.com/settings/tokens
   - Type: Automation token
   - Add to: Repository Secrets

2. **`GITHUB_TOKEN`**: Automatically provided by GitHub
   - Used for GitHub Packages publishing
   - No manual setup required

### Environment Setup
The workflow uses the `npm-publish` environment for additional protection:
- Consider setting up environment protection rules
- Add required reviewers if desired
- Configure deployment branches if needed

## Workflow Steps

1. **Setup**: Checkout code, setup Node.js 20 with npm cache
2. **Install**: Dependencies with `npm ci --ignore-scripts`
3. **Build**: Attempts full build, falls back to esbuild-only if needed
4. **Verify**: Checks build artifacts exist
5. **Version Check**: Checks if version already exists on npm
6. **Publish to npmjs.com**: If version is new (with provenance)
7. **Publish to GitHub Packages**: Always publishes (updates allowed)
8. **Summary**: Creates detailed summary of actions taken

## Package Configuration

The workflow handles publishing configuration automatically:

- **For npmjs.com**: Temporarily removes `publishConfig.registry`
- **For GitHub Packages**: Uses existing `publishConfig.registry`
- **Access**: npmjs.com uses `--access public`, GitHub Packages uses default

## Testing

Use the included test script to validate workflow steps locally:

```bash
./test-publish-workflow.sh
```

This script simulates all workflow steps except actual publishing.

## Troubleshooting

### Common Issues

1. **Build Failures**: Workflow includes fallback to esbuild-only
2. **Version Conflicts**: npm publishing skipped if version exists
3. **Auth Failures**: Check NPM_TOKEN is valid and has publish permissions
4. **Timeout Issues**: Workflow includes retry logic with backoff

### Monitoring

- Check workflow runs in Actions tab
- Review detailed logs for each step
- Summary shows final publish status

### Manual Recovery

If workflow fails, you can:
1. Fix the issue and re-run the workflow
2. Use manual trigger with dry-run first
3. Publish manually using existing npm scripts

## Security

- Uses minimal required permissions
- Enables provenance for supply chain security
- Environment protection for sensitive operations
- No secrets logged or exposed

## Maintenance

- Workflow uses latest stable actions (v4)
- Node.js version pinned to 20 (LTS)
- Regular dependency updates recommended