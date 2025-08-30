import { formatRelativeDate } from "@/lib/utils/format-relative-date";
import VisitActionMenu from "./VisitActionMenu";
import VisitStatusBadge from "./VisitStatusBadge";
import { Visit } from "@/lib/types/visit.types";
import { Client } from "@/lib/types/client.types";

interface Props {
    visit: Visit;
    client: Client;
}

export default function VisitCard({ visit, client }: Props) {
    const [datePrefix, visitTime] = formatRelativeDate(visit.scheduled_at);

    const onEdit = () => {
        console.log("Edit visit:", visit.id);
    };

    const onMarkCompleted = () => {
        console.log("Mark visit as completed:", visit.id);
    };

    const onDelete = () => {
        console.log("Delete visit:", visit.id);
    };

    return (
        <div className="bg-card rounded-lg shadow-sm border border-muted p-4 border-l-4 border-l-primary">
            <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                    <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                        <VisitStatusBadge visit={visit} />
                        <span className="text-sm text-muted-foreground">
                            {datePrefix} - {visitTime}
                        </span>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-semibold text-card-foreground">{client?.name || visit.client_id}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{visit.notes}</p>
                    </div>
                </div>
                <VisitActionMenu
                    onEdit={onEdit}
                    onMarkCompleted={onMarkCompleted}
                    onDelete={onDelete}
                />
            </div>
        </div>
    );
}