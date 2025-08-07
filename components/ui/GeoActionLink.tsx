"use client"

import Link from "next/link";
import { ActionSizes, ActionVariant, cn, geoActionBase } from "@/lib/utils";
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
