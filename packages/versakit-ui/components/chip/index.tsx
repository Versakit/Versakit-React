import { chipVariants } from "./index.variants";
import type { ChipProps } from "./types";

export const Chip = ({
	className,
	variant,
	size,
	disabled,
	closable,
	onClose,
	children,
	role = "status",
	"aria-label": ariaLabel,
	"aria-disabled": ariaDisabled,
	unstyled = false,
	pt,
	...props
}: ChipProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	const handleClose = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (!disabled && onClose) {
			onClose();
		}
	};

	return (
		<div
			className={
				unstyled
					? className
					: chipVariants({
							variant,
							size,
							interactive: !!onClose,
							class: className,
						})
			}
			role={role}
			aria-label={ariaLabel}
			aria-disabled={ariaDisabled || disabled}
			{...passThrough}
			{...props}
		>
			{children}
			{closable && (
				<button
					type="button"
					className="ml-1 h-4 w-4 rounded-full hover:bg-gray-300 inline-flex items-center justify-center"
					onClick={handleClose}
					disabled={disabled}
					aria-label="关闭"
					title="关闭"
				>
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							d="M1 1L9 9M9 1L1 9"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

// 导出类型
export type { ChipProps } from "./types";
export { chipVariants } from "./index.variants";
