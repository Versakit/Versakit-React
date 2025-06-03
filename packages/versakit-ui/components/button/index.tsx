import { buttonVariants } from "./index.variants";
import type { ButtonProps } from "./types";

export const Button = ({
	className,
	variant,
	size,
	type = "button",
	disabled,
	tabIndex,
	role = "button",
	"aria-label": ariaLabel,
	"aria-disabled": ariaDisabled,
	"aria-expanded": ariaExpanded,
	"aria-haspopup": ariaHasPopup,
	"aria-controls": ariaControls,
	unstyled = false,
	pt,
	...props
}: ButtonProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<button
			className={unstyled ? className : buttonVariants({ variant, size, class: className })}
			type={type}
			disabled={disabled}
			tabIndex={tabIndex}
			role={role}
			aria-label={ariaLabel}
			aria-disabled={ariaDisabled || disabled}
			aria-expanded={ariaExpanded}
			aria-haspopup={ariaHasPopup}
			aria-controls={ariaControls}
			{...passThrough}
			{...props}
		/>
	);
};

// 导出类型
export type { ButtonProps } from "./types";
export { buttonVariants } from "./index.variants";
