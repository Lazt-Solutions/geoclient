import { ReactNode } from 'react'

interface GeoCardProps {
    title: string
    description?: string
    children: ReactNode
}

export function GeoCard({ title, description, children }: GeoCardProps) {
    return (
        <article className="rounded-xl shadow-sm border border-muted text-card-foreground overflow-hidden">
            {/* Header */}
            <header className="px-6 py-4 border-b border-muted bg-card">
                <h2 className="text-lg font-semibold">{title}</h2>
                {description && (
                    <p className="text-sm text-muted-foreground">{description}</p>
                )}
            </header>

            {/* Body */}
            <div className="p-6">{children}</div>
        </article>
    )
}
