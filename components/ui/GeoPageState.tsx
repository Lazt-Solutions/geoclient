import React from 'react'
import GeoPageError from './GeoPageError'
import GeoPageLoader from './GeoPageLoader'


type Props = {
    loadingMessage?: string
    errorMessage?: string
    isLoading: boolean
    isError: boolean
    children: React.ReactNode
}

function GeoPageState({ loadingMessage, errorMessage, isLoading, isError, children }: Props) {

    if (isLoading) return (<GeoPageLoader message={loadingMessage} />);

    if (isError) return (<GeoPageError message={errorMessage} />);

    return (
        <>
            {children}
        </>
    )
}

export default GeoPageState