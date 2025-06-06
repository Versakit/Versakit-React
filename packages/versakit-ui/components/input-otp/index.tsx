import { useRef, useState } from "react";
import { inputOtpVariants } from "./index.variants";
import type { InputOTPProps } from "./types";

export const InputOTP = ({
	className,
	variant,
	size,
	disabled,
	tabIndex,
	"aria-label": ariaLabel,
	"aria-disabled": ariaDisabled,
	unstyled = false,
	pt,
	length = 6,
	onChange,
	...props
}: InputOTPProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	// 存储每个输入框的值
	const [values, setValues] = useState<string[]>(Array(length).fill(""));

	// 引用数组，用于存储每个输入框的引用
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	// 处理输入变化
	const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value.length <= 1) {
			const newValues = [...values];
			newValues[index] = value;
			setValues(newValues);

			// 如果有输入，且不是最后一个输入框，则聚焦下一个
			if (value && index < length - 1) {
				inputRefs.current[index + 1]?.focus();
			}

			// 触发onChange回调
			if (onChange) {
				onChange(newValues.join(""));
			}
		}
	};

	// 处理键盘事件，如退格键
	const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
		// 如果按下退格键且当前输入框为空，则聚焦上一个输入框
		if (e.key === "Backspace" && !values[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	return (
		<div className="flex gap-2">
			{Array(length)
				.fill(0)
				.map((_, index) => {
					const inputId = `otp-input-${index}-${Math.random().toString(36).substr(2, 9)}`;
					return (
						<input
							key={inputId}
							ref={(el) => {
								inputRefs.current[index] = el;
							}}
							className={
								unstyled ? className : inputOtpVariants({ variant, size, class: className })
							}
							type="text"
							inputMode="numeric"
							pattern="[0-9]*"
							maxLength={1}
							disabled={disabled}
							tabIndex={tabIndex ? tabIndex + index : undefined}
							aria-label={ariaLabel ? `${ariaLabel} ${index + 1}` : `OTP digit ${index + 1}`}
							aria-disabled={ariaDisabled || disabled}
							value={values[index]}
							onChange={(e) => handleChange(index, e)}
							onKeyDown={(e) => handleKeyDown(index, e)}
							{...passThrough}
							{...props}
						/>
					);
				})}
		</div>
	);
};
