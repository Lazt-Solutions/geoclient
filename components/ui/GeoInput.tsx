"use client"

import { ActionSizes, ActionVariant, InputTypes } from "@/lib/types/action.types";
import { cn } from "@/lib/utils/cn";
import { geoActionBase } from "@/lib/utils/geo-base-styles";

type Props = {
    id?: string;
    type?: InputTypes;
    hidden?: boolean;
    variant?: ActionVariant;
    size?: ActionSizes;
    className?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    value?: string;
    name: string;
    placeholder?: string;
};

export function GeoInput({
    type = "text",
    hidden = false,
    variant,
    size,
    className,
    onChange,
    placeholder,
    disabled,
    value,
    id,
    name
}: Props) {
    return (
        <input
            id={id}
            name={name}
            hidden={hidden}
            type={type}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            className={cn(geoActionBase({ variant, size }), className)}
        />
    );
}
