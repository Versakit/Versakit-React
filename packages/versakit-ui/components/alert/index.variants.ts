import { tv } from "tailwind-variants";

export const alertVariants = tv({
	base: "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
	variants: {
		variant: {
			default: "bg-gray-50 text-gray-900 border-gray-200",
			primary: "bg-blue-50 text-blue-900 border-blue-200",
			success: "bg-green-50 text-green-900 border-green-200",
			warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
			error: "bg-red-50 text-red-900 border-red-200",
		},
		size: {
			sm: "text-sm p-3",
			md: "text-base p-4",
			lg: "text-lg p-5",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

export const alertTitleVariants = tv({
	base: "mb-1 font-medium leading-none tracking-tight",
});

export const alertDescriptionVariants = tv({
	base: "text-sm [&_p]:leading-relaxed",
});
