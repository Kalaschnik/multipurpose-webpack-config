// Webpack Plugins
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Node
const path = require('path');

const mode = process.env.NODE_ENV || 'development';

// Temporary workaround for 'browserslist' bug that is being patched in the near future
// see: https://github.com/webpack/webpack-dev-server/issues/2758
const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

// Webpack Configuration
module.exports = {
  mode: mode, // default: production, other: development

  // Single entry point:
  // entry: "./src/app.js", // default: ./src/index.js
  // Multiple entry points:
  entry: {
    main: './src/index.js', // main.js will be the name in the dist folder
    order: './src/order.js',
  },
  // if you hace multiple entry points, use [name].js to resolve output file names to match the
  // entry point key
  output: {
    filename: '[name].[contenthash].js', // default: main.js
    path: path.resolve(__dirname, 'dist'), // default: dist
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will refer to .babelrc
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i, // regex: (starts with an s, then either a or c) OR css /i is case insensitive
        use: [
          // note that array’s order of execution is revered. The last one is the one that is executed first.
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public/', to: './' }],
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack 5 Boilerplate',
      filename: 'index.html', // default: index.html
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['order'], // or multiple entry points: chunks: ['order', 'main']
      title: 'Subpage',
      filename: 'subpage.html',
    }),
  ],

  // defaults to "web", so only required for webpack-dev-server bug
  target: target,

  devtool: 'source-map',

  // enables hot reload (WDS) for dev-server
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
  },

  experiments: {
    topLevelAwait: true,
  },
};
