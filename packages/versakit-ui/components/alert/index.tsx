import { alertDescriptionVariants, alertTitleVariants, alertVariants } from "./index.variants";
import type { AlertDescriptionProps, AlertProps, AlertTitleProps } from "./types";

export const Alert = ({
	className,
	variant,
	size,
	icon,
	closable,
	onClose,
	role = "alert",
	"aria-label": ariaLabel,
	"aria-live": ariaLive = "polite",
	unstyled = false,
	pt,
	children,
	...props
}: AlertProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	return (
		<div
			className={unstyled ? className : alertVariants({ variant, size, class: className })}
			role={role}
			aria-label={ariaLabel}
			aria-live={ariaLive}
			{...passThrough}
			{...props}
		>
			{icon && icon}
			{children}
			{closable && (
				<button
					className="absolute top-4 right-4 h-4 w-4 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
					onClick={handleClose}
					aria-label="关闭警告"
					type="button"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
			)}
		</div>
	);
};

export const AlertTitle = ({
	className,
	unstyled = false,
	pt,
	children,
	...props
}: AlertTitleProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<h5
			className={unstyled ? className : alertTitleVariants({ class: className })}
			{...passThrough}
			{...props}
		>
			{children}
		</h5>
	);
};

export const AlertDescription = ({
	className,
	unstyled = false,
	pt,
	children,
	...props
}: AlertDescriptionProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<div
			className={unstyled ? className : alertDescriptionVariants({ class: className })}
			{...passThrough}
			{...props}
		>
			{children}
		</div>
	);
};

// 导出组合组件
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

// 导出类型
export type {
	AlertProps,
	AlertTitleProps,
	AlertDescriptionProps,
} from "./types";
export {
	alertVariants,
	alertTitleVariants,
	alertDescriptionVariants,
} from "./index.variants";
