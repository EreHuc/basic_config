const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const packageJSON = require('./package');

function isBundleAnalyzer() {
  const regExp = new RegExp(/bundleAnalyzer/);

  return process.argv.some(arg => regExp.test(arg));
}

const bundleAnalyzerPlugin = isBundleAnalyzer()
  ? [new BundleAnalyzerPlugin()]
  : [];

module.exports = {
  // Change to your "entry-point".
  entry: './src/index',
  output: {
    library: packageJSON.name,
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      '~': path.join(__dirname, 'src/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [new CleanWebpackPlugin(), ...bundleAnalyzerPlugin],
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024, // Convert images < 8kb to base64 strings
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.svg/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
};
