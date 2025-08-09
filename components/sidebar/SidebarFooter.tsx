'use client'

import { useProfile } from '@/hooks/useProfile';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { Profile } from '@/types/profile.types';
import { IconLogout2 } from '@tabler/icons-react';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GeoButton } from '../ui/GeoButton';
import GeoElementLoader from '../ui/GeoElementLoader';

export default function SidebarFooter() {
    const { data: profile, isLoading } = useProfile() as { data: Profile | null, isLoading: boolean };
    const router = useRouter();
    const queryClient = useQueryClient();


    if (!profile) return null;
    if (isLoading) return (<GeoElementLoader />);

    const signOut = async () => {
        const supabase = supabaseBrowser();
        await supabase.auth.signOut();
        queryClient.clear();
        router.refresh();
    }


    return (
        <div className="border-t border-muted p-4 flex items-center space-x-3">
            <div className="relative w-8 h-8">
                <Image
                    src={
                        profile?.image_url ||
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23e5e7eb'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%239ca3af'%3E96x96%3C/text%3E%3C/svg%3E"
                    }
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
                variant="destructive"
                size="icon-sm"
                aria-label="User menu"
                onClick={signOut}
            >
                <IconLogout2 className="w-5 h-5" />
            </GeoButton>
        </div>
    )
}
