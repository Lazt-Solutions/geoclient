'use client'

import {
    IconCalendar,
    IconChartArcs,
    IconCompassFilled,
    IconLocation,
    IconReport,
    IconRoute,
    IconSettings,
    IconUsers
} from '@tabler/icons-react'
import SidebarNavItem from './SidebarNavItem'

const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: IconCompassFilled, active: true },
    { href: '/clients', label: 'Clients', icon: IconUsers, badge: 156 },
    { href: '/visits', label: 'Visits', icon: IconCalendar },
    { href: '/routes', label: 'Routes', icon: IconRoute },
    { href: '/map', label: 'Map View', icon: IconLocation },
    { href: '/reports', label: 'Reports', icon: IconReport },
    { href: '/analytics', label: 'Analytics', icon: IconChartArcs },
    { href: '/settings', label: 'Settings', icon: IconSettings },
]

type Props = {
    onItemClick?: () => void
}

export default function SidebarNavList({ onItemClick }: Props) {
    return (
        <ul className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
                <SidebarNavItem
                    key={item.href}
                    {...item}
                    onClick={onItemClick}
                />
            ))}
        </ul>
    )
}
