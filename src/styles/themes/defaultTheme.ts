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
  colors: {
    orange: {
      '500': '#FFBA08',
    },
    white: '#fff',
    black: '#000',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: (props: themeProps) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#F5F8FA' : '#47585B',
      },
    }),
  },
})
