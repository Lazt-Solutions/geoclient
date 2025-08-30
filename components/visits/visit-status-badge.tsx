import { Visit } from "@/lib/types/visit.types";
import GeoBadge from "../ui/geo-badge";

function VisitStatusBadge({ visit }: { visit: Visit }) {
    const scheduledDate = new Date(visit.scheduled_at);
    const isUpcoming = !visit.completed_at && scheduledDate > new Date();
    const isOverdue = !visit.completed_at && scheduledDate <= new Date();

    if (visit.completed_at)
        return <GeoBadge variant="primary" size="sm">Completed</GeoBadge>;

    if (isUpcoming)
        return <GeoBadge variant="secondary" size="sm">Upcoming</GeoBadge>;

    if (isOverdue)
        return <GeoBadge variant="destructive" size="sm">Overdue</GeoBadge>;

    return null;
}

export default VisitStatusBadge;