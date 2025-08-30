import { VisitWithClient } from '@/lib/types/visit.types';
import VisitCard from './visit-card';

interface Props {
    visits: VisitWithClient[];
}

function VisitList({ visits }: Props) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {visits.map((visit) => (
                <VisitCard key={visit.id} visit={visit} client={visit.client} />
            ))}
        </div>
    )
}

export default VisitList