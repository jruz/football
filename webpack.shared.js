const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const Shared = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: Path.resolve('./dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app'],
      template: 'src/index.pug',
      inlineSource: '.(js|css)$',
      inject: 'head',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = Shared;
