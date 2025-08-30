import { IconAlertTriangleFilled, IconReload } from '@tabler/icons-react'
import { GeoActionLink } from './GeoActionLink'

type Props = {
    message?: string
}

function GeoPageError({ message = "We're having trouble connecting to our servers. Please check your internet connection and try again." }: Props) {
    return (
        <section className="col-span-full py-10">
            <div className="grid gap-6 justify-items-center w-container">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                    <IconAlertTriangleFilled className="w-10 h-10 text-red-600" />
                </div>

                <div className="space-y-4 text-center">
                    <h3 className="text-lg font-semibold">Unable to Load Data</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {message}
                    </p>
                </div>
                <GeoActionLink
                    variant='destructive'
                    href='/'
                >
                    <IconReload /> Go back to dashboard
                </GeoActionLink>
            </div>
        </section>
    )
}

export default GeoPageError