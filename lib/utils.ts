import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const geoActionVariants = {
  primary:
    "bg-primary text-white hover:bg-primary/70 focus:ring-primary/50 active:bg-primary/90",
  secondary:
    "bg-secondary text-white hover:bg-secondary/70 focus:ring-secondary/50 active:bg-secondary/90",
  subtle:
    "bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200/70 focus:ring-gray-200/50 active:bg-gray-300/90",
  destructive:
    "bg-destructive text-white hover:bg-destructive/70 focus:ring-destructive/50 active:bg-destructive/80",
  outline:
    "bg-primary/10 border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50 active:bg-primary/90",
}

export type ActionVariant =
    | "primary"
    | "outline"
    | "secondary"
    | "subtle"
    | "destructive";

export const geoActionBase = cva(
    "inline-flex items-center justify-center gap-3 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 cursor-pointer group",
    {
        variants: {
            variant: geoActionVariants,
            size: {
                sm: "px-4 py-2 text-sm",
                md: "px-5 py-2.5 text-base",
                lg: "px-6 py-3 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);
