import { theme } from '@/styles/themes/defaultTheme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
