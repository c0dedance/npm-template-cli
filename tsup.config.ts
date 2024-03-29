import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['src/index.ts', 'src/cli.ts'],
  bundle: true,
  splitting: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  shims: true,
  clean: true,
})
