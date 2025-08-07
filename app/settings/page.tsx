import { GeoCard } from "@/components/ui/GeoCard"
import GeoInfoItem from "@/components/ui/GeoInfoItem"
import { IconCalendarFilled, IconIdBadge2, IconMailFilled, IconUserFilled } from "@tabler/icons-react"
import Image from "next/image"

function Settings() {
    return (
        <section className="col-span-full py-10">
            <div className="grid gap-10 w-container">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Settings</h2>
                    <p className="text-muted-foreground">Manage your account and application preferences</p>
                </div>
                <GeoCard
                    title="Account information"
                    description="Your account details and profile information."
                >
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <Image
                                src="https://avatars.githubusercontent.com/u/132369592?v=4"
                                alt="Profile picture of Sarah Johnson"
                                width={80}
                                height={80}
                                className="w-24 h-24 rounded-full object-cover border-6 border-card shadow-lg"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Full Name */}
                                <GeoInfoItem label="Full Name" icon={<IconUserFilled className="w-4 h-4 shrink-0" />} value="Bryan Lazo" />

                                {/* Email */}
                                <GeoInfoItem label="Email Address" icon={<IconMailFilled className="w-4 h-4 shrink-0" />} value="bryan.lazo@geoclient.com" />

                                {/* Role */}
                                <GeoInfoItem label="Role" icon={<IconIdBadge2 className="w-4 h-4 shrink-0" />} value="Software Engineer" />

                                {/* Member Since */}
                                <GeoInfoItem label="Member Since" icon={<IconCalendarFilled className="w-4 h-4 shrink-0" />} value="January 2025" />
                            </div>
                        </div>
                    </div>
                </GeoCard>
            </div>
        </section>
    )
}

export default Settings