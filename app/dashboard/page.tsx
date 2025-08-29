"use client"

import DashboardCard from '@/components/dashboard/DashboardCard';
import QuickActionFeed from '@/components/dashboard/QuickActionFeed';
import StatCard from '@/components/dashboard/StatCard';
import GeoPageState from '@/components/ui/GeoPageState';
import { useClients } from '@/hooks/useClients';
import { useProfile } from '@/hooks/useProfile';
import { useVisits } from '@/hooks/useVisits';
import { IconCalendarClock, IconUsersGroup } from '@tabler/icons-react';

function Dashboard() {
    const { isLoading, data: profile, isError } = useProfile();
    const { data: visits } = useVisits();
    const { data: clients } = useClients();

    const upcomingVisits = visits?.filter(visit => new Date(visit.scheduled_at) >= new Date());
    const totalClients = clients?.length || 0;

    return (
        <GeoPageState isLoading={isLoading} isError={isError || !profile} errorMessage="Failed to load profile">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Welcome back!</h2>
                <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your clients today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard label="Total Clients" value={totalClients} icon={<IconUsersGroup className='w-5 h-5 text-card-foreground' />} />
                <StatCard label="Upcoming Visits" value={upcomingVisits?.length ?? 0} icon={<IconCalendarClock className='w-5 h-5 text-card-foreground' />} />
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