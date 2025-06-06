import { tv } from "tailwind-variants";

export const sliderVariants = tv({
	base: "relative w-full h-2 rounded-full bg-gray-200 cursor-pointer",
	variants: {
		variant: {
			default: "bg-gray-200",
			primary: "bg-blue-100",
			secondary: "bg-gray-100",
			success: "bg-green-100",
			warn: "bg-yellow-100",
			error: "bg-red-100",
		},
		size: {
			sm: "h-1",
			md: "h-2",
			lg: "h-3",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

export const sliderThumbVariants = tv({
	base: "absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
	variants: {
		size: {
			sm: "h-4 w-4",
			md: "h-5 w-5",
			lg: "h-6 w-6",
		},
	},
	defaultVariants: {
		size: "md",
	},
});
