import { checkboxVariants } from "./index.variants";
import type { CheckboxProps } from "./types";

export const Checkbox = ({
	className,
	variant,
	size,
	disabled,
	tabIndex,
	role = "checkbox",
	"aria-label": ariaLabel,
	"aria-disabled": ariaDisabled,
	"aria-checked": ariaChecked,
	unstyled = false,
	pt,
	...props
}: CheckboxProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<input
			type="checkbox"
			className={unstyled ? className : checkboxVariants({ variant, size, class: className })}
			disabled={disabled}
			tabIndex={tabIndex}
			role={role}
			aria-label={ariaLabel}
			aria-disabled={ariaDisabled || disabled}
			aria-checked={ariaChecked}
			{...passThrough}
			{...props}
		/>
	);
};
