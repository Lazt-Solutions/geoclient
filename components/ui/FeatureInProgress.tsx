"use client"

import { IconSettings } from '@tabler/icons-react';

function FeatureInProgress() {
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
            </div>
        </section>
    )
}

export default FeatureInProgress