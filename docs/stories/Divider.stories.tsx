import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@versakit/react";
import "@versakit/react/dist/main.css";

const meta = {
	title: "Versakit UI/Divider",
	component: Divider,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
			description: "分割线的方向",
		},
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "success", "warning", "error"],
			description: "分割线的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["xs", "sm", "md", "lg"],
			description: "分割线的尺寸",
		},
		dashed: {
			control: "boolean",
			description: "是否为虚线",
		},
		labelPosition: {
			control: { type: "select" },
			options: ["center", "start", "end"],
			description: "标签的位置（当有标签时）",
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
	decorators: [
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(Story: any) => (
			<div style={{ width: "100%", maxWidth: "500px", padding: "20px" }}>{Story()}</div>
		),
	],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基本分割线
export const Default: Story = {
	args: {
		variant: "default",
		size: "sm",
	},
};

// 不同变体
export const Primary: Story = {
	args: {
		variant: "primary",
		size: "sm",
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		size: "sm",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		size: "sm",
	},
};

export const ErrorVariant: Story = {
	args: {
		variant: "error",
		size: "sm",
	},
};

// 不同尺寸
export const ExtraSmall: Story = {
	args: {
		variant: "default",
		size: "xs",
	},
};

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
	},
};

// 虚线
export const Dashed: Story = {
	args: {
		variant: "default",
		size: "sm",
		dashed: true,
	},
};

// 带标签
export const WithLabel: Story = {
	args: {
		variant: "default",
		size: "sm",
		children: "标签文本",
	},
};

// 不同标签位置
export const LabelCenter: Story = {
	args: {
		variant: "default",
		size: "sm",
		labelPosition: "center",
		children: "居中标签",
	},
};

export const LabelStart: Story = {
	args: {
		variant: "default",
		size: "sm",
		labelPosition: "start",
		children: "左对齐标签",
	},
};

export const LabelEnd: Story = {
	args: {
		variant: "default",
		size: "sm",
		labelPosition: "end",
		children: "右对齐标签",
	},
};

// 垂直方向
export const Vertical: Story = {
	args: {
		orientation: "vertical",
		variant: "default",
		size: "sm",
	},
	decorators: [
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(Story: any) => (
			<div style={{ height: "100px", display: "flex", alignItems: "center" }}>{Story()}</div>
		),
	],
};

// 不同尺寸的垂直分割线
export const VerticalSizes: Story = {
	render: () => (
		<div
			style={{
				height: "100px",
				display: "flex",
				alignItems: "center",
				gap: "20px",
			}}
		>
			<Divider orientation="vertical" size="xs" />
			<Divider orientation="vertical" size="sm" />
			<Divider orientation="vertical" size="md" />
			<Divider orientation="vertical" size="lg" />
		</div>
	),
};

// 无样式
export const Unstyled: Story = {
	args: {
		unstyled: true,
		className: "h-px w-full bg-purple-300",
	},
};

// 带自定义属性
export const WithPassThrough: Story = {
	args: {
		variant: "default",
		size: "sm",
		pt: {
			"data-testid": "custom-divider",
			"data-custom": "custom-value",
		},
	},
};

// 无障碍示例
export const AccessibilityExample: Story = {
	args: {
		variant: "default",
		size: "sm",
		"aria-label": "内容分隔符",
	},
};
