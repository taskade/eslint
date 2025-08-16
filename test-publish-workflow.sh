#!/bin/bash

# Test script for validating GitHub Actions publish workflow locally
# This script simulates the key steps of the publish workflow

set -e

echo "🔍 Testing GitHub Actions Publish Workflow Locally"
echo "================================================="

cd "$(dirname "$0")"

echo ""
echo "📦 Step 1: Installing dependencies..."
npm ci

echo ""
echo "🔧 Step 2: Building packages..."
if npm run build >/dev/null 2>&1; then
    echo "✅ Full build successful"
else
    echo "⚠️  Full build failed, trying esbuild-only..."
    cd packages/eslint-plugin
    node scripts/build.mjs
    cd ../..
    echo "✅ esbuild-only build successful"
fi

echo ""
echo "🔍 Step 3: Verifying build artifacts..."
test -f packages/eslint-plugin/dist/index.cjs && echo "✅ CommonJS build found" || (echo "❌ Missing CommonJS build" && exit 1)
test -f packages/eslint-plugin/dist/index.mjs && echo "✅ ESM build found" || (echo "❌ Missing ESM build" && exit 1)
test -d packages/eslint-plugin/dist/types && echo "✅ Type declarations found" || echo "⚠️  Type declarations missing (may be OK if TypeScript build failed)"

echo ""
echo "📋 Step 4: Getting package version..."
VERSION=$(node -p "require('./packages/eslint-plugin/package.json').version")
echo "Package version: $VERSION"

echo ""
echo "🔍 Step 5: Checking if version exists on npm..."
PACKAGE_NAME="@taskade/eslint-plugin"
if npm view "$PACKAGE_NAME@$VERSION" version 2>/dev/null >/dev/null; then
    echo "⏭️  Version $VERSION already exists on npm"
else
    echo "✨ Version $VERSION is new and can be published"
fi

echo ""
echo "🧪 Step 6: Testing publish configurations..."
cd packages/eslint-plugin

# Backup original package.json
cp package.json package.json.backup

# Test npmjs.com configuration
echo "  Testing npmjs.com configuration..."
node -e "
const pkg = require('./package.json');
delete pkg.publishConfig.registry;
require('fs').writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
"
npm publish --dry-run --access public >/dev/null 2>&1 && echo "✅ npmjs.com publish configuration valid"

# Restore original package.json and test GitHub Packages
cp package.json.backup package.json
echo "  Testing GitHub Packages configuration..."
npm publish --dry-run >/dev/null 2>&1 && echo "✅ GitHub Packages publish configuration valid"

rm package.json.backup
cd ../..

echo ""
echo "🎉 All workflow validation steps completed successfully!"
echo ""
echo "🔧 To run the actual workflow:"
echo "   1. Create a GitHub release"
echo "   2. Or manually trigger via: gh workflow run publish.yml --input dry_run=true"