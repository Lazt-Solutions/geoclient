"use client"

import DashboardCard from '@/components/dashboard/dashboard-card';
import QuickActionFeed from '@/components/dashboard/quick-action-feed';
import StatCard from '@/components/dashboard/stat-card';
import GeoPageState from '@/components/ui/geo-page-state';
import { useListClients } from '@/hooks/clients/useListClients';
import { useProfile } from '@/hooks/users/useProfile';
import { useVisitsByStatus } from '@/hooks/visits/useVisitsByStatus';
import { IconCalendarClock, IconUsersGroup } from '@tabler/icons-react';

function Dashboard() {
    const { isLoading, data: profile, isError } = useProfile();
    const { upcoming } = useVisitsByStatus();
    const { data: clients } = useListClients();

    const totalClients = clients?.length || 0;

    return (
        <GeoPageState isLoading={isLoading} isError={isError || !profile} errorMessage="Failed to load profile">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Welcome back!</h2>
                <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your clients today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard label="Total Clients" value={totalClients} icon={<IconUsersGroup className='w-5 h-5 text-card-foreground' />} />
                <StatCard label="Upcoming Visits" value={upcoming.length} icon={<IconCalendarClock className='w-5 h-5 text-card-foreground' />} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard title="Quick Actions">
                    <QuickActionFeed />
                </DashboardCard>
            </div>
        </GeoPageState>
    )
}

export default Dashboard;