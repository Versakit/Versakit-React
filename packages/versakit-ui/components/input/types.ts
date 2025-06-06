import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type { inputVariants } from "./index.variants";

export interface InputAccessibilityProps {
	/**
	 * ARIA标签，用于屏幕阅读器
	 */
	"aria-label"?: string;
	/**
	 * 指示输入框是否处于禁用状态
	 */
	"aria-disabled"?: boolean;
	/**
	 * 指示输入框的值是否无效
	 */
	"aria-invalid"?: boolean | "grammar" | "spelling";
}

export interface PassThroughProps {
	/**
	 * 传递给组件的自定义属性
	 */
	pt?: Record<string, unknown>;
}

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
	VariantProps<typeof inputVariants> &
	InputAccessibilityProps &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};
