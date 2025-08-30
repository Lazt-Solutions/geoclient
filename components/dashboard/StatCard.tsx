import React from 'react';

interface Props {
    label: string;
    value: React.ReactNode;
    icon: React.ReactNode;
}

function StatCard({ label, value, icon }: Props) {
    return (
        <div className="bg-card rounded-lg shadow-sm p-6 border border-muted">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                        {icon}
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    <p className="text-2xl font-bold">{value}</p>
                </div>
            </div>
        </div>
    );
}
export default StatCard;
