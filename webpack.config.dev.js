import webpack from "webpack";
import path from "path";

/* eslint no-unused-vars: 0 */

export default {
  devtool: "inline-source-map",
  entry: [
    path.resolve(__dirname, "src/index")
  ],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [

  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
      {test: /\.css$/, loaders: ["style-loader", "css-loader"]}
    ]
  }
}