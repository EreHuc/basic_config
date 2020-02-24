const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: false,
    port: 1337,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      inlineSource: '.(js|css)$',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    /**
     * NormalModuleReplacementPlugin is used in lib to export index.dev.ts to the front for more tooling that just an index.ts
     * For a lib it's useful if you want a demo page with all your tooling but not you final app
     */
    // new webpack.NormalModuleReplacementPlugin(
    //   /.\/src\/index.ts/,
    //   './index.dev.ts',
    // ),
    /**
     * CopyPlugin is used to copy paste, without parsing the code into es5, to the dist folder
     */
    // new CopyPlugin([
    //   {
    //     from: path.resolve(__dirname, './demo'),
    //     to: './demo',
    //   },
    // ]),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' },
      },
    ],
  },
});
