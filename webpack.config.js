const path = require('path');
const FlowtypePlugin = require('flowtype-loader/plugin');

const ROOT_DIR = process.cwd();
const RESOURCE_DIR = path.resolve(ROOT_DIR, 'src');

module.exports = {
  context: RESOURCE_DIR,
  entry: path.resolve(RESOURCE_DIR, 'index.jsx'),
  output: {
    path: path.resolve(ROOT_DIR, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      loader: ['flowtype-loader', 'eslint-loader'],
      enforce: 'pre',
      exclude: /(node_modules|.vscode)/,
    }, {
      test: /\.(js|jsx)?$/,
      loader: 'babel-loader',
      exclude: /(node_modules|.vscode)/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    }, {
      test: /\.(jpeg|jpg|gif|png|woff|ttf|woff2|eot|svg)$/,
      loader: 'url-loader',
    }],
  },
  plugins: [
    new FlowtypePlugin(),
  ],
};
