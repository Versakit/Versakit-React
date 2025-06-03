import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type { chipVariants } from "./index.variants";

export interface ChipAccessibilityProps {
	/**
	 * ARIA标签，用于屏幕阅读器
	 */
	"aria-label"?: string;
	/**
	 * 指示组件是否处于禁用状态
	 */
	"aria-disabled"?: boolean;
	/**
	 * 指示组件是否可移除
	 */
	"aria-removable"?: boolean;
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

export type ChipProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof chipVariants> &
	ChipAccessibilityProps &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
		/**
		 * 是否可以关闭/删除
		 */
		closable?: boolean;
		/**
		 * 关闭/删除时的回调函数
		 */
		onClose?: () => void;
		/**
		 * 是否禁用
		 */
		disabled?: boolean;
	};
