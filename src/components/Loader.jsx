import React from 'react'
import { useLoader } from './LoaderContext'

const Loader = () => {
    const { isLoading } = useLoader()

    return isLoading ? (
        <div className="fixed inset-0 bg-white bg-opacity-50 z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-sky-700 border-t-transparent"></div>
        </div>
    ) : null
}

export default Loader