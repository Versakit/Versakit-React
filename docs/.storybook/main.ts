import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../components/**/*.stories.@(js|jsx|ts|tsx)",
		"../../packages/versakit-ui/components/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {
			builder: {
				viteConfigPath: "./vite.config.ts",
			},
		},
	},
	docs: {
		autodocs: true,
	},
	core: {
		disableTelemetry: true,
	},
	viteFinal: async (config) => {
		// 自定义 Vite 配置
		// 设置 GitHub Pages 的基本路径
		const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "Versakit-react";
		if (process.env.NODE_ENV === "production") {
			config.base = `/${repoName}/storybook/`;
		}

		return config;
	},
};

export default config;
