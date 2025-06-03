import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button } from "../../packages/versakit-ui";
import "../../packages/versakit-ui/dist/main.css";

const meta = {
	title: "Versakit UI/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "secondary", "success", "warning", "error", "outline"],
			description: "徽章的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "徽章的尺寸",
		},
		shape: {
			control: { type: "select" },
			options: ["rounded", "pill", "square"],
			description: "徽章的形状",
		},
		position: {
			control: { type: "select" },
			options: ["top-right", "top-left", "bottom-right", "bottom-left"],
			description: "徽章的位置（当作为子元素时）",
		},
		content: {
			control: "text",
			description: "徽章内容",
		},
		max: {
			control: "number",
			description: "最大显示数量",
		},
		dot: {
			control: "boolean",
			description: "是否为点状徽章",
		},
		visible: {
			control: "boolean",
			description: "是否显示徽章",
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
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "5",
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		content: "5",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		content: "5",
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		content: "5",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		content: "5",
	},
};

export const ErrorVariant: Story = {
	args: {
		variant: "error",
		content: "5",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		content: "5",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		content: "5",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
		content: "5",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		content: "5",
	},
};

export const Rounded: Story = {
	args: {
		shape: "rounded",
		content: "5",
	},
};

export const Pill: Story = {
	args: {
		shape: "pill",
		content: "5",
	},
};

export const Square: Story = {
	args: {
		shape: "square",
		content: "5",
	},
};

export const Dot: Story = {
	args: {
		dot: true,
		variant: "error",
	},
};

export const WithMax: Story = {
	args: {
		content: "100",
		max: 99,
	},
};

export const WithChildren: Story = {
	args: {
		content: "5",
		variant: "primary",
		position: "top-right",
		children: <Button>消息</Button>,
	},
};

export const DotWithChildren: Story = {
	args: {
		dot: true,
		variant: "error",
		position: "top-right",
		children: <Button>通知</Button>,
	},
};

export const Invisible: Story = {
	args: {
		content: "5",
		visible: false,
		children: <Button>隐藏徽章</Button>,
	},
};

export const Unstyled: Story = {
	args: {
		content: "5",
		unstyled: true,
		className: "bg-purple-500 text-white px-2 py-1 rounded-full",
	},
};

export const WithPassThrough: Story = {
	args: {
		content: "5",
		variant: "primary",
		pt: {
			"data-testid": "custom-badge",
			"data-custom": "custom-value",
		},
	},
};

export const AccessibilityExample: Story = {
	args: {
		content: "5",
		variant: "primary",
		"aria-label": "5 条未读消息",
	},
};
