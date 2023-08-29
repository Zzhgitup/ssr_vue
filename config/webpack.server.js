const path = require("path");
const nodeExernals = require("webpack-node-externals");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { merge } = require("webpack-merge");
const webpackBase = require("./webpack.base");
module.exports = merge(webpackBase, {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "../build/server"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".vue", ".wasm"],
  },
  externals: [nodeExernals()],
});
