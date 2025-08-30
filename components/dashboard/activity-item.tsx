export type Props = {
    iconBg: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    time: string;
}

function ActivityItem({ iconBg, icon, title, subtitle, time }: Props) {
    return (
        <div className="flex items-center gap-4 p-4">
            <div className="flex items-center justify-center flex-shrink-0">
                <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center`}>
                    {icon}
                </div>
            </div>
            <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
                <p className="text-xs text-muted-foreground">{time}</p>
            </div>
        </div>
    );
}

export default ActivityItem;
