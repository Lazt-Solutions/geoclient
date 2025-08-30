import React from 'react'
import GeoPageLoader from './geo-page-loader'
import GeoPageError from './geo-page-error'


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