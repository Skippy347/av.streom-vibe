import webpack from "webpack";
import { BuildOptions } from "../types/webpackConfiguration";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  const { paths } = options;

  return {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": paths.src,
    },
  };
}
