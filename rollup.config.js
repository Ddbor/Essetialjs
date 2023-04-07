import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import clear from 'rollup-plugin-clear'

function createOption(format, minify) {
  const name = `essetialjs${format === 'umd' ? '' : `.${format}`}${
    minify ? '.min' : ''
  }.js`
  return {
    input: 'src/index.ts',
    output: {
      file: `dist/${name}`,
      format: format === 'esm-bundler' ? 'es' : format,
      name: 'ESS',
      exports: 'named'
    },
    plugins: [
      clear({
        targets: ['dist']
      }),
      resolve({
        mainFields: ['browser', 'module', 'main']
      }),
      babel({ babelHelpers: 'bundled' }),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      ...(minify
        ? [
            terser({
              format: {
                comments: false
              },
              module: format === 'esm-bundler'
            })
          ]
        : [])
    ]
  }
}

export default defineConfig([
  createOption('umd', false),
  createOption('umd', true),
  createOption('cjs', false),
  createOption('cjs', true),
  createOption('esm-bundler', false)
])
