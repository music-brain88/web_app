const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: outputPath
  },
  devServer: {
    contentBase: outputPath,
    watchContentBase: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
});
