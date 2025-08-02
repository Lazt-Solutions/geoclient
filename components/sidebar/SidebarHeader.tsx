'use client'

import { IconX } from '@tabler/icons-react'
import { GeoButton } from '../ui/GeoButton'
import GeoLogo from '../ui/icons/GeoLogo'

type Props = {
    onClose: () => void
}

export default function SidebarHeader({ onClose }: Props) {
    return (
        <div className="flex items-center justify-between p-6 border-b border-muted">
            <h1 className="w-full text-xl font-bold flex gap-4 items-center justify-center">
                <GeoLogo className="fill-primary text-gray-100 w-8 h-8" />
                GeoClient
            </h1>
            <GeoButton
                variant="ghost"
                size="icon-sm"
                onClick={onClose}
                className="lg:hidden"
                aria-label="Close navigation menu"
            >
                <IconX className="w-5 h-5" />
            </GeoButton>
        </div>
    )
}
