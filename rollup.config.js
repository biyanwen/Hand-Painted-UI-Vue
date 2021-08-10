import path from 'path'
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"
import image from '@rollup/plugin-image';
import typescript from 'rollup-plugin-typescript2'
const resolveFile = name => path.resolve(__dirname, name)
const extensions = ['.js', '.ts', '.tsx', '.vue']

const tsPlugin = typescript({
  tsconfig: resolveFile('./tsconfig.json'), // 本地ts配置
  extensions
})

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'HandPainted',
    file: 'dist/lib/handPainted.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'HandPainted',
    file: 'dist/lib/handPainted.esm.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    image({
      include: /\.svg$/,
    }),
    tsPlugin,
    vue({
      include: /\.vue$/,
    }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),

  ],
}