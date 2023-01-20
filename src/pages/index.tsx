import { Categories } from '@/components/Categories'
import { HeaderComponent } from '@/components/Header'
import { Slides } from '@/components/Slides'
import { Darktheme, LightTheme } from '@/styles/themes'
import { Box, useColorModeValue, Flex, VStack, Text } from '@chakra-ui/react'

export default function Home() {
  const { colors } = useColorModeValue(Darktheme, LightTheme)
  return (
    <Flex flexDirection={'column'} flex={'1'}>
      <HeaderComponent />

      <VStack
        bgImage="url('/Background.png')"
        bgSize={'cover'}
        bgRepeat="no-repeat"
        height={163}
        spacing={8}
      >
        <Box as="div" margin={'1.75rem 1rem'}>
          <Text
            as="h1"
            maxW={238}
            fontWeight={'medium'}
            fontSize={'20px'}
            lineHeight={'30px'}
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            as="h2"
            fontSize={'sm'}
            lineHeight={'21px'}
            color={colors.gray[100]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
          </Text>
        </Box>
      </VStack>

      <Flex flexDirection={'column'} margin={'50px 36px'}>
        <Box
          as="section"
          display={'grid'}
          gridTemplateColumns="1fr 1fr"
          alignItems={'center'}
          gap={'29px'}
          marginBottom={'29px'}
        >
          <Categories title="Vida Noturna" />
          <Categories title="Praia" />
          <Categories title="moderno" />
          <Categories title="Classico" />
        </Box>
        <Categories title="e mais..." />
      </Flex>

      <Box
        as="div"
        display={'flex'}
        alignSelf={'center'}
        justifySelf={'center'}
        height={1}
        width={'60px'}
        border={`1px solid ${colors.gray[200]}`}
        color={colors.gray[200]}
        background={colors.gray[200]}
      />

      <Text
        margin=" 1.5rem 2.4rem"
        textAlign={'center'}
        width="18rem"
        fontWeight={'medium'}
        fontSize="1.25rem"
        lineHeight={'30px'}
        color={colors.gray[200]}
      >
        Vamos nessa? Então escolha seu continente
      </Text>
      <Slides />
    </Flex>
  )
}
