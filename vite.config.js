// @ts-nocheck
const svgPlugin = require('vite-plugin-svg');
import { md } from './plugins/md';
const fs = require('fs');
import { baseParse } from '@vue/compiler-core';
module.exports = {
    base: './',
    assetsDir: 'assets',
    plugins: [
        svgPlugin(),
        md()
    ],
    vueCustomBlockTransforms: {
        demo: (options) => {
            const { code, path } = options;
            const file = fs.readFileSync(path).toString();
            const parsed = baseParse(file).children.find(n => n.tag === 'demo');
            const title = parsed.children[0].content;
            const main = file.split(parsed.loc.source).join('').trim();
            return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
        }
    },
};
