import { tv } from "tailwind-variants";

export const badgeVariants = tv({
	base: "inline-flex items-center justify-center rounded-full text-xs font-medium",
	variants: {
		variant: {
			default: "bg-gray-900 text-white",
			primary: "bg-blue-600 text-white",
			secondary: "bg-gray-500 text-white",
			success: "bg-green-600 text-white",
			warning: "bg-yellow-600 text-white",
			error: "bg-red-600 text-white",
			outline: "border border-gray-200 text-gray-800",
		},
		size: {
			sm: "h-4 min-w-4 px-1",
			md: "h-5 min-w-5 px-1.5",
			lg: "h-6 min-w-6 px-2",
		},
		shape: {
			rounded: "rounded-md",
			pill: "rounded-full",
			square: "rounded-none",
		},
		position: {
			"top-right": "absolute -top-1 -right-1",
			"top-left": "absolute -top-1 -left-1",
			"bottom-right": "absolute -bottom-1 -right-1",
			"bottom-left": "absolute -bottom-1 -left-1",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
		shape: "pill",
	},
});
