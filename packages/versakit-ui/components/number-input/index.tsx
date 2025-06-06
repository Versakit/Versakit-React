import { useState } from "react";
import { numberInputVariants } from "./index.variants";
import type { NumberInputProps } from "./types";

export const NumberInput = ({
	className,
	variant,
	size,
	disabled,
	tabIndex,
	"aria-label": ariaLabel,
	"aria-disabled": ariaDisabled,
	unstyled = false,
	pt,
	min,
	max,
	step = 1,
	value,
	defaultValue,
	onChange,
	...props
}: NumberInputProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	// 处理受控和非受控组件
	const [internalValue, setInternalValue] = useState<number | undefined>(
		defaultValue !== undefined ? defaultValue : value !== undefined ? value : undefined,
	);

	const currentValue = value !== undefined ? value : internalValue;

	// 增加值
	const increment = () => {
		if (disabled) return;

		const newValue = typeof currentValue === "number" ? currentValue + step : step;
		const limitedValue = max !== undefined ? Math.min(newValue, max) : newValue;

		if (value === undefined) {
			setInternalValue(limitedValue);
		}

		onChange?.(limitedValue);
	};

	// 减少值
	const decrement = () => {
		if (disabled) return;

		const newValue = typeof currentValue === "number" ? currentValue - step : -step;
		const limitedValue = min !== undefined ? Math.max(newValue, min) : newValue;

		if (value === undefined) {
			setInternalValue(limitedValue);
		}

		onChange?.(limitedValue);
	};

	// 处理输入变化
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const numberValue = inputValue === "" ? undefined : Number(inputValue);

		if (value === undefined) {
			setInternalValue(numberValue);
		}

		if (numberValue !== undefined) {
			onChange?.(numberValue);
		}
	};

	return (
		<div className="flex">
			<input
				className={unstyled ? className : numberInputVariants({ variant, size, class: className })}
				type="number"
				disabled={disabled}
				tabIndex={tabIndex}
				aria-label={ariaLabel}
				aria-disabled={ariaDisabled || disabled}
				min={min}
				max={max}
				step={step}
				value={currentValue === undefined ? "" : currentValue}
				onChange={handleChange}
				{...passThrough}
				{...props}
			/>
			<div className="flex flex-col">
				<button
					className="flex items-center justify-center h-1/2 px-2 border border-l-0 border-gray-300 disabled:opacity-50"
					onClick={increment}
					disabled={
						disabled ||
						(max !== undefined && typeof currentValue === "number" && currentValue >= max)
					}
					aria-label="增加"
					type="button"
				>
					+
				</button>
				<button
					className="flex items-center justify-center h-1/2 px-2 border border-t-0 border-l-0 border-gray-300 disabled:opacity-50"
					onClick={decrement}
					disabled={
						disabled ||
						(min !== undefined && typeof currentValue === "number" && currentValue <= min)
					}
					aria-label="减少"
					type="button"
				>
					-
				</button>
			</div>
		</div>
	);
};
