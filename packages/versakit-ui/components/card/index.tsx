import {
	cardContentVariants,
	cardDescriptionVariants,
	cardFooterVariants,
	cardHeaderVariants,
	cardTitleVariants,
	cardVariants,
} from "./index.variants";
import type {
	CardContentProps,
	CardDescriptionProps,
	CardFooterProps,
	CardHeaderProps,
	CardProps,
	CardTitleProps,
} from "./types";

export const Card = ({
	className,
	variant,
	size,
	unstyled = false,
	pt,
	children,
	...props
}: CardProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<div
			className={unstyled ? className : cardVariants({ variant, size, class: className })}
			{...passThrough}
			{...props}
		>
			{children}
		</div>
	);
};

export const CardHeader = ({
	className,
	unstyled = false,
	pt,
	children,
	...props
}: CardHeaderProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<div
			className={unstyled ? className : cardHeaderVariants({ class: className })}
			{...passThrough}
			{...props}
		>
			{children}
		</div>
	);
};

export const CardTitle = ({
	className,
	unstyled = false,
	pt,
	as: Component = "h3",
	children,
	...props
}: CardTitleProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<Component
			className={unstyled ? className : cardTitleVariants({ class: className })}
			{...passThrough}
			{...props}
		>
			{children}
		</Component>
	);
};

export const CardDescription = ({
	className,
	unstyled = false,
	pt,
	children,
	...props
}: CardDescriptionProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<p
			className={unstyled ? className : cardDescriptionVariants({ class: className })}
			{...passThrough}
			{...props}
		>
			{children}
		</p>
	);
};

export const CardContent = ({
	className,
	unstyled = false,
	pt,
	children,
	...props
}: CardContentProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<div
			className={unstyled ? className : cardContentVariants({ class: className })}
			{...passThrough}
			{...props}
		>
			{children}
		</div>
	);
};

export const CardFooter = ({
	className,
	align,
	unstyled = false,
	pt,
	children,
	...props
}: CardFooterProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	return (
		<div
			className={unstyled ? className : cardFooterVariants({ align, class: className })}
			{...passThrough}
			{...props}
		>
			{children}
		</div>
	);
};

// 导出组合组件
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

// 导出类型
export type {
	CardProps,
	CardHeaderProps,
	CardTitleProps,
	CardDescriptionProps,
	CardContentProps,
	CardFooterProps,
} from "./types";
export {
	cardVariants,
	cardHeaderVariants,
	cardTitleVariants,
	cardDescriptionVariants,
	cardContentVariants,
	cardFooterVariants,
} from "./index.variants";
