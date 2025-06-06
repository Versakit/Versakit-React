import { tv } from "tailwind-variants";

export const inputVariants = tv({
	base: "flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
	variants: {
		variant: {
			default: "border-gray-300 focus:border-blue-500",
			primary: "border-blue-500 focus:border-blue-600",
			secondary: "border-gray-500 focus:border-gray-600",
			success: "border-green-500 focus:border-green-600",
			warn: "border-yellow-500 focus:border-yellow-600",
			error: "border-red-500 focus:border-red-600",
		},
		size: {
			sm: "h-8 px-2 text-xs",
			md: "h-10 px-3 text-sm",
			lg: "h-12 px-4 text-base",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});
