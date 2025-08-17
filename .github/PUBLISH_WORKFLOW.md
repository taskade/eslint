# Package Release & Publishing Workflows

This repository includes comprehensive GitHub Actions workflows for package versioning and publishing to both npmjs.com and GitHub Packages using Changesets for version management.

## Overview

The repository contains three main workflows:

1. **Release Workflow** (`.github/workflows/release.yml`): Automated changeset-based releases
2. **Manual Publishing** (`.github/workflows/publish.yml`): Direct release-triggered publishing  
3. **Version Management** (`.github/workflows/version.yml`): Manual version bumping

## Changesets Integration

This project uses [Changesets](https://github.com/changesets/changesets) for version management and changelog generation.

### Key Features

- **Manual Version Control**: Explicit changeset files control which packages get version bumps
- **GitHub Integration**: Automatic changelog generation with GitHub links
- **Monorepo Support**: Independent versioning for each package
- **Public Access**: Configured for public npm publishing

### Creating Changesets

To create a changeset for version bumping:

```bash
# Interactive changeset creation
npm run changeset

# Or manually create changeset files in .changeset/ directory
```

### Configuration

Changeset configuration is in `.changeset/config.json`:
- Uses GitHub changelog format
- Ignores private packages (`@taskade/example`)
- Configured for public npm access
- Base branch: `main`

## Workflows

### 1. Release Workflow (Recommended)

**File**: `.github/workflows/release.yml`
**Trigger**: Push to `main` branch or manual dispatch

This is the primary workflow that:
- Automatically detects changesets
- Creates version PRs when changesets exist
- Publishes packages when version PRs are merged
- Publishes to both npmjs.com and GitHub Packages simultaneously

**Usage**:
```bash
# Create a changeset
npm run changeset

# Commit and push to main
git add .changeset/
git commit -m "feat: add new feature"
git push origin main

# The workflow will create a "Version Packages" PR
# Merge the PR to trigger publishing
```

### 2. Manual Publishing Workflow

**File**: `.github/workflows/publish.yml`
**Trigger**: GitHub releases or manual dispatch

Legacy workflow for direct publishing when releases are created:

- **Dual Publishing**: Publishes to both npmjs.com and GitHub Packages
- **Provenance**: Includes npm provenance for npmjs.com publications
- **Version Checking**: Skips npm publishing if version already exists
- **Retry Logic**: Handles transient publishing failures with retries
- **Dry Run Support**: Manual workflow trigger with dry-run option
- **Build Fallbacks**: Continues with esbuild-only build if TypeScript fails
- **Comprehensive Logging**: Detailed output and summaries

### 3. Version Management Workflow

**File**: `.github/workflows/version.yml`
**Trigger**: Manual dispatch only

Utility workflow for creating version bump changesets:
- Creates changesets programmatically
- Supports patch/minor/major bumps
- Can target specific packages or all packages

## Migration from Lerna

This repository previously used Lerna for version management. The changeset approach provides:

- **Better Control**: Manual approval of version changes
- **Clear Intent**: Explicit changesets document what changed
- **GitHub Integration**: Better changelog generation with links
- **Flexible Releases**: Independent package versioning

### Lerna Commands (Legacy)
The following Lerna commands are still available but deprecated:
```bash
npm run publish:github    # Lerna conventional commits
npm run publish:manually  # Direct npm publish
```

## Quick Start

### For Contributors

1. Make your changes
2. Create a changeset:
   ```bash
   npm run changeset
   ```
3. Commit everything including the changeset file
4. Push to main - a Version PR will be created automatically

### For Maintainers

1. Review and merge the "Version Packages" PR created by the release workflow
2. Publishing happens automatically after merge
3. Monitor the Actions tab for publishing status

## Triggers

### Automatic (Release Workflow)
The release workflow runs automatically when:
- Code is pushed to `main` branch
- Creates version PRs for unreleased changesets
- Publishes when version PRs are merged

### Manual (Publishing Workflow)
The legacy publish workflow can be triggered manually:
- GitHub release publication
- Manual workflow dispatch with optional dry-run
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