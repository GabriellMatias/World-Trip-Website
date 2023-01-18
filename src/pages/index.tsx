import { Darktheme, LightTheme } from '@/styles/themes'
import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = useColorModeValue(Darktheme, LightTheme)
  return (
    <div>
      <Box as="h1" color={'gray.100'}>
        Home Index
      </Box>
      <Button onClick={toggleColorMode} bg={color.colors.gray[100]}>
        Mudar Tema {colorMode === 'light' ? 'dark' : 'light'}
      </Button>
    </div>
  )
}
