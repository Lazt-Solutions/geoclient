"use client"
import { ActionVariant, cn, geoActionBase } from "@/lib/utils";

type Props = {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    variant?: ActionVariant;
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
};

export function GeoButton({
    type = "button",
    children,
    variant,
    size,
    className,
    onClick,
    disabled,
}: Props) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(geoActionBase({ variant, size }), className)}
        >
            {children}
        </button>
    );
}
