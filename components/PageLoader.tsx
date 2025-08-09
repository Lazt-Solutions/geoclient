import { IconLoader } from '@tabler/icons-react'

type Props = {
    message?: string
}

function PageLoader({ message = "Please wait while we fetch the data..." }: Props) {
    return (
        <section className="col-span-full py-10">
            <div className="grid gap-6 w-container text-center">
                <div className="flex justify-center w-full">
                    <IconLoader className="animate-spin w-10 h-10 text-primary" />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Loading your data...</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                        {message}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PageLoader