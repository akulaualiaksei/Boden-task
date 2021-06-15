const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    '@babel/polyfill',
    path.join(__dirname, 'src', 'index.jsx'),
  ],
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|woff(2)?|ttf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
  // optimization: {
  //   splitChunks: { chunks: 'all' },
  //   minimize: true,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: './src/assets/favicon.ico',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
  },
};
