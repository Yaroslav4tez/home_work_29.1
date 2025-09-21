const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/",       
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 5500,
    open: true,
    hot: true,
    liveReload: false,         
    historyApiFallback: { disableDotRule: true },
    proxy: [{
      context: ['/api'],
      target: 'http://localhost:5555'
    }
    ]
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpe?g|gif|svg|webp|ico|woff2?|eot|ttf|otf)$/i, type: "asset" },
    ]
  },
  resolve: { extensions: [".js", ".jsx"],
    fallback: {
    os: false
  }
   },
  plugins: [ new HtmlWebpackPlugin({ template: "src/index.html" }) ],
};






