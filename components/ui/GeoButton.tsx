"use client"
import { ActionSizes, ActionTypes, ActionVariant, cn, geoActionBase } from "@/lib/utils";

type Props = {
    type?: ActionTypes;
    hidden?: boolean;
    children: React.ReactNode;
    variant?: ActionVariant;
    size?: ActionSizes;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
};

export function GeoButton({
    type = "button",
    hidden = false,
    children,
    variant,
    size,
    className,
    onClick,
    disabled,
}: Props) {
    return (
        <button
            hidden={hidden}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(geoActionBase({ variant, size }), className)}
        >
            {children}
        </button>
    );
}
