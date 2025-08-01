import Link from "next/link";
import { ActionVariant, cn, geoActionBase } from "@/lib/utils";

type Props = {
    href: string;
    children: React.ReactNode;
    variant?: ActionVariant;
    size?: "sm" | "md" | "lg";
    className?: string;
};

export function GeoActionLink({ href, children, variant, size, className }: Props) {
    return (
        <Link href={href} className={cn(geoActionBase({ variant, size }), className)}>
            {children}
        </Link>
    );
}
