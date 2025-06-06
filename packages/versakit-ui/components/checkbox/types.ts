import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type { checkboxVariants } from "./index.variants";

export interface CheckboxAccessibilityProps {
	/**
	 * ARIA标签，用于屏幕阅读器
	 */
	"aria-label"?: string;
	/**
	 * 指示复选框是否处于禁用状态
	 */
	"aria-disabled"?: boolean;
	/**
	 * 指示复选框是否被选中
	 */
	"aria-checked"?: boolean | "mixed";
	/**
	 * 复选框的角色
	 */
	role?: string;
}

export interface PassThroughProps {
	/**
	 * 传递给组件的自定义属性
	 */
	pt?: Record<string, unknown>;
}

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
	VariantProps<typeof checkboxVariants> &
	CheckboxAccessibilityProps &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};
