"use client"

import AccountInformation from "@/components/settings/account-information";
import GeoPageState from "@/components/ui/geo-page-state";
import { useProfile } from "@/hooks/users/useProfile";


function SettingsPage() {
    const { isLoading, data: profile, isError } = useProfile();

    return (
        <GeoPageState isLoading={isLoading} isError={isError || !profile} errorMessage="Failed to load profile">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Settings</h2>
                <p className="text-muted-foreground">Manage your account and application preferences</p>
            </div>
            {profile && <AccountInformation profile={profile} />}
        </GeoPageState>
    )
}

export default SettingsPage