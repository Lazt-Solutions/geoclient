'use client'

import { cn } from '@/lib/utils'
import { IconCalendar, IconChartArcs, IconCompassFilled, IconDotsVertical, IconLocation, IconMenu, IconReport, IconRoute, IconSettings, IconUsers, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { GeoActionLink } from './ui/GeoActionLink'
import { GeoButton } from './ui/GeoButton'
import GeoLogo from './ui/icons/GeoLogo'

// Navigation items
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


export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    // Close sidebar on Escape or resize
    const handleGlobalEvents = useCallback((e: KeyboardEvent | UIEvent) => {
        if (e instanceof KeyboardEvent && e.key === 'Escape') setIsSidebarOpen(false)
        if (e instanceof UIEvent && window.innerWidth >= 1024) setIsSidebarOpen(false)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? 'hidden' : ''
        document.addEventListener('keydown', handleGlobalEvents)
        window.addEventListener('resize', handleGlobalEvents)
        return () => {
            document.removeEventListener('keydown', handleGlobalEvents)
            window.removeEventListener('resize', handleGlobalEvents)
        }
    }, [isSidebarOpen, handleGlobalEvents])

    return (
        <>
            {/* Mobile Menu Button */}
            <GeoButton
                variant="ghost"
                size="icon-sm"
                aria-label="Toggle navigation menu"
                hidden={isSidebarOpen}
                aria-expanded={isSidebarOpen}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 left-4 z-50 lg:hidden bg-card border border-muted shadow-md"
            >
                {isSidebarOpen ? (
                    <IconX className="w-4 h-4 text-primary-foreground" />
                ) : (
                    <IconMenu className="w-4 h-4 text-primary-foreground" />
                )}
            </GeoButton>

            {/* Mobile Overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden',
                    isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
                onClick={() => setIsSidebarOpen(false)}
                aria-hidden={!isSidebarOpen}
            />

            {/* Sidebar Navigation */}
            <nav
                className={cn(
                    'fixed top-0 left-0 z-40 w-64 flex flex-col h-screen bg-card border-r border-muted shadow-sm transform transition-transform duration-300 lg:translate-x-0',
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                )}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-muted">
                    <div className="flex items-center space-x-3">
                        <h1 className="w-full text-xl font-bold flex gap-4 items-center justify-center">
                            <GeoLogo className="fill-primary text-gray-100 w-8 h-8" />
                            GeoClient
                        </h1>
                    </div>

                    {/* Close Button (Mobile Only) */}
                    <GeoButton
                        variant='ghost'
                        size='icon-sm'
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden"
                        aria-label="Close navigation menu"
                    >
                        <IconX className="w-5 h-5" />
                    </GeoButton>
                </div>

                {/* Nav Items */}
                <ul className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <GeoActionLink
                                href={item.href}
                                variant='ghost'
                                size='sm'
                                className={cn(
                                    'w-full',
                                    item.active && 'bg-primary hover:bg-primary/90'
                                )}
                                onClick={() => {
                                    if (window.innerWidth < 1024) setIsSidebarOpen(false)
                                }}
                            >
                                <div className="flex gap-4 flex-1">
                                    <item.icon className="w-5 h-5" />
                                    {item.label}
                                </div>
                                {item.badge && (
                                    <span className="ml-auto text-xs font-medium bg-primary rounded-full px-2 py-0.5">
                                        {item.badge}
                                    </span>
                                )}
                            </GeoActionLink>
                        </li>
                    ))}
                </ul>

                {/* Footer */}
                <div className="border-t border-muted p-4 flex items-center space-x-3">
                    <div className="relative w-8 h-8">
                        <Image
                            src="https://avatars.githubusercontent.com/u/132369592?v=4"
                            alt="Profile photo"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary-foreground truncate">Bryan Lazo</p>
                        <p className="text-xs text-muted-foreground truncate">Software Developer</p>
                    </div>
                    <GeoButton
                        variant="ghost"
                        size="icon-sm"
                        aria-label="User menu"
                    >
                        <IconDotsVertical className="w-4 h-4" />
                    </GeoButton>
                </div>
            </nav>
        </>
    )
}

