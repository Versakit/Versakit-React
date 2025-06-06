import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type { inputOtpVariants } from "./index.variants";

export interface InputOTPAccessibilityProps {
	/**
	 * ARIA标签，用于屏幕阅读器
	 */
	"aria-label"?: string;
	/**
	 * 指示输入框是否处于禁用状态
	 */
	"aria-disabled"?: boolean;
}

export interface PassThroughProps {
	/**
	 * 传递给组件的自定义属性
	 */
	pt?: Record<string, unknown>;
}

export type InputOTPProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> &
	VariantProps<typeof inputOtpVariants> &
	InputOTPAccessibilityProps &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
		/**
		 * OTP 输入框的数量
		 */
		length?: number;
		/**
		 * 值变化时的回调函数
		 */
		onChange?: (value: string) => void;
	};
