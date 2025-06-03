import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type {
	cardContentVariants,
	cardDescriptionVariants,
	cardFooterVariants,
	cardHeaderVariants,
	cardTitleVariants,
	cardVariants,
} from "./index.variants";

export interface PassThroughProps {
	/**
	 * 传递给组件的自定义属性
	 */
	pt?: Record<string, unknown>;
}

export type CardProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof cardVariants> &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};

export type CardHeaderProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof cardHeaderVariants> &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement> &
	VariantProps<typeof cardTitleVariants> &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
		/**
		 * 标题元素类型
		 */
		as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	};

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement> &
	VariantProps<typeof cardDescriptionVariants> &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};

export type CardContentProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof cardContentVariants> &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};

export type CardFooterProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof cardFooterVariants> &
	PassThroughProps & {
		/**
		 * 是否移除默认样式
		 */
		unstyled?: boolean;
	};
