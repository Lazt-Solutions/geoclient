
'use client'

import { Icon } from '@tabler/icons-react'
import { GeoActionLink } from '../ui/GeoActionLink'
import { cn } from '@/lib/utils/cn'

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
                    active && 'bg-primary hover:bg-primary/90 text-white'
                )}
                onClick={onClick}
            >
                <div className="flex gap-4 items-center flex-1">
                    <Icon className="w-5 h-5" />
                    {label}
                </div>
                {badge && (
                    <span className="ml-auto text-xs font-medium bg-primary text-white rounded-full px-2 py-0.5">
                        {badge}
                    </span>
                )}
            </GeoActionLink>
        </li>
    )
}
