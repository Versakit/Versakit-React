import { tv } from "tailwind-variants";

export const inputOtpVariants = tv({
	base: "flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-transparent text-center text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
			sm: "h-8 w-8 text-sm",
			md: "h-10 w-10 text-lg",
			lg: "h-12 w-12 text-xl",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});
