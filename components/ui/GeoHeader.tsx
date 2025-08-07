'use client'

import Sidebar from '../sidebar/Sidebar'
import { GeoActionLink } from './GeoActionLink'
import GeoLogo from './icons/GeoLogo'

export function GeoHeader() {
    return (
        <header className="bg-card border-b border-muted py-2 col-span-full">
            <div className="w-container flex items-center justify-between gap-4">
                <GeoActionLink
                    variant='ghost'
                    size='icon-md'
                    href="/"
                >
                    <GeoLogo className="fill-primary text-gray-100 w-8 h-8" />
                </GeoActionLink>
                <Sidebar />
            </div>
        </header>
    )
}
