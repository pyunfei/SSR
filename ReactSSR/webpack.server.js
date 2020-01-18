const path = require("path");
const nodeExternals = require("webpack-node-externals");
const base = require("./webpack.base");
const { smart } = require("webpack-merge");

module.exports = smart(base, {
  target: "node",
  entry: path.join(__dirname, "server/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js"
  },
  externals: [nodeExternals()], //打包非node核心模块
});
