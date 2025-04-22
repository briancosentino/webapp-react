import { createContext, useContext, useState } from "react";
const LoaderContext = createContext()

function LoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoaderContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </LoaderContext.Provider>
    )
}

function useLoader() {
    const context = useContext(LoaderContext)
    return context
}

export { LoaderProvider, useLoader }