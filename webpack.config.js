const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Paths = require("./config/paths");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // this plugin will minify your HTML if `mode = production`
      template: "./src/index.html",
    }),
  ],
  resolve: {
    alias: {
      components: Paths.COMPONENTS_DIR,
      context: Paths.CONTEXT_DIR,
      data: Paths.DATA_DIR,
      images: Paths.IMAGES_DIR,
      pages: Paths.PAGES_DIR,
    },
  },
};
