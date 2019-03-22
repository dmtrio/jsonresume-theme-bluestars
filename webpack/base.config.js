const path = require('path');
const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  projectRoot: projectRoot,
  baseConfig: {
    context: projectRoot,
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(projectRoot, './src'),
          exclude: /(node_modules|bower_components|build|dist)/,
          loader: 'babel-loader'
        }
      ]
    }
  }
};