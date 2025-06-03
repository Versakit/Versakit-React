import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import type { alertDescriptionVariants, alertTitleVariants, alertVariants } from "./index.variants";

export interface AlertAccessibilityProps {
	/**
	 * ARIA角色，用于屏幕阅读器
	 */
	role?: string;
	/**
	 * ARIA标签，用于屏幕阅读器
	 */
	"aria-label"?: string;
	/**
	 * 指示警告框的实时状态
	 */
	"aria-live"?: "assertive" | "off" | "polite";
}

export interface PassThroughProps {
	/**
	 * 传递给组件的自定义属性
	 */
	pt?: Record<string, unknown>;
}

export type AlertProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof alertVariants> &
	AlertAccessibilityProps &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
		/**
		 * 警告框的图标
		 */
		icon?: ReactNode;
		/**
		 * 是否可关闭
		 */
		closable?: boolean;
		/**
		 * 关闭时的回调函数
		 */
		onClose?: () => void;
	};

export type AlertTitleProps = HTMLAttributes<HTMLHeadingElement> &
	VariantProps<typeof alertTitleVariants> &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};

export type AlertDescriptionProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof alertDescriptionVariants> &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};
