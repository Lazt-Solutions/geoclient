"use client"

import { ActionSizes, ActionVariant } from "@/lib/types/action.types";
import { cn } from "@/lib/utils/cn";
import { geoActionBase } from "@/lib/utils/geoActionBase";
import Link from "next/link";
import { MouseEvent } from "react";

type Props = {
    href: string;
    children: React.ReactNode;
    variant?: ActionVariant;
    size?: ActionSizes;
    className?: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
};

export function GeoActionLink({ href, children, variant, size, className, onClick }: Props) {
    return (
        <Link href={href} className={cn(geoActionBase({ variant, size }), className)} onClick={onClick}>
            {children}
        </Link>
    );
}
