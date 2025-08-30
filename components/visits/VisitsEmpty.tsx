import { VisitFilterStatus } from "@/lib/types/visit.types";
import { IconCalendar } from "@tabler/icons-react";

interface VisitsEmptyProps {
    status: VisitFilterStatus;
    className?: string;
}

const emptyMessages: Record<VisitFilterStatus, { title: string; description: string }> = {
    all: {
        title: "No visits found",
        description: "You haven't scheduled any client visits yet.",
    },
    overdue: {
        title: "No overdue visits",
        description: "Great job! You're up to date with all client visits.",
    },
    upcoming: {
        title: "No upcoming visits",
        description: "You don't have any scheduled visits ahead.",
    },
    completed: {
        title: "No completed visits",
        description: "Looks like you haven't completed any visits yet.",
    },
}


function VisitsEmpty({ className, status }: VisitsEmptyProps) {
    const { title, description } = emptyMessages[status];

    return (
        <div className={`bg-card space-y-6 p-10 rounded-lg shadow-sm border border-muted text-center ${className ?? ''}`}>
            <div className="space-y-4">
                <IconCalendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="text-lg font-medium text-card-foreground">{title}</h3>
                <p className="text-muted-foreground">{description}</p>

            </div>
        </div>
    );
};

export default VisitsEmpty;
