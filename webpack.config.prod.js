//import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import WebpackMD5Hash from "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";

/* eslint no-unused-vars: 0 */

export default {
  debug: false,
  devtool: "source-map",
  noInfo: false,
  /*entry: [
    path.resolve(__dirname, "src/index")
  ],*/
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index")
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new ExtractTextPlugin("[name].[contenthash].css"),
    new WebpackMD5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.optimize.DedupePlugin(),
    // Minify
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ["babel"]},
      //{test: /\.css$/, loaders: ["style", "css"]}
      {test: /\.css$/, loader: ExtractTextPlugin.extract("css?sourdeMap")}
    ]
  }
}