import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card } from "@versakit/react";
import "@versakit/versakit-ui/dist/main.css";

const meta = {
	title: "Versakit UI/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "outline", "filled", "elevated"],
			description: "卡片的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "卡片的尺寸",
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基本卡片
export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "这是一个基本的卡片",
	},
};

// 不同变体
export const Outline: Story = {
	args: {
		variant: "outline",
		size: "md",
		children: "这是一个轮廓卡片",
	},
};

export const Filled: Story = {
	args: {
		variant: "filled",
		size: "md",
		children: "这是一个填充卡片",
	},
};

export const Elevated: Story = {
	args: {
		variant: "elevated",
		size: "md",
		children: "这是一个阴影卡片",
	},
};

// 不同尺寸
export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		children: "这是一个小尺寸卡片",
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "这是一个中尺寸卡片",
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		children: "这是一个大尺寸卡片",
	},
};

// 完整示例
export const CompleteExample: Story = {
	args: {
		variant: "default",
		size: "md",
		children: (
			<>
				<Card.Header>
					<Card.Title>卡片标题</Card.Title>
					<Card.Description>这是卡片的描述文本，提供更多的上下文信息。</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>这是卡片的主要内容区域。您可以在这里放置任何内容，如文本、图像、列表等。</p>
				</Card.Content>
				<Card.Footer>
					<Button variant="primary">确认</Button>
					<Button variant="outline">取消</Button>
				</Card.Footer>
			</>
		),
	},
};

// 不同对齐方式的页脚
export const FooterAlignStart: Story = {
	args: {
		variant: "default",
		size: "md",
		children: (
			<>
				<Card.Header>
					<Card.Title>左对齐页脚</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>这个卡片的页脚按钮左对齐。</p>
				</Card.Content>
				<Card.Footer align="start">
					<Button variant="primary">确认</Button>
					<Button variant="outline">取消</Button>
				</Card.Footer>
			</>
		),
	},
};

export const FooterAlignCenter: Story = {
	args: {
		variant: "default",
		size: "md",
		children: (
			<>
				<Card.Header>
					<Card.Title>居中对齐页脚</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>这个卡片的页脚按钮居中对齐。</p>
				</Card.Content>
				<Card.Footer align="center">
					<Button variant="primary">确认</Button>
					<Button variant="outline">取消</Button>
				</Card.Footer>
			</>
		),
	},
};

export const FooterAlignEnd: Story = {
	args: {
		variant: "default",
		size: "md",
		children: (
			<>
				<Card.Header>
					<Card.Title>右对齐页脚</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>这个卡片的页脚按钮右对齐。</p>
				</Card.Content>
				<Card.Footer align="end">
					<Button variant="primary">确认</Button>
					<Button variant="outline">取消</Button>
				</Card.Footer>
			</>
		),
	},
};

// 自定义标题级别
export const CustomTitleLevel: Story = {
	args: {
		variant: "default",
		size: "md",
		children: (
			<>
				<Card.Header>
					<Card.Title as="h2">H2 标题</Card.Title>
					<Card.Description>这个卡片使用 H2 作为标题级别。</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>卡片内容</p>
				</Card.Content>
			</>
		),
	},
};

// 无样式卡片
export const Unstyled: Story = {
	args: {
		unstyled: true,
		className: "bg-purple-50 border border-purple-200 rounded-xl p-5",
		children: "这是一个自定义样式的卡片",
	},
};

// 带自定义属性
export const WithPassThrough: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "带自定义属性的卡片",
		pt: {
			"data-testid": "custom-card",
			"data-custom": "custom-value",
		},
	},
};
