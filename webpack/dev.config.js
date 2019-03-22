const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../dev'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '../dev'),
    compress: false,
    port: 9000
  }
});