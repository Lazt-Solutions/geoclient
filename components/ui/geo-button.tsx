"use client"

import { ActionSizes, ActionVariant, ButtonTypes } from "@/lib/types/action.types";
import { cn } from "@/lib/utils/cn";
import { geoActionBase } from "@/lib/utils/geo-base-styles";

type Props = {
    type?: ButtonTypes;
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
