import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@versakit/react";
import "@versakit/react/dist/main.css";

// 更多关于如何配置 stories 的信息: https://storybook.js.org/docs/writing-stories
const meta = {
	title: "Versakit UI/Slider",
	component: Slider,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "secondary", "success", "warn", "error"],
			description: "滑块的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "滑块的尺寸",
		},
		min: {
			control: { type: "number" },
			description: "最小值",
		},
		max: {
			control: { type: "number" },
			description: "最大值",
		},
		step: {
			control: { type: "number" },
			description: "步进值",
		},
		value: {
			control: { type: "number" },
			description: "当前值（受控组件）",
		},
		defaultValue: {
			control: { type: "number" },
			description: "默认值（非受控组件）",
		},
		disabled: {
			control: "boolean",
			description: "是否禁用",
		},
		className: {
			control: "text",
			description: "自定义 CSS 类名",
		},
		unstyled: {
			control: "boolean",
			description: "是否移除默认样式",
		},
		pt: {
			control: "object",
			description: "传递给组件的自定义属性",
		},
		onChange: { action: "changed" },
	},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// 更多关于 Stories 的信息: https://storybook.js.org/docs/writing-stories/introduction
export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
		defaultValue: 50,
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		size: "md",
		defaultValue: 50,
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "md",
		defaultValue: 50,
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		size: "md",
		defaultValue: 50,
	},
};

export const Warning: Story = {
	args: {
		variant: "warn",
		size: "md",
		defaultValue: 50,
	},
};

export const ErrorVariant: Story = {
	args: {
		variant: "error",
		size: "md",
		defaultValue: 50,
	},
};

export const WithMinMax: Story = {
	args: {
		variant: "default",
		size: "md",
		min: 0,
		max: 10,
		defaultValue: 5,
	},
};

export const WithStep: Story = {
	args: {
		variant: "default",
		size: "md",
		step: 10,
		defaultValue: 50,
	},
};

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		defaultValue: 50,
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		defaultValue: 50,
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		defaultValue: 50,
	},
};

export const Disabled: Story = {
	args: {
		variant: "default",
		size: "md",
		disabled: true,
		defaultValue: 50,
	},
};

export const CustomRange: Story = {
	args: {
		variant: "default",
		size: "md",
		min: -50,
		max: 50,
		defaultValue: 0,
	},
};

export const Unstyled: Story = {
	args: {
		unstyled: true,
		className: "w-64 h-2 rounded-lg bg-purple-200",
		defaultValue: 50,
	},
};

export const WithPassThrough: Story = {
	args: {
		variant: "primary",
		size: "md",
		defaultValue: 50,
		pt: {
			"data-testid": "custom-slider",
			"data-custom": "custom-value",
		},
	},
};

export const AccessibilityExample: Story = {
	args: {
		variant: "primary",
		size: "md",
		defaultValue: 50,
		"aria-label": "音量控制",
	},
};
