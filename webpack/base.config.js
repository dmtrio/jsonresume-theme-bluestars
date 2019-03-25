const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
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
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            // 'postcss-loader',
            'sass-loader',
          ],
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      })
    ],
  }
};
