import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "@versakit/react";
import "@versakit/react/dist/main.css";

// 更多关于如何配置 stories 的信息: https://storybook.js.org/docs/writing-stories
const meta = {
	title: "Versakit UI/NumberInput",
	component: NumberInput,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "secondary", "success", "warn", "error"],
			description: "数字输入框的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "数字输入框的尺寸",
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
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// 更多关于 Stories 的信息: https://storybook.js.org/docs/writing-stories/introduction
export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
		defaultValue: 0,
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		size: "md",
		defaultValue: 0,
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "md",
		defaultValue: 0,
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		size: "md",
		defaultValue: 0,
	},
};

export const Warning: Story = {
	args: {
		variant: "warn",
		size: "md",
		defaultValue: 0,
	},
};

export const ErrorValue: Story = {
	args: {
		variant: "error",
		size: "md",
		defaultValue: 0,
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
		step: 0.5,
		defaultValue: 0,
	},
};

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		defaultValue: 0,
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		defaultValue: 0,
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		defaultValue: 0,
	},
};

export const Disabled: Story = {
	args: {
		variant: "default",
		size: "md",
		disabled: true,
		defaultValue: 0,
	},
};

export const Unstyled: Story = {
	args: {
		unstyled: true,
		className:
			"w-20 px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",
		defaultValue: 0,
	},
};

export const WithPassThrough: Story = {
	args: {
		variant: "primary",
		size: "md",
		defaultValue: 0,
		pt: {
			"data-testid": "custom-number-input",
			"data-custom": "custom-value",
		},
	},
};

export const AccessibilityExample: Story = {
	args: {
		variant: "primary",
		size: "md",
		defaultValue: 0,
		"aria-label": "数量选择器",
	},
};
