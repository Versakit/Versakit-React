import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type { numberInputVariants } from "./index.variants";

export interface NumberInputAccessibilityProps {
	/**
	 * ARIA标签，用于屏幕阅读器
	 */
	"aria-label"?: string;
	/**
	 * 指示数字输入框是否处于禁用状态
	 */
	"aria-disabled"?: boolean;
}

export interface PassThroughProps {
	/**
	 * 传递给组件的自定义属性
	 */
	pt?: Record<string, unknown>;
}

export type NumberInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"size" | "onChange" | "value" | "defaultValue"
> &
	VariantProps<typeof numberInputVariants> &
	NumberInputAccessibilityProps &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
		/**
		 * 最小值
		 */
		min?: number;
		/**
		 * 最大值
		 */
		max?: number;
		/**
		 * 步进值
		 */
		step?: number;
		/**
		 * 当前值（受控组件）
		 */
		value?: number;
		/**
		 * 默认值（非受控组件）
		 */
		defaultValue?: number;
		/**
		 * 值变化时的回调函数
		 */
		onChange?: (value: number) => void;
	};
