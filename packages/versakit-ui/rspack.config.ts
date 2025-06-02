import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import { ReactRefreshRspackPlugin } from "@rspack/plugin-react-refresh";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";

const isDev = process.env.NODE_ENV === "development";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["last 2 versions", "> 0.2%", "not dead", "Firefox ESR"];

export default defineConfig({
  entry: {
    main: "./index.ts",
  },
  output: {
    library: {
      type: "module",
    },
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
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
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDev ? new ReactRefreshRspackPlugin() : null,
    process.env.RSDOCTOR &&
      new RsdoctorRspackPlugin({
        // 启用原生插件以提高分析效率
        experiments: {
          enableNativePlugin: true,
        },
        // 启用 lite 模式以减少内存使用
        mode: "lite",
        // 配置分析功能
        features: {
          bundle: true,
          loader: true,
          plugins: true,
        },
        // 禁用自动打开浏览器
        disableClientServer: false,
        // 输出配置
        output: {
          reportDir: ".rsdoctor",
        },
      }),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    css: true,
    outputModule: true,
  },
});
