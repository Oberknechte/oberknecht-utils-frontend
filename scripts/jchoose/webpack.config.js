const path = require("path");
const webpack = require("webpack");


module.exports = {
  entry: "./lib-ts/browser/jchoose.browser.ts",
  // mode: "production",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./lib-js/browser"),
    filename: "jchoose.bundle.js",
    // path: "./browser/jchoose.bundle.js",
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
