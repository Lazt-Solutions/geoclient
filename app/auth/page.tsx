import { AuthCard } from '@/components/auth/AuthCard'
import { AuthFooter } from '@/components/auth/AuthFooter'
import { AuthHeader } from '@/components/auth/AuthHeader'


function page() {
    return (
        <section className="w-full max-w-md grid gap-10">
            <AuthHeader />
            <AuthCard />
            <AuthFooter />
        </section >
    )
}

export default page