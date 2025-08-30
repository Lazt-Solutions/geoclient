import { IconLoader } from '@tabler/icons-react'
import React from 'react'

function GeoElementLoader() {
    return (
        <div className="flex justify-center w-full">
            <IconLoader className="animate-spin w-10 h-10 text-primary" />
        </div>
    )
}

export default GeoElementLoader