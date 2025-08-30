import React from 'react'

type Props = {
    title: string;
    children: React.ReactNode;
}

function DashboardCard({ title, children }: Props) {
    return (
        <div className="bg-card rounded-lg shadow-sm border border-muted">
            <div className="p-4 border-b border-muted">
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            {children}
        </div>
    )
}

export default DashboardCard