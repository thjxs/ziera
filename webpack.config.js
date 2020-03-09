const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const web = {
  target: 'web',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  entry: {
    app: ['./app/main.js']
  },
  output: {
    chunkFilename: '[name].[contenthash:8].js',
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([{ context: 'public', from: '*.*' }]),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    })
  ]
};

module.exports = (env, argv) => {
  return [web];
};
