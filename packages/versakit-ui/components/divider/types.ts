import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type { dividerVariants } from "./index.variants";

export interface DividerAccessibilityProps {
	/**
	 * ARIA角色，用于屏幕阅读器
	 */
	role?: string;
	/**
	 * 指示分割线是否为装饰性元素
	 */
	"aria-hidden"?: boolean;
	/**
	 * ARIA标签，用于屏幕阅读器
	 */
	"aria-label"?: string;
	/**
	 * 指示分割线的方向
	 */
	"aria-orientation"?: "horizontal" | "vertical";
}

export interface PassThroughProps {
	/**
	 * 传递给组件的自定义属性
	 */
	pt?: Record<string, unknown>;
}

export type DividerProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof dividerVariants> &
	DividerAccessibilityProps &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
		/**
		 * 分割线的标签文本
		 */
		children?: React.ReactNode;
	};
