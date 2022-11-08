const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");
const KintonePlugin = require("@kintone/webpack-plugin-kintone-plugin");

module.exports = merge(baseConfig, {
  entry: {
    config: "./admin.ts",
  },
  plugins: [
    new KintonePlugin({
      manifestJSONPath: "./plugin/manifest.json",
      privateKeyPath: "./private.ppk",
      pluginZipPath: "./dist/plugin.zip",
    }),
  ],
});
