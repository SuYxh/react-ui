import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import sass from 'rollup-plugin-sass'

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["src/**/*.test.tsx", "src/**/*.stories.tsx", "src/**/*.stories.mdx", "src/setupTests.ts", "src/playground/**/*"]
}

const config = {
  input: 'src/entry.tsx',
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({ tsconfigOverride: overrides }),
    sass({ output: 'dist/index.css' })
  ],
}

export default config

