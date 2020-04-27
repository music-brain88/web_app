const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: outputPath
  },
  devServer: {
    contentBase: outputPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
});
