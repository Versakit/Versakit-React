import { tv } from "tailwind-variants";

export const checkboxVariants = tv({
	base: "h-4 w-4 rounded border border-gray-300 bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
	variants: {
		variant: {
			default: "text-blue-600",
			primary: "text-blue-600",
			secondary: "text-gray-600",
			success: "text-green-600",
			warn: "text-yellow-600",
			error: "text-red-600",
		},
		size: {
			sm: "h-3 w-3",
			md: "h-4 w-4",
			lg: "h-5 w-5",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});
