import { cva } from "class-variance-authority";
import { ActionVariant, cn, geoActionVariants } from "@/lib/utils";

const geoIconButton = cva(
    "flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 active:scale-95 cursor-pointer",
    {
        variants: {
            variant: geoActionVariants,
            size: {
                sm: "w-8 h-8 rounded-md",    // 32x32 px
                md: "w-12 h-12 rounded-lg",  // 48x48 px
                lg: "w-14 h-14 rounded-xl",  // 56x56 px
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

type GeoIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ActionVariant
    size?: "sm" | "md" | "lg";
    title: string;
    children: React.ReactNode;
};

export function GeoIconButton({
    variant,
    size,
    title,
    children,
    className,
    ...props
}: GeoIconButtonProps) {
    return (
        <button
            type="button"
            title={title}
            className={cn(geoIconButton({ variant, size }), className)}
            {...props}
        >
            {children}
        </button>
    );
}
