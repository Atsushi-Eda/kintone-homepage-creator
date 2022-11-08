const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");

module.exports = merge(baseConfig, {
  entry: {
    public: "./public.ts",
  },
  target: "web",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Private-Network": true,
    },
    host: "localhost",
    allowedHosts: "all",
  },
});
