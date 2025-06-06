import type { Meta, StoryObj } from "@storybook/react";
import { InputOTP } from "@versakit/react";
import "@versakit/react/dist/main.css";

// 更多关于如何配置 stories 的信息: https://storybook.js.org/docs/writing-stories
const meta = {
	title: "Versakit UI/InputOTP",
	component: InputOTP,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "secondary", "success", "warn", "error"],
			description: "OTP输入框的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "OTP输入框的尺寸",
		},
		length: {
			control: { type: "number", min: 1, max: 10 },
			description: "OTP输入框的数量",
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
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

// 更多关于 Stories 的信息: https://storybook.js.org/docs/writing-stories/introduction
export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
		length: 6,
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		size: "md",
		length: 6,
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "md",
		length: 6,
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		size: "md",
		length: 6,
	},
};

export const Warning: Story = {
	args: {
		variant: "warn",
		size: "md",
		length: 6,
	},
};

export const ErrorOTP: Story = {
	args: {
		variant: "error",
		size: "md",
		length: 6,
	},
};

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		length: 6,
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		length: 6,
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		length: 6,
	},
};

export const FourDigits: Story = {
	args: {
		variant: "default",
		size: "md",
		length: 4,
	},
};

export const EightDigits: Story = {
	args: {
		variant: "default",
		size: "md",
		length: 8,
	},
};

export const Disabled: Story = {
	args: {
		variant: "default",
		size: "md",
		length: 6,
		disabled: true,
	},
};

export const Unstyled: Story = {
	args: {
		unstyled: true,
		className:
			"w-8 h-8 text-center border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700",
		length: 6,
	},
};

export const WithPassThrough: Story = {
	args: {
		variant: "primary",
		size: "md",
		length: 6,
		pt: {
			"data-testid": "custom-otp-input",
			"data-custom": "custom-value",
		},
	},
};

export const AccessibilityExample: Story = {
	args: {
		variant: "primary",
		size: "md",
		length: 6,
		"aria-label": "验证码输入",
	},
};
