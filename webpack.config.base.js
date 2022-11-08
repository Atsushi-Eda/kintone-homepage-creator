const path = require("path");

module.exports = {
  context: path.resolve("src"),
  output: {
    path: path.resolve("plugin"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve("node_modules"), path.resolve("src")],
  },
};
