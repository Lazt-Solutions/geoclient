'use client'

import { cn } from '@/lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useCallback, useEffect, useState } from 'react'
import { GeoButton } from '../ui/GeoButton'
import SidebarFooter from './SidebarFooter'
import SidebarHeader from './SidebarHeader'
import SidebarNavList from './SidebarNavList'

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
                size="icon-md"
                aria-label="Toggle navigation menu"
                hidden={isSidebarOpen}
                aria-expanded={isSidebarOpen}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 right-4 z-50 lg:hidden bg-card border border-muted shadow-md"
            >
                {isSidebarOpen ? (
                    <IconX className="w-4 h-4 text-primary-foreground" />
                ) : (
                    <IconMenu2 className="w-4 h-4 text-primary-foreground" />
                )}
            </GeoButton>

            {/* Mobile Overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-30 bg-card/60 transition-opacity duration-300 lg:hidden',
                    isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
                onClick={() => setIsSidebarOpen(false)}
                aria-hidden={!isSidebarOpen}
            />

            {/* Sidebar */}
            <nav
                className={cn(
                    'fixed top-0 left-0 z-40 w-full md:w-75 flex flex-col h-screen bg-card border-r border-muted transform transition-transform duration-300 lg:translate-x-0',
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                )}
                role="navigation"
                aria-label="Main navigation"
            >
                <SidebarHeader onClose={() => setIsSidebarOpen(false)} />
                <SidebarNavList onItemClick={() => setIsSidebarOpen(false)} />
                <SidebarFooter />
            </nav>
        </>
    )
}
