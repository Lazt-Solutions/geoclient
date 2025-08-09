"use client";

import { GeoActionLink } from "@/components/ui/GeoActionLink";
import { GeoButton } from "@/components/ui/GeoButton";
import { GeoTextLink } from "@/components/ui/GeoTextLink";
import GeoLogo from "@/components/ui/icons/GeoLogo";
import { IconArrowLeft, IconHome } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <section className="w-full max-w-md grid gap-10 text-center">
            <div>
                <h1 className="w-full text-3xl font-bold flex gap-4 items-center justify-center">
                    <GeoLogo className="fill-primary text-primary-foreground w-8 h-8" />
                    GeoClient
                </h1>
            </div>

            <section className="grid gap-4">
                <div className="grid gap-4">
                    <h2 className="text-8xl sm:text-9xl font-bold text-primary" aria-label="Error 404">
                        404
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Page Not Found</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or never existed.
                </p>
            </section>

            <section className="flex flex-col sm:flex-row gap-4 justify-center">
                <GeoActionLink href="/" className="w-full">
                    <IconHome className="w-5 h-5" />
                    Return to Dashboard
                </GeoActionLink>
                <GeoButton
                    variant="secondary"
                    onClick={() => router.back()}
                    className="w-full"
                >
                    <IconArrowLeft className="w-5 h-5" />
                    Go Back
                </GeoButton>
            </section>

            <footer className="grid gap-4 pt-10 border-t border-muted">
                <p className="text-sm text-muted-foreground">Need help? Try these popular sections:</p>
                <nav
                    className="flex flex-wrap justify-center gap-4 text-sm"
                    aria-label="Quick navigation"
                >
                    <GeoTextLink
                        href="/clients"
                    >
                        Clients
                    </GeoTextLink>
                    <GeoTextLink
                        href="/visits"
                    >
                        Visits
                    </GeoTextLink>
                    <GeoTextLink
                        href="/routes"
                    >
                        Routes
                    </GeoTextLink>
                    <GeoTextLink
                        href="/map"
                    >
                        Map View
                    </GeoTextLink>
                </nav>
            </footer>
        </section>
    );
}
