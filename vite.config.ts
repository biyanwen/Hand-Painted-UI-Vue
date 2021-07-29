const svgPlugin = require('vite-plugin-svg');
import {md} from './plugins/md'

module.exports = {
    plugins: [
        svgPlugin(),
        md()
    ],
};