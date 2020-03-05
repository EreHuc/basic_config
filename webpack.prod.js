// const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        // Copy package.json into dist/ for library purpose
        // new CopyPlugin([
        //   {
        //     from: path.resolve(__dirname, 'package.json'),
        //     to: 'package.json',
        //   },
        // ]),
    ],
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
});
