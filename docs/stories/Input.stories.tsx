import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@versakit/react";
import "@versakit/react/dist/main.css";

// 更多关于如何配置 stories 的信息: https://storybook.js.org/docs/writing-stories
const meta = {
	title: "Versakit UI/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "secondary", "success", "warn", "error"],
			description: "输入框的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "输入框的尺寸",
		},
		type: {
			control: { type: "select" },
			options: ["text", "password", "email", "tel", "url", "search"],
			description: "输入框的类型",
		},
		placeholder: {
			control: "text",
			description: "输入框的占位符文本",
		},
		disabled: {
			control: "boolean",
			description: "是否禁用",
		},
		readOnly: {
			control: "boolean",
			description: "是否只读",
		},
		required: {
			control: "boolean",
			description: "是否必填",
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// 更多关于 Stories 的信息: https://storybook.js.org/docs/writing-stories/introduction
export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
		placeholder: "请输入文本",
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		size: "md",
		placeholder: "主要输入框",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "md",
		placeholder: "次要输入框",
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		size: "md",
		placeholder: "成功输入框",
	},
};

export const Warning: Story = {
	args: {
		variant: "warn",
		size: "md",
		placeholder: "警告输入框",
	},
};

export const ErrorInput: Story = {
	args: {
		variant: "error",
		size: "md",
		placeholder: "错误输入框",
	},
};

export const Password: Story = {
	args: {
		variant: "default",
		size: "md",
		type: "password",
		placeholder: "请输入密码",
	},
};

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		placeholder: "小输入框",
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		placeholder: "中输入框",
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		placeholder: "大输入框",
	},
};

export const Disabled: Story = {
	args: {
		variant: "default",
		size: "md",
		disabled: true,
		placeholder: "禁用输入框",
	},
};

export const ReadOnly: Story = {
	args: {
		variant: "default",
		size: "md",
		readOnly: true,
		placeholder: "只读输入框",
		value: "这是只读内容",
	},
};

export const Required: Story = {
	args: {
		variant: "default",
		size: "md",
		required: true,
		placeholder: "必填输入框",
	},
};

export const Unstyled: Story = {
	args: {
		unstyled: true,
		className:
			"px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",
		placeholder: "自定义样式输入框",
	},
};

export const WithPassThrough: Story = {
	args: {
		variant: "primary",
		size: "md",
		placeholder: "带自定义属性的输入框",
		pt: {
			"data-testid": "custom-input",
			"data-custom": "custom-value",
		},
	},
};

export const AccessibilityExample: Story = {
	args: {
		variant: "primary",
		size: "md",
		placeholder: "无障碍示例",
		"aria-label": "用户名输入框",
		required: true,
	},
};
