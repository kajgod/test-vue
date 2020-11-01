const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { HotModuleReplacementPlugin } = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: join(__dirname, "src/main.js"),
  output: {
    path: join(__dirname, "dist"),
    filename: "main.min.js",
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          { loader: "css-loader", options: { esModule: false } },
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: join(__dirname, "public"),
    publicPath: "/",
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      template: join(__dirname, "public/index.html"),
      favicon: join(__dirname, "public/favicon.ico"),
    }),
  ],
};
