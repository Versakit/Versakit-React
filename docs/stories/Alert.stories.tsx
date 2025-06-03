import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@versakit/react";
import "@versakit/react/dist/main.css";

const meta = {
	title: "Versakit UI/Alert",
	component: Alert,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "primary", "success", "warning", "error"],
			description: "警告框的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "警告框的尺寸",
		},
		icon: {
			control: "boolean",
			description: "是否显示图标（示例中使用布尔值控制，实际使用时应传入ReactNode）",
		},
		closable: {
			control: "boolean",
			description: "是否可关闭",
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
		onClose: { action: "closed" },
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// 图标渲染函数
const renderIcon = (variant: string) => {
	const iconMap: Record<string, React.ReactNode> = {
		default: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-gray-500"
				aria-hidden="true"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M12 16v-4" />
				<path d="M12 8h.01" />
			</svg>
		),
		primary: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-blue-500"
				aria-hidden="true"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M12 16v-4" />
				<path d="M12 8h.01" />
			</svg>
		),
		success: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-green-500"
				aria-hidden="true"
			>
				<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
				<path d="m9 11 3 3L22 4" />
			</svg>
		),
		warning: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-yellow-500"
				aria-hidden="true"
			>
				<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
				<path d="M12 9v4" />
				<path d="M12 17h.01" />
			</svg>
		),
		error: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-red-500"
				aria-hidden="true"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="m15 9-6 6" />
				<path d="m9 9 6 6" />
			</svg>
		),
	};

	return iconMap[variant] || iconMap.default;
};

// 基本警告框
export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "这是一个基本警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};

// 不同变体
export const Primary: Story = {
	args: {
		variant: "primary",
		size: "md",
		icon: true,
		children: "这是一个主要警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		size: "md",
		icon: true,
		children: "这是一个成功警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		size: "md",
		icon: true,
		children: "这是一个警告警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};

export const ErrorAlert: Story = {
	args: {
		variant: "error",
		size: "md",
		icon: true,
		children: "这是一个错误警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};

// 不同尺寸
export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		icon: true,
		children: "这是一个小尺寸警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		icon: true,
		children: "这是一个中尺寸警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		icon: true,
		children: "这是一个大尺寸警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};

// 可关闭
export const Closable: Story = {
	args: {
		variant: "default",
		size: "md",
		closable: true,
		children: "这是一个可关闭的警告框",
	},
};

// 带标题和描述
export const WithTitleAndDescription: Story = {
	args: {
		variant: "primary",
		size: "md",
		icon: true,
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return (
			<Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined}>
				<Alert.Title>警告标题</Alert.Title>
				<Alert.Description>这是警告框的详细描述信息，提供更多的上下文和指导。</Alert.Description>
			</Alert>
		);
	},
};

// 无样式
export const Unstyled: Story = {
	args: {
		unstyled: true,
		className: "bg-purple-50 border border-purple-200 rounded-xl p-4 text-purple-800",
		children: "这是一个自定义样式的警告框",
	},
};

// 带自定义属性
export const WithPassThrough: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "带自定义属性的警告框",
		pt: {
			"data-testid": "custom-alert",
			"data-custom": "custom-value",
		},
	},
};

// 无障碍示例
export const AccessibilityExample: Story = {
	args: {
		variant: "warning",
		size: "md",
		icon: true,
		"aria-live": "assertive",
		"aria-label": "重要安全警告",
		children: "这是一个具有无障碍特性的警告框",
	},
	render: (args) => {
		const { icon, ...rest } = args;
		return <Alert {...rest} icon={icon ? renderIcon(args.variant as string) : undefined} />;
	},
};
