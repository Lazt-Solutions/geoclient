'use client'

import Sidebar from "../sidebar/sidebar"
import { GeoActionLink } from "./geo-action-link"
import GeoLogo from "./icons/geo-logo"


export function GeoHeader() {
    return (
        <header className="bg-card border-b border-muted py-2 col-span-full">
            <div className="w-container flex items-center justify-between gap-4">
                <GeoActionLink
                    variant='ghost'
                    size='icon-md'
                    href="/dashboard"
                >
                    <GeoLogo className="fill-primary text-white w-8 h-8" />
                </GeoActionLink>
                <Sidebar />
            </div>
        </header>
    )
}
