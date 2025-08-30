"use client"

import { GeoButton } from '@/components/ui/GeoButton';
import GeoPageState from '@/components/ui/GeoPageState';
import VisitList from '@/components/visits/VisitList';
import VisitsEmpty from '@/components/visits/VisitsEmpty';
import VisitsFilterBar from '@/components/visits/VisitsFilterBar';
import useSearch from '@/hooks/utils/useSearch';
import { useVisitsByStatus } from '@/hooks/visits/useVisitsByStatus';
import { VisitFilterStatus } from '@/lib/types/visit.types';
import { IconPlus } from '@tabler/icons-react';
import { useMemo, useState } from 'react';


function Visits() {
    const { all, overdue, upcoming, completed, isLoading, isError } = useVisitsByStatus();
    const { searchTerm, handleSearch, debouncedSearchTerm } = useSearch();
    const [statusFilter, setStatusFilter] = useState<VisitFilterStatus>("all");

    const visitsByStatus = useMemo(
        () => ({ all, overdue, upcoming, completed }),
        [all, overdue, upcoming, completed]
    );

    const currentVisits = useMemo(() => {
        const visits = visitsByStatus[statusFilter] ?? [];
        if (!debouncedSearchTerm) return visits;

        return visits.filter(({ client, notes }) =>
            client.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            (notes?.toLowerCase() ?? "").includes(debouncedSearchTerm.toLowerCase())
        );
    }, [debouncedSearchTerm, statusFilter, visitsByStatus]);

    return (
        <GeoPageState
            isLoading={isLoading}
            isError={isError}
            errorMessage="Failed to load visits"
        >
            <header className="grid gap-6 sm:grid-cols-[1fr_auto] items-center">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Schedule Visits ({currentVisits.length})
                    </h2>
                    <p className="text-muted-foreground">
                        Manage your client visits and appointments
                    </p>
                </div>
                <GeoButton variant="secondary">
                    <IconPlus className="w-5 h-5" />
                    New Visit
                </GeoButton>
            </header>

            <VisitsFilterBar
                onSearch={handleSearch}
                onStatusChange={setStatusFilter}
                searchTerm={searchTerm}
            />

            {currentVisits.length > 0 ? (
                <VisitList visits={currentVisits} />
            ) : (
                <VisitsEmpty status={statusFilter} />
            )}
        </GeoPageState>
    );
}


export default Visits;