const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /(node_modules|bower_components|build|dist)/,
        loader: 'babel-loader'
      }
    ]
  },
};