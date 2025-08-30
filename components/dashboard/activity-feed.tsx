import { IconCheck } from '@tabler/icons-react';
import ActivityItem from './activity-item';

const activities = [
    {
        iconBg: 'bg-green-100',
        icon: (
            <IconCheck className='w-4 h-4 text-green-600' />
        ),
        title: 'Visit completed',
        subtitle: 'Acme Corp - Downtown Office',
        time: '2 hours ago',
    }
];


function ActivityFeed() {
    return (<>
        <div className="space-y-4">
            {activities.map((activity, idx) => (
                <ActivityItem key={idx} {...activity} />
            ))}
        </div>
        <div className="p-4 border-t border-muted">
            <button className="w-full text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                View all activity
            </button>
        </div>
    </>
    );
}
export default ActivityFeed;
