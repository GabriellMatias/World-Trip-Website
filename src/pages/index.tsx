import { Banner } from '@/components/banner'
import Categories from '@/components/Categories'

import { HeaderComponent } from '@/components/Header'
import { Slides } from '@/components/Slides'
import { Darktheme, LightTheme } from '@/styles/themes'
import { Box, useColorModeValue, Flex, Text } from '@chakra-ui/react'

export default function Home() {
  const { colors } = useColorModeValue(Darktheme, LightTheme)
  return (
    <Flex flexDirection={'column'} flex={'1'}>
      <HeaderComponent />

      <Banner />

      <Flex flexDirection={'column'} margin={'50px 36px'}>
        <Box
          as="section"
          display={'grid'}
          gridTemplateColumns="1fr"
          alignItems={'center'}
          gap={'29px'}
          marginBottom={'29px'}
        >
          <Categories />
        </Box>
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

      <Flex align={'center'} justify="center">
        <Text
          margin=" 1.5rem 2.4rem"
          textAlign={'center'}
          width={['18rem', '52rem']}
          fontWeight={'medium'}
          fontSize={['1.25rem', '2.25rem']}
          lineHeight={['30px', '54px']}
          color={colors.gray[200]}
        >
          Vamos nessa ? <br />
          Então escolha seu continente
        </Text>
      </Flex>
      <Flex>
        <Slides />
      </Flex>
    </Flex>
  )
}
