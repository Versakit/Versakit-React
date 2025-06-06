import { inputVariants } from "./index.variants";
import type { InputProps } from "./types";

export const Input = ({
	className,
	variant,
	size,
	disabled,
	readOnly,
	tabIndex,
	type = "text",
	"aria-label": ariaLabel,
	"aria-disabled": ariaDisabled,
	"aria-invalid": ariaInvalid,
	unstyled = false,
	pt,
	required,
	...props
}: InputProps) => {
	// 合并自定义属性
	const passThrough = pt || {};
	return (
		// biome-ignore lint/nursery/useAriaPropsSupportedByRole: <explanation>
		<input
			className={unstyled ? className : inputVariants({ variant, size, class: className })}
			type={type}
			disabled={disabled}
			readOnly={readOnly}
			tabIndex={tabIndex}
			aria-label={ariaLabel}
			aria-disabled={ariaDisabled || disabled}
			aria-invalid={ariaInvalid}
			required={required}
			{...passThrough}
			{...props}
		/>
	);
};
