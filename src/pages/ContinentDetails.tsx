import { Cities } from '@/components/Cities'
import { HeaderComponent } from '@/components/Header'
import { Darktheme, LightTheme } from '@/styles/themes'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'

export default function ContinentDetails() {
  const { colors } = useColorModeValue(Darktheme, LightTheme)
  return (
    <Flex flexDirection={'column'}>
      <Heading>
        <Head>
          <title>CountryName | WorldTrip</title>
        </Head>
        <HeaderComponent />
      </Heading>
      <Flex
        bgImage="url('/Europe.png')"
        width={'full'}
        height={'9.3rem'}
        alignItems={'center'}
        justifyContent="center"
      >
        Europa
      </Flex>
      <Flex
        flexDirection={'column'}
        marginTop="24px"
        margin={'1.5rem 1rem 3rem 1rem'}
        gap="1rem"
      >
        <Text textAlign={'justify'} lineHeight="1.6rem">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack flex={1} justifyContent={'space-between'}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
          >
            <strong>50</strong>
            <span>paises</span>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
          >
            <strong>60</strong>
            <span>linguas</span>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
          >
            <strong>24</strong>
            <span>cidades +100</span>
          </Box>
        </HStack>
      </Flex>
      <Flex gap={'20px'} flexDirection="column" margin={'0rem 1rem'}>
        <Text
          textAlign={'left'}
          color={colors.gray[200]}
          lineHeight="2.25rem"
          fontSize={'1.5rem'}
          fontWeight="medium"
        >
          Cidades +100
        </Text>

        <Grid gridTemplateColumns={'1fr'} justifyItems="right" gap="20px">
          <Cities />
        </Grid>
      </Flex>
    </Flex>
  )
}
