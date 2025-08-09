'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
    href: string;
    children: React.ReactNode;
    external?: boolean;
    className?: string;
};

export function GeoTextLink({ href, children, external = false, className }: Props) {
    const baseClasses =
        "text-primary border-b border-transparent hover:border-primary outline-none focus-visible:ring focus-visible:ring-primary transition-all duration-300";


    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(baseClasses, className)}
            >
                {children}
                <span aria-hidden="true">↗</span>
            </a>
        );
    }

    return (
        <Link href={href} className={cn(baseClasses, className)}>
            {children}
        </Link>
    );
}
