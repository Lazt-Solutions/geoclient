"use client"

import { ActionSizes, ActionVariant } from "@/lib/types/action.types";
import { cn } from "@/lib/utils/cn";
import { geoBadgeBase } from "@/lib/utils/geo-base-styles";

type Props = {
    hidden?: boolean;
    children: React.ReactNode;
    variant?: ActionVariant;
    size?: ActionSizes;
    className?: string;
};


function GeoBadge({ hidden, children, variant, size, className }: Props) {
    return (
        <span
            hidden={hidden}

            className={cn(geoBadgeBase({ variant, size }), className)}
        >
            {children}
        </span>
    )
}

export default GeoBadge