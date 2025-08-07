'use client'

import { IconX } from '@tabler/icons-react'
import { GeoButton } from '../ui/GeoButton'
import GeoLogo from '../ui/icons/GeoLogo'

type Props = {
    onClose: () => void
}

export default function SidebarHeader({ onClose }: Props) {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-b border-muted">
            <h1 className="w-full text-xl font-bold flex gap-4 items-center justify-center">
                <GeoLogo className="fill-primary text-gray-100 w-8 h-8" />
                GeoClient
            </h1>
            <GeoButton
                variant="ghost"
                size="icon-md"
                onClick={onClose}
                className="lg:hidden border border-muted"
                aria-label="Close navigation menu"
            >
                <IconX className="w-4 h-4" />
            </GeoButton>
        </div>
    )
}
