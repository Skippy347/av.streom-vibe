import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import { BuildOptions } from "../types/webpackConfiguration";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDevelopment, paths } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          webpackImporter: true,
          sassOptions: {
            includePaths: [paths.src],
          },
        },
      },
    ],
  };

  const fontLoader = {
    test: /\.(woff2|)$/i,
    type: "asset/resource",
    generator: {
      filename: "fonts/[name].[contenthash][ext]",
    },
  };

  const imageLoader = {
    test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name].[contenthash][ext]",
    },
  };

  return [typescriptLoader, cssLoader, fontLoader, imageLoader];
}
