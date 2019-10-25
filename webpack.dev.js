const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Shared = require('./webpack.shared.js');

const Config = {
  mode: 'development',
  watch: true,
  optimization: {
    noEmitOnErrors: true,
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
  },
  module: {
    ...Shared.module,
    rules: [
      ...Shared.module.rules,
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [...Shared.plugins, new ForkTsCheckerWebpackPlugin()],
};

module.exports = { ...Shared, ...Config };
