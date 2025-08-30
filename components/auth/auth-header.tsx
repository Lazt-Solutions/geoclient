import GeoLogo from "../ui/icons/geo-logo";

export function AuthHeader() {
    return (
        <section className="text-center grid gap-4">
            <h1 className="w-full text-3xl font-bold flex gap-4 items-center justify-center">
                <GeoLogo className="fill-primary text-gray-100" />
                GeoClient
            </h1>
            <p className="text-muted-foreground text-lg">
                Manage clients, schedule visits, track locations.
            </p>
        </section>
    )
}
