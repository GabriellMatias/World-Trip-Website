import { Darktheme, LightTheme } from '@/styles/themes'
import {
  Button,
  Heading,
  Icon,
  useColorMode,
  useColorModeValue,
  Image,
  Box,
} from '@chakra-ui/react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft, Moon, Sun } from 'phosphor-react'

export function HeaderComponent() {
  const { Logo, colors } = useColorModeValue(Darktheme, LightTheme)
  const { colorMode, toggleColorMode } = useColorMode()
  const { asPath } = useRouter()
  const isHomePage = asPath !== '/'
  return (
    <Heading
      h={['50px', '100px']}
      width="auto"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={'0 4rem'}
    >
      {isHomePage ? (
        <Link href="/">
          <Icon
            as={ArrowLeft}
            fontSize={[20, 40]}
            justifySelf="start"
            color={colors.gray[200]}
          />
        </Link>
      ) : (
        <Box />
      )}
      <Link href={'/'}>
        <Image src={Logo.src} alt="" width={['81px', '184px']} height={20} />
      </Link>
      <Button
        onClick={toggleColorMode}
        bg={colors.gray[100]}
        height={[6, 10]}
        width={[2, 18]}
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
