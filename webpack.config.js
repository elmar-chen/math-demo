const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: path.resolve(__dirname, "./src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello2",
      template: path.resolve(__dirname, "./src/template.html"), 
      filename: "index.html", 
    }),
    new CleanWebpackPlugin(),
  ],
  module:{
    rules: [
      {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: 'ts-loader',
              }
              
          ],
      },
    ]
  }
};
