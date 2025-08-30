import { AuthCard } from "@/components/auth/auth-card"
import { AuthFooter } from "@/components/auth/auth-footer"
import { AuthHeader } from "@/components/auth/auth-header"

function AuthPage() {
    return (
        <>
            <AuthHeader />
            <AuthCard />
            <AuthFooter />
        </>
    )
}

export default AuthPage