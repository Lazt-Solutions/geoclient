import { Profile } from '@/types/profile'
import { IconCalendarFilled, IconIdBadge2, IconMailFilled, IconUserFilled } from '@tabler/icons-react'
import Image from 'next/image'
import GeoInfoCard from '../ui/GeoInfoCard'
import SettingsInfoItem from './SettingsInfoItem'


type Props = {
    profile: Profile
}

function AccountInformation({ profile }: Props) {
    return (
        <GeoInfoCard
            title="Account information"
            description="Your account details and profile information."
        >
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0">
                    <Image
                        src={profile.image_url || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23e5e7eb'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%239ca3af'%3E96x96%3C/text%3E%3C/svg%3E"}
                        alt={`Profile picture of ${profile.display_name}`}
                        width={96}
                        height={96}
                        sizes="(24rem) 96px, (48rem) 96px, 96px"
                        className="w-24 h-24 rounded-full object-cover border-6 border-card shadow-lg"
                    />
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SettingsInfoItem label="Full Name" icon={<IconUserFilled className="w-4 h-4 shrink-0" />} value={profile.display_name ?? 'N/A'} />
                        <SettingsInfoItem label="Email Address" icon={<IconMailFilled className="w-4 h-4 shrink-0" />} value={profile.email ?? 'N/A'} />
                        <SettingsInfoItem label="Role" icon={<IconIdBadge2 className="w-4 h-4 shrink-0" />} value="N/A" />
                        <SettingsInfoItem label="Member Since" icon={<IconCalendarFilled className="w-4 h-4 shrink-0" />} value={profile.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'} />
                    </div>
                </div>
            </div>
        </GeoInfoCard>
    )
}

export default AccountInformation