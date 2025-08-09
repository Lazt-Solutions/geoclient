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
                        src={profile.image_url || "https://placehold.co/96x96"}
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