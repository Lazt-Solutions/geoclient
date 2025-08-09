import { AuthCard } from '@/components/auth/AuthCard'
import { AuthFooter } from '@/components/auth/AuthFooter'
import { AuthHeader } from '@/components/auth/AuthHeader'


function page() {
    return (
        <>
            <AuthHeader />
            <AuthCard />
            <AuthFooter />
        </>
    )
}

export default page