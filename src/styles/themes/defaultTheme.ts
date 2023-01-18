import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

interface themeProps {
  colorMode: 'dark' | 'light'
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,

  styles: {
    global: (props: themeProps) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'white' : 'black',
      },
    }),
  },
})
