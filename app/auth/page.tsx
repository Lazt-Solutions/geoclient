import { AuthCard } from '@/components/auth/AuthCard'
import { AuthFooter } from '@/components/auth/AuthFooter'
import { AuthHeader } from '@/components/auth/AuthHeader'


function page() {
    return (
        <section className="col-span-full py-10">
            <div className="grid gap-4 w-container">
                <AuthHeader />
                <AuthCard />
                <AuthFooter />
            </div>
        </section >
    )
}

export default page