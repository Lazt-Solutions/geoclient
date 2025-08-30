import { useMemo } from "react";
import { useListVisits } from "./useListVisits";

export function useVisitsByStatus() {
    const {
        data: visits,
        isLoading,
        isError,
        error,
        isFetching,
    } = useListVisits();

    const { all, upcoming, overdue, completed } = useMemo(() => {
        if (!visits)
            return { all: [], upcoming: [], overdue: [], completed: [] };

        const now = new Date();

        const upcoming = visits.filter((v) => new Date(v.scheduled_at) > now);

        const overdue = visits.filter(
            (v) => new Date(v.scheduled_at) <= now && v.completed_at === null
        );

        const completed = visits.filter((v) => v.completed_at !== null);

        return {
            all: visits,
            upcoming,
            overdue,
            completed,
        };
    }, [visits]);

    return {
        all,
        upcoming,
        overdue,
        completed,
        isLoading,
        isError,
        error,
        isFetching,
    };
}
