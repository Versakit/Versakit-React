import { tv } from "tailwind-variants";

export const cardVariants = tv({
	base: "rounded-lg border bg-card text-card-foreground shadow-sm",
	variants: {
		variant: {
			default: "border-gray-200 bg-white",
			outline: "border-gray-200 bg-transparent",
			filled: "border-transparent bg-gray-100",
			elevated: "border-transparent shadow-md",
		},
		size: {
			sm: "p-3",
			md: "p-4",
			lg: "p-6",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

export const cardHeaderVariants = tv({
	base: "flex flex-col space-y-1.5 pb-4",
});

export const cardTitleVariants = tv({
	base: "text-lg font-semibold leading-none tracking-tight",
});

export const cardDescriptionVariants = tv({
	base: "text-sm text-gray-500",
});

export const cardContentVariants = tv({
	base: "pt-0",
});

export const cardFooterVariants = tv({
	base: "flex items-center pt-4",
	variants: {
		align: {
			start: "justify-start",
			center: "justify-center",
			end: "justify-end",
			between: "justify-between",
		},
	},
	defaultVariants: {
		align: "between",
	},
});
