const merge = require('webpack-merge');
const path = require('path');
const { baseConfig , projectRoot } = require('./base.config.js');

module.exports = merge(baseConfig, {
  entry: './src/index.js',
  output: {
    path: path.resolve(projectRoot, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'commonjs react' 
  }
});