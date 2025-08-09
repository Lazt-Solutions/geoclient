function SettingsInfoItem({
    label,
    icon,
    value,
}: {
    label: string
    icon: React.ReactNode
    value: string
}) {
    return (
        <div className='space-y-1'>
            <span className="block text-sm font-medium text-muted-foreground">{label}</span>
            <div className="flex items-center gap-2 p-3 bg-card rounded-lg border border-muted text-muted-foreground">
                {icon}
                <span className="truncate">{value}</span>
            </div>
        </div>
    )

}

export default SettingsInfoItem