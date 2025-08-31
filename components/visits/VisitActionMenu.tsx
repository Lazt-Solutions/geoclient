import { IconCheck, IconDotsVertical, IconEdit, IconTrashFilled } from "@tabler/icons-react";
import { GeoButton } from "../ui/GeoButton";
import { useState } from "react";
import { useClickOutside } from "@/hooks/utils/useClickOutside";

type Props = {
    onEdit?: () => void;
    onMarkCompleted?: () => void;
    onDelete?: () => void;
}

function VisitActionMenu({
    onEdit,
    onMarkCompleted,
    onDelete,
}: Props) {

    const [open, setOpen] = useState(false);
    const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));

    return (
        <div className="relative" ref={ref}>
            <GeoButton variant="ghost" size="icon-sm" onClick={() => setOpen(!open)}>
                <IconDotsVertical className="w-5 h-5" />
            </GeoButton>

            {open && (
                <div className="absolute mt-2 right-0 bg-card w-48 rounded-lg shadow-lg border border-muted z-10 overflow-hidden">
                    <GeoButton variant="secondary" size="sm" className="w-full text-left rounded-none" onClick={onEdit}>
                        <IconEdit className="w-4 h-4" />
                        Edit Visit
                    </GeoButton>
                    <GeoButton variant="primary" size="sm" className="w-full text-left rounded-none" onClick={onMarkCompleted}>
                        <IconCheck className="w-4 h-4" />
                        Mark Completed
                    </GeoButton>
                    <GeoButton variant="destructive" size="sm" className="w-full text-left rounded-none" onClick={onDelete}>
                        <IconTrashFilled className="w-4 h-4" />
                        Delete
                    </GeoButton>
                </div>
            )}
        </div>
    );
}

export default VisitActionMenu;