import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "@/components/theme"
import { Nav } from "@/components/ui"
import { useEffect, useState } from "react"

export default function App({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div>
            {mounted && (
                <ChakraProvider theme={theme}>
                    <Nav />
                    <Component {...pageProps} />
                </ChakraProvider>
            )}
        </div>
    )
}
