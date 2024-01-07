const path = require("path");
const webpack = require("webpack");


module.exports = {
  entry: {
    js: {import: "./lib-ts/defaults.ts", filename: "./lib-js/[name].js"},
    browser: {import: "./lib-ts/defaults.browser.ts", filename: "./lib-js/[name].js"},
  },
  // mode: "production",
  mode: "development",
  output: {
    // path: path.resolve(__dirname, "./lib-js"),
    // filename: "defaults.bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    // new webpack.ProvidePlugin({
    //   Buffer: ["buffer", "Buffer"],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  watch: true,
};
