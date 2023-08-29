const path = require("path");
const { merge } = require("webpack-merge");
const webpackBase = require("./webpack.base");
const { DefinePlugin } = require("webpack");
module.exports = merge(webpackBase, {
  target: "web",
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "../build/client"),
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
});
