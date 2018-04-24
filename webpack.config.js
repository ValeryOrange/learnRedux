const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/index'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          include: [
            path.resolve(__dirname, 'src'),
          ],
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-runtime', 'react-hot-loader/babel'],
            }
          }
        }
      ]
    }
}