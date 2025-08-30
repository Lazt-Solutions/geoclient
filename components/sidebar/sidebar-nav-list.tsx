'use client'

import {
    IconCalendar,
    IconCompassFilled,
    IconLocation,
    IconRoute,
    IconSettings,
    IconUsers
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import SidebarNavItem from './sidebar-nav-item';

const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: IconCompassFilled },
    { href: '/clients', label: 'Clients', icon: IconUsers, badge: 156 },
    { href: '/visits', label: 'Visits', icon: IconCalendar },
    { href: '/routes', label: 'Routes', icon: IconRoute },
    { href: '/map', label: 'Map View', icon: IconLocation },
    { href: '/settings', label: 'Settings', icon: IconSettings },
]

type Props = {
    onItemClick?: () => void
}

export default function SidebarNavList({ onItemClick }: Props) {
    const pathname = usePathname();
    return (
        <ul className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
                <SidebarNavItem
                    key={item.href}
                    {...item}
                    active={pathname === item.href}
                    onClick={onItemClick}
                />
            ))}
        </ul>
    )
}
