const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode, // default: production, other: development

  // entry: "./src/index.js", // default: ./src/index.js
  // output: {
  //   filename: "bundle.js", // default: main.js
  //   path: path.resolve(__dirname, "public"), // <- default: dist
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will refer to .babelrc
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i, // reged: (starts with an s, then either a or c) OR css /i is case insensitive
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public/", to: "./" }],
    }),
  ],

  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
  },
};
