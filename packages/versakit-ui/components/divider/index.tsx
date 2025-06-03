import { dividerVariants } from "./index.variants";
import type { DividerProps } from "./types";

export const Divider = ({
	className,
	orientation = "horizontal",
	variant,
	size,
	dashed,
	labelPosition,
	role = "separator",
	"aria-hidden": ariaHidden,
	"aria-label": ariaLabel,
	"aria-orientation": ariaOrientation,
	unstyled = false,
	pt,
	children,
	...props
}: DividerProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	// 如果有子元素，则添加标签样式
	const withLabel = !!children;

	// 根据orientation设置aria-orientation
	const finalAriaOrientation = ariaOrientation || orientation;

	return (
		<div
			className={
				unstyled
					? className
					: dividerVariants({
							orientation,
							variant,
							size,
							dashed,
							withLabel,
							labelPosition: withLabel ? labelPosition : undefined,
							class: className,
						})
			}
			role={role}
			aria-hidden={ariaHidden}
			aria-label={ariaLabel}
			aria-orientation={finalAriaOrientation}
			data-orientation={orientation}
			{...passThrough}
			{...props}
		>
			{children}
		</div>
	);
};

// 导出类型
export type { DividerProps } from "./types";
export { dividerVariants } from "./index.variants";
