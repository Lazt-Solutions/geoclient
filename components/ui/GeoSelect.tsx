"use client"


import { ActionSizes, ActionVariant } from "@/lib/types/action.types";
import { cn } from "@/lib/utils/cn";
import { geoActionBase } from "@/lib/utils/geo-base-styles";

type Option = {
    value: string;
    label: string;
};

type Props = {
    id?: string;
    hidden?: boolean;
    variant?: ActionVariant;
    size?: ActionSizes;
    className?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    value?: string;
    name: string;
    placeholder?: string;
    options: Option[];
};

export function GeoSelect({
    id,
    hidden = false,
    variant,
    size,
    className,
    onChange,
    disabled,
    value,
    name,
    options
}: Props) {
    return (
        <select
            id={id}
            name={name}
            hidden={hidden}
            value={value}
            disabled={disabled}
            onChange={e => onChange(e.target.value)}
            className={cn(geoActionBase({ variant, size }), className)}
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}
