import { AuthCard } from '@/components/auth/auth-card'
import { AuthFooter } from '@/components/auth/auth-footer'
import { AuthHeader } from '@/components/auth/auth-header'


function page() {
    return (
        <main className="w-full max-w-md grid gap-10">
            <AuthHeader />
            <AuthCard />
            <AuthFooter />
        </main >
    )
}

export default page