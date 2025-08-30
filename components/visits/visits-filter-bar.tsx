import { VisitFilterStatus } from '@/lib/types/visit.types';
import { IconSearch } from '@tabler/icons-react';
import { GeoInput } from '../ui/geo-input';
import { GeoSelect } from '../ui/geo-select';

type Props = {
    searchTerm: string;
    onSearch: (value: string) => void;
    onStatusChange: (value: VisitFilterStatus) => void;
}

function VisitsFilterBar({ searchTerm, onSearch, onStatusChange }: Props) {
    return (
        <div className="grid sm:grid-cols-[1fr_auto] items-center gap-4">
            {/* Search Input */}
            <div className="flex-1">
                <label htmlFor="search" className="sr-only">Search visits</label>
                <div className="relative">
                    <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground" />
                    <GeoInput
                        variant='ghost'
                        id="search"
                        name="search"
                        value={searchTerm}
                        className='w-full pl-10 border border-muted'
                        placeholder="Search by client or notes..."
                        onChange={(value) => onSearch(value)}
                    />
                </div>
            </div>

            {/* Status Filter */}
            <div className="h-full">
                <GeoSelect
                    id="status"
                    name="status"
                    options={[
                        { value: "all", label: "All Visits" },
                        { value: "upcoming", label: "Upcoming" },
                        { value: "completed", label: "Completed" },
                        { value: "overdue", label: "Overdue" },
                    ]}
                    onChange={(value) => onStatusChange(value as VisitFilterStatus)}
                    className='w-full h-full'
                />
            </div>
        </div>
    );
};

export default VisitsFilterBar;
