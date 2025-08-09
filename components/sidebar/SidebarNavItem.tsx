
'use client'

const LG_BREAKPOINT = 1024 // Tailwind's lg breakpoint

import { cn } from '@/lib/utils'
import { Icon } from '@tabler/icons-react'
import { GeoActionLink } from '../ui/GeoActionLink'

type Props = {
    href: string
    label: string
    icon: Icon
    badge?: number
    active?: boolean
    onClick?: () => void
}

export default function SidebarNavItem({
    href,
    label,
    icon: Icon,
    badge,
    active,
    onClick
}: Props) {
    return (
        <li>
            <GeoActionLink
                href={href}
                variant="ghost"
                size="md"
                className={cn(
                    'w-full',
                    active && 'bg-primary hover:bg-primary/90'
                )}
                onClick={() => {
                    if (typeof window !== 'undefined' && window.innerWidth < LG_BREAKPOINT) onClick?.()
                }}
            >
                <div className="flex gap-4 items-center flex-1">
                    <Icon className="w-5 h-5" />
                    {label}
                </div>
                {badge && (
                    <span className="ml-auto text-xs font-medium bg-primary rounded-full px-2 py-0.5">
                        {badge}
                    </span>
                )}
            </GeoActionLink>
        </li>
    )
}
