import { IconCalendarClock, IconPlus } from '@tabler/icons-react'
import { GeoButton } from '../ui/geo-button'

function QuickActionFeed() {
    return (
        <div className="p-4 space-y-4">
            <GeoButton className='w-full'>
                <IconPlus className='w-5 h-5' />
                Add New Client
            </GeoButton>
            <GeoButton className='w-full'>
                <IconCalendarClock className='w-5 h-5' />
                Schedule Visit
            </GeoButton>
        </div>
    )
}

export default QuickActionFeed