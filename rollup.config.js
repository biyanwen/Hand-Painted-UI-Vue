import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import {terser} from "rollup-plugin-terser"
import image from '@rollup/plugin-image';

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
        scss({include: /\.scss$/, sass: dartSass}),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'es2015'
        }),
        vue({
            include: /\.vue$/,
        }),
        image()
    ],
}