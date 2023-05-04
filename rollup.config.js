import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'lib/index.js',
  output: { file: pkg.main, format: 'cjs', sourcemap: true },
  external: ['fs/promises', 'path']
}
