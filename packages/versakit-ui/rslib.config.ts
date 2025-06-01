import { defineConfig } from "@rslib/core";
import { resolve } from "node:path";

export default defineConfig({
  // 入口文件
  source: {
    entry: {
      index: "./index.ts",
    },
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
  lib: [
    { format: "esm", syntax: "es2021" },
    { format: "cjs", syntax: "es2021" },
  ],
});
