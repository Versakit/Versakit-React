import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@versakit/react";
import "@versakit/react/dist/main.css";

// 更多关于如何配置 stories 的信息: https://storybook.js.org/docs/writing-stories
const meta = {
	title: "Versakit UI/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "secondary", "success", "warn", "error"],
			description: "复选框的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "复选框的尺寸",
		},
		checked: {
			control: "boolean",
			description: "是否被选中",
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// 更多关于 Stories 的信息: https://storybook.js.org/docs/writing-stories/introduction
export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
	},
};

export const Checked: Story = {
	args: {
		variant: "default",
		size: "md",
		checked: true,
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		size: "md",
		checked: true,
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "md",
		checked: true,
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		size: "md",
		checked: true,
	},
};

export const Warn: Story = {
	args: {
		variant: "warn",
		size: "md",
		checked: true,
	},
};

export const ErrorState: Story = {
	args: {
		variant: "error",
		size: "md",
		checked: true,
	},
};

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		checked: true,
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		checked: true,
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		checked: true,
	},
};

export const Disabled: Story = {
	args: {
		variant: "default",
		size: "md",
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		variant: "default",
		size: "md",
		disabled: true,
		checked: true,
	},
};

export const Unstyled: Story = {
	args: {
		unstyled: true,
		className: "w-5 h-5 accent-purple-600",
		checked: true,
	},
};

export const WithPassThrough: Story = {
	args: {
		variant: "primary",
		size: "md",
		checked: true,
		pt: {
			"data-testid": "custom-checkbox",
			"data-custom": "custom-value",
		},
	},
};

export const AccessibilityExample: Story = {
	args: {
		variant: "primary",
		size: "md",
		"aria-label": "同意条款和条件",
		"aria-checked": true,
		checked: true,
	},
};
