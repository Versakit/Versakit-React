import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type { badgeVariants } from "./index.variants";

export interface BadgeAccessibilityProps {
	/**
	 * ARIA标签，用于屏幕阅读器
	 */
	"aria-label"?: string;
	/**
	 * 指示组件是否处于隐藏状态
	 */
	"aria-hidden"?: boolean;
	/**
	 * 组件的角色
	 */
	role?: string;
}

export interface PassThroughProps {
	/**
	 * 传递给组件的自定义属性
	 */
	pt?: Record<string, unknown>;
}

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
	VariantProps<typeof badgeVariants> &
	BadgeAccessibilityProps &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
		/**
		 * 徽章显示的内容
		 */
		content?: React.ReactNode;
		/**
		 * 是否显示徽章
		 */
		visible?: boolean;
		/**
		 * 最大显示数量，超过显示为 {max}+
		 */
		max?: number;
		/**
		 * 是否为点状徽章，不显示内容
		 */
		dot?: boolean;
	};
