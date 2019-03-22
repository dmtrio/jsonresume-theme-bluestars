const merge = require('webpack-merge');
const path = require('path');
const { baseConfig , projectRoot } = require('./base.config.js');

module.exports = merge(baseConfig, {
  entry: './src/app.js',
  output: {
    path: path.resolve(projectRoot, './dev'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(projectRoot, './dev'),
    compress: false,
    port: 9000
  }
});