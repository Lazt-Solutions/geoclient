"use client"

import PageState from "@/components/PageState";
import AccountInformation from "@/components/settings/AccountInformation";
import { useProfile } from "@/hooks/useProfile"


function SettingsPage() {
    const { isLoading, data: profile, isError } = useProfile();

    return (
        <PageState isLoading={isLoading} isError={isError || !profile} errorMessage="Failed to load profile">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Settings</h2>
                <p className="text-muted-foreground">Manage your account and application preferences</p>
            </div>
            {profile && <AccountInformation profile={profile} />}
        </PageState>
    )
}

export default SettingsPage