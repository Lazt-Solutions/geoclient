import { cva } from "class-variance-authority";
import { geoActionVariants, geoBadgeVariants } from "./geo-variants-styles";

export const geoActionBase = cva(
    "inline-flex items-center justify-center gap-3 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 cursor-pointer group",
    {
        variants: {
            variant: geoActionVariants,
            size: {
                sm: "px-4 py-2 text-sm",
                md: "px-4 py-3 text-base",
                lg: "px-4 py-4 text-lg",
                "icon-sm": "w-8 h-8 rounded-md",
                "icon-md": "w-12 h-12 rounded-lg",
                "icon-lg": "w-14 h-14 rounded-xl",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export const geoBadgeBase = cva(
    "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
    {
        variants: {
            variant: geoBadgeVariants,
            size: {
                sm: "text-xs",
                md: "text-sm",
                lg: "text-md",
                "icon-sm": "w-8 h-8",
                "icon-md": "w-12 h-12",
                "icon-lg": "w-14 h-14",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);
