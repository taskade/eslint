# Using Changesets for Version Management

This project uses [Changesets](https://github.com/changesets/changesets) to manage versions and changelogs. Here's how to use it:

## Quick Start

### 1. Make Your Changes
Edit code, add features, fix bugs - do your development work as usual.

### 2. Create a Changeset
When you're ready to indicate that changes should trigger a version bump:

```bash
npm run changeset
```

This will:
- Ask which packages changed (select with spacebar, confirm with enter)
- Ask what type of change (patch/minor/major)
- Ask for a summary of the changes

### 3. Commit and Push
```bash
git add .
git commit -m "feat: your changes and changeset"
git push origin main
```

### 4. Automatic Release
- The GitHub Action will detect your changeset
- It will create a "Version Packages" PR
- When you merge that PR, packages are automatically published

## Changeset Types

- **Patch** (0.0.x): Bug fixes, small improvements
- **Minor** (0.x.0): New features, backwards compatible
- **Major** (x.0.0): Breaking changes

## Manual Commands

```bash
# Create a changeset interactively
npm run changeset

# Preview what versions would be bumped
npm run changeset:status  

# Apply version bumps (done automatically in CI)
npm run changeset:version

# Publish (done automatically in CI)
npm run changeset:publish
```

## Example Workflow

1. You fix a bug in `@taskade/eslint-plugin`
2. Run `npm run changeset`
3. Select `@taskade/eslint-plugin` 
4. Choose `patch` (since it's a bug fix)
5. Write "Fix issue with rule configuration"
6. Commit and push
7. Wait for the "Version Packages" PR to be created
8. Review and merge it
9. Package is automatically published as version 0.4.1

## Files Created

Changesets creates files in `.changeset/` that look like:
```markdown
---
"@taskade/eslint-plugin": patch
---

Fix issue with rule configuration
```

These files are consumed during release and then deleted automatically.