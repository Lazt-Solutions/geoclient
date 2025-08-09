'use client'

import { IconDotsVertical } from '@tabler/icons-react'
import Image from 'next/image'
import { GeoButton } from '../ui/GeoButton'
import { useProfile } from '@/hooks/useProfile';

export default function SidebarFooter() {
    const { data: profile } = useProfile();


    return (
        <div className="border-t border-muted p-4 flex items-center space-x-3">
            <div className="relative w-8 h-8">
                <Image
                    src={profile?.image_url || "https://placehold.co/96x96"}
                    alt="Profile photo"
                    width={96}
                    height={96}
                    sizes="(24rem) 96px, (48rem) 96px, 96px"
                    className="object-cover rounded-full"
                />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary-foreground truncate">{profile?.display_name || 'N/A'}</p>
                <p className="text-xs text-muted-foreground truncate">{profile?.email || 'N/A'}</p>
            </div>
            <GeoButton
                variant="ghost"
                size="icon-sm"
                aria-label="User menu"
            >
                <IconDotsVertical className="w-4 h-4" />
            </GeoButton>
        </div>
    )
}
