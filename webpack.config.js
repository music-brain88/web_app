const path = require("path");
const outputPath = path.resolve(__dirname, "dist");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entryPoint = {
  js: './src/index.js',
}

module.exports = (env, argv) => ({
  entry: {
    js: entryPoint.js,
  },
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
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use:[
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
    filename: 'dist/css/main.css'
  })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  } 
});
