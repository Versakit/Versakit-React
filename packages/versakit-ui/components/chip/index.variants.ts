import { tv } from "tailwind-variants";

export const chipVariants = tv({
	base: "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
	variants: {
		variant: {
			default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
			primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
			secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
			success: "bg-green-100 text-green-800 hover:bg-green-200",
			warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
			error: "bg-red-100 text-red-800 hover:bg-red-200",
			outline: "border border-gray-200 text-gray-800 hover:bg-gray-100",
		},
		size: {
			sm: "h-5 text-xs",
			md: "h-6 text-sm",
			lg: "h-7 text-base",
		},
		interactive: {
			true: "cursor-pointer",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});
