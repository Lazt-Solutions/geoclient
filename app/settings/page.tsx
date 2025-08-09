"use client"

import PageState from "@/components/PageState";
import AccountInformation from "@/components/settings/AccountInformation";
import { useProfile } from "@/hooks/useProfile"


function Settings() {
    const { isLoading, data: profile, isError } = useProfile();

    console.log({ profile, isLoading });

    return (
        <PageState isLoading={isLoading} isError={isError}>
            <section className="col-span-full py-10">
                <div className="grid gap-10 w-container">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Settings</h2>
                        <p className="text-muted-foreground">Manage your account and application preferences</p>
                    </div>
                    {profile && <AccountInformation profile={profile} />}
                </div>
            </section>
        </PageState>
    )
}

export default Settings