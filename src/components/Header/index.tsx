import { Darktheme, LightTheme } from '@/styles/themes'
import {
  Button,
  Heading,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import { Moon, Sun } from 'phosphor-react'

export function HeaderComponent() {
  const { Logo, colors } = useColorModeValue(Darktheme, LightTheme)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Heading
      height={50}
      width="auto"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Image src={Logo} alt="" width={81} height={20} />
      <Button
        onClick={toggleColorMode}
        bg={colors.gray[100]}
        height={6}
        width={2}
        position="absolute"
        top={3}
        right={15}
      >
        {colorMode === 'dark' ? (
          <Icon as={Sun} weight="fill" />
        ) : (
          <Icon as={Moon} weight="fill" />
        )}
      </Button>
    </Heading>
  )
}
