const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// Don't need to `npm i` webpack uses it by default for JS minimification
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.[contenthash].js",
    publicPath: "/",
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // minify your CSS
      new TerserPlugin(), // This is used by default, but needs to explicitly be re-added for JS minificaiton
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: ["optipng", "mozjpeg", "svgo"],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // 3. extract CSS into files instead of JS string
          {
            loader: "css-loader", // 2. turn scss into JS string (Common JS)
            options: {
              modules: true,
            },
          },
          "sass-loader", // 1. load SCSS | turn into CSS
        ],
      },
    ],
  },
});

// It takes time to extract the CSS into files, so it is not ideal for development purposes
// But it is more performant, that is why we use it for production
