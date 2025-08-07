"use client"

import { supabaseBrowser } from '@/lib/supabase/browser';
import { IconLogout2, IconSettings } from '@tabler/icons-react';
import { redirect } from 'next/navigation';
import { GeoButton } from './GeoButton';

function FeatureInProgress() {
    const signOut = async () => {
        const supabase = supabaseBrowser();
        await supabase.auth.signOut()

        redirect("/auth")
    }

    return (
        <section className="col-span-full py-10">
            <div className="grid gap-6 place-items-center text-center w-container">
                {/* Icon container */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full">
                    {/* Construction/Tools icon */}
                    <IconSettings className='h-8 w-8' />
                </div>
                {/* Heading */}
                <h3 className="text-xl font-semibold">
                    Feature Coming Soon
                </h3>
                {/* Description */}
                <p className="text-muted-foreground max-w-md mx-auto">
                    We&apos;re working hard to bring you this feature. It will be available in an upcoming update to help you manage your clients even better.
                </p>
                {/* Status badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                    In Development
                </div>
                <GeoButton variant='destructive' onClick={signOut}>
                    <IconLogout2 />
                    Logout
                </GeoButton>
            </div>
        </section>
    )
}

export default FeatureInProgress