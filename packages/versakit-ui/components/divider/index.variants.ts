import { tv } from "tailwind-variants";

export const dividerVariants = tv({
	base: "shrink-0 bg-gray-200 dark:bg-gray-700",
	variants: {
		orientation: {
			horizontal: "w-full h-px",
			vertical: "h-full w-px",
		},
		variant: {
			default: "bg-gray-200 dark:bg-gray-700",
			primary: "bg-blue-200 dark:bg-blue-700",
			success: "bg-green-200 dark:bg-green-700",
			warning: "bg-yellow-200 dark:bg-yellow-700",
			error: "bg-red-200 dark:bg-red-700",
		},
		size: {
			xs: "h-[0.5px] data-[orientation=vertical]:w-[0.5px]",
			sm: "h-px data-[orientation=vertical]:w-px",
			md: "h-[2px] data-[orientation=vertical]:w-[2px]",
			lg: "h-[3px] data-[orientation=vertical]:w-[3px]",
		},
		withLabel: {
			true: "flex items-center text-center before:content-[''] before:flex-1 after:content-[''] after:flex-1",
		},
		labelPosition: {
			center: "before:mr-2 after:ml-2",
			start: "before:hidden after:ml-2",
			end: "before:mr-2 after:hidden",
		},
		dashed: {
			true: "border-dashed border-0 bg-transparent border-y-[1px] border-gray-200 dark:border-gray-700 h-0",
		},
	},
	compoundVariants: [
		{
			orientation: "horizontal",
			withLabel: true,
			class: "w-full",
		},
	],
	defaultVariants: {
		orientation: "horizontal",
		variant: "default",
		size: "sm",
		labelPosition: "center",
	},
});
