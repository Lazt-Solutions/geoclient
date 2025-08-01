import { GeoTextLink } from '@/components/ui/geo-text-link'

export function AuthFooter() {
    return (
        <footer className="text-center">
            <p className="flex flex-wrap gap-1 justify-center text-sm text-gray-500">
                By signing in, you agree to our
                <GeoTextLink href="/terms-of-services" className="text-sm">
                    Terms of Service
                </GeoTextLink>
                and
                <GeoTextLink href="/privacy-policy" className="text-sm">
                    Privacy Policy
                </GeoTextLink>
            </p>
        </footer>
    )
}
