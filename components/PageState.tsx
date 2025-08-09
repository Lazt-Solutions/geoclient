import React from 'react'
import PageLoader from './PageLoader'
import PageError from './PageError'


type Props = {
    loadingMessage?: string
    errorMessage?: string
    isLoading: boolean
    isError: boolean
    children: React.ReactNode
}

function PageState({ loadingMessage, errorMessage, isLoading, isError, children }: Props) {

    if (isLoading) {
        return (
            <PageLoader message={loadingMessage} />
        );
    }

    if (isError) {
        return (
            <PageError message={errorMessage} />
        );
    }

    return (
        <>
            {children}
        </>
    )
}

export default PageState