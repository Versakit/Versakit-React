import { badgeVariants } from "./index.variants";
import type { BadgeProps } from "./types";

export const Badge = ({
	className,
	variant,
	size,
	shape,
	position,
	content,
	max = 99,
	dot = false,
	visible = true,
	role = "status",
	"aria-label": ariaLabel,
	"aria-hidden": ariaHidden,
	unstyled = false,
	pt,
	children,
	...props
}: BadgeProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	// 处理显示内容
	const displayContent = () => {
		if (dot) return null;
		if (typeof content === "number" && content > max) {
			return `${max}+`;
		}
		return content;
	};

	// 如果不可见则不渲染徽章
	if (!visible) {
		return <>{children}</>;
	}

	// 如果有子元素，渲染为相对定位的容器
	if (children) {
		return (
			<div className="relative inline-flex">
				{children}
				<span
					className={
						unstyled
							? className
							: badgeVariants({
									variant,
									size,
									shape,
									position,
									class: `${dot ? "h-2 w-2 min-w-0 p-0" : ""} ${className || ""}`,
								})
					}
					role={role}
					aria-label={ariaLabel}
					aria-hidden={ariaHidden}
					{...passThrough}
					{...props}
				>
					{displayContent()}
				</span>
			</div>
		);
	}

	// 否则只渲染徽章本身
	return (
		<span
			className={
				unstyled
					? className
					: badgeVariants({
							variant,
							size,
							shape,
							class: `${dot ? "h-2 w-2 min-w-0 p-0" : ""} ${className || ""}`,
						})
			}
			role={role}
			aria-label={ariaLabel}
			aria-hidden={ariaHidden}
			{...passThrough}
			{...props}
		>
			{displayContent()}
		</span>
	);
};

// 导出类型
export type { BadgeProps } from "./types";
export { badgeVariants } from "./index.variants";
