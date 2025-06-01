import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Configuration } from "@rspack/core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: Configuration = {
  context: __dirname,
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        type: "css",
      },
    ],
  },
  plugins: [
    process.env.NODE_ENV === "production"
      ? null
      : new RsdoctorRspackPlugin({
          output: {
            reportDir: "./node_modules/.rsdoctor",
          },
        }),
  ].filter(Boolean),
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};

export default config;
