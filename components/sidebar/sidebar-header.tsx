'use client'

import { IconX } from '@tabler/icons-react'
import GeoLogo from '../ui/icons/geo-logo'
import { GeoButton } from '../ui/geo-button'

type Props = {
    onClose: () => void
}

export default function SidebarHeader({ onClose }: Props) {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-b border-muted">
            <h1 className="w-full text-xl text-foreground font-bold flex gap-4 items-center justify-center">
                <GeoLogo className="fill-primary text-white w-8 h-8" />
                GeoClient
            </h1>
            <GeoButton
                variant="ghost"
                size="icon-md"
                onClick={onClose}
                className="lg:hidden border border-muted shrink-0"
                aria-label="Close navigation menu"
            >
                <IconX className="w-4 h-4" />
            </GeoButton>
        </div>
    )
}
