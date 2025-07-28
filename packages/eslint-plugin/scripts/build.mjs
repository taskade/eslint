#!/usr/bin/env node

import { build } from 'esbuild';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

async function main() {
  // Clean dist directory
  await fs.rm('dist', { recursive: true, force: true });
  
  // Shared build options
  const sharedOptions = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node22',
    sourcemap: true,
    packages: 'external',
  };

  // Build CommonJS with .cjs extension
  await build({
    ...sharedOptions,
    format: 'cjs',
    outdir: 'dist',
    outExtension: { '.js': '.cjs' },
  });

  // Build ES Modules with .mjs extension
  await build({
    ...sharedOptions,
    format: 'esm',
    outdir: 'dist',
    outExtension: { '.js': '.mjs' },
  });

  console.log('✓ Built CommonJS (.cjs) and ESM (.mjs) bundles');
}

// ESM equivalent of require.main === module
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
