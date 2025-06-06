import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@versakit/react": "../../packages/versakit-ui",
		},
		dedupe: ["react", "react-dom"],
	},
	optimizeDeps: {
		include: ["react", "react-dom"],
	},
	server: {
		fs: {
			// 允许服务超出 root 目录的文件
			strict: false,
			allow: [".."],
		},
	},
});
