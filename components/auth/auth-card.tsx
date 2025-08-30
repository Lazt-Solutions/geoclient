"use client"
import { supabaseBrowser } from '@/lib/supabase/browser'
import {
    IconBrandGithubFilled,
    IconBrandGoogleFilled,
} from '@tabler/icons-react'
import { GeoButton } from '../ui/geo-button'
import { GeoTextLink } from '../ui/geo-text-link'

type AuthProvider = "github" | "google"

export function AuthCard() {
    const handleLoginWithOAuth = async (provider: AuthProvider) => {

        const supabase = supabaseBrowser();

        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        })
    }

    return (
        <section className="max-w-md w-full mx-auto border-2 rounded-2xl shadow-lg p-8 grid gap-10">
            {/* Welcome */}
            <div className="text-center grid gap-4">
                <h2 className="text-2xl font-semibold">Welcome back</h2>
                <p className="text-muted-foreground">
                    Sign in to access your client dashboard
                </p>
            </div>

            {/* Login buttons */}
            <div className="grid gap-4">
                <GeoButton onClick={() => handleLoginWithOAuth("google")} variant="primary" className="w-full" size="lg">
                    <IconBrandGoogleFilled className="w-5 h-5" />
                    <span className="text-sm md:text-base font-medium">Sign in with Google</span>
                </GeoButton>

                <GeoButton onClick={() => handleLoginWithOAuth("github")} variant="secondary" className="w-full" size="lg">
                    <IconBrandGithubFilled className="w-5 h-5" />
                    <span className="text-sm md:text-base font-medium">Sign in with GitHub</span>
                </GeoButton>
            </div>

            {/* Divider */}
            <div className="relative flex gap-4 items-center">
                <div className="w-full border-t border-muted-foreground" />
                <span className="px-4 bg-background text-muted-foreground">or</span>
                <div className="w-full border-t border-muted-foreground" />
            </div>

            {/* Support */}
            <div className="text-center grid justify-items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    Need help accessing your account?
                </p>
                <GeoTextLink href="/support" className="text-sm">
                    Contact support
                </GeoTextLink>
            </div>
        </section>
    )
}
