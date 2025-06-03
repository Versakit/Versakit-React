import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../packages/versakit-ui";
import "../../packages/versakit-ui/dist/main.css";

const meta = {
	title: "Versakit UI/Chip",
	component: Chip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "secondary", "success", "warning", "error", "outline"],
			description: "标签的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "标签的尺寸",
		},
		children: {
			control: "text",
			description: "标签内容",
		},
		className: {
			control: "text",
			description: "自定义 CSS 类名",
		},
		unstyled: {
			control: "boolean",
			description: "是否移除默认样式",
		},
		closable: {
			control: "boolean",
			description: "是否可关闭",
		},
		disabled: {
			control: "boolean",
			description: "是否禁用",
		},
		pt: {
			control: "object",
			description: "传递给组件的自定义属性",
		},
		onClose: { action: "closed" },
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "默认标签",
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		size: "md",
		children: "主要标签",
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		size: "md",
		children: "成功标签",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		size: "md",
		children: "警告标签",
	},
};

export const ErrorVariant: Story = {
	args: {
		variant: "error",
		size: "md",
		children: "错误标签",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		size: "md",
		children: "轮廓标签",
	},
};

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		children: "小标签",
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "中标签",
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		children: "大标签",
	},
};

export const Closable: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "可关闭标签",
		closable: true,
	},
};

export const Disabled: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "禁用标签",
		disabled: true,
		closable: true,
	},
};

export const Unstyled: Story = {
	args: {
		unstyled: true,
		className: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full",
		children: "自定义样式标签",
	},
};

export const WithPassThrough: Story = {
	args: {
		variant: "primary",
		size: "md",
		children: "带自定义属性的标签",
		pt: {
			"data-testid": "custom-chip",
			"data-custom": "custom-value",
		},
	},
};

export const AccessibilityExample: Story = {
	args: {
		variant: "primary",
		size: "md",
		children: "无障碍标签",
		"aria-label": "无障碍示例标签",
	},
};
