import { HeaderComponent } from '@/components/Header'
import { Darktheme, LightTheme } from '@/styles/themes'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Icon,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import { CircleHalf } from 'phosphor-react'

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
          <Box
            width="16rem"
            height={'17rem'}
            borderRadius={4}
            border={'1px solid orange'}
          >
            <Image
              boxSizing="border-box"
              alt=""
              src="/Europe.png"
              minH={'10.8rem'}
              borderRadius="4px 4px 0 0"
            />
            <Flex padding="0 1.5rem">
              <Text
                marginTop={'1.2rem'}
                marginBottom={'1.6rem'}
                gap="12px"
                display={'flex'}
                flexDirection={'column'}
              >
                <strong>Londres</strong>
                <span>Reino Unido</span>
              </Text>
              <Box
                display={'flex'}
                flex={1}
                alignItems="center"
                justifyContent={'center'}
              >
                <Icon as={CircleHalf} />
              </Box>
            </Flex>
          </Box>
          <Box
            width="16rem"
            height={'17rem'}
            borderRadius={4}
            border={'1px solid orange'}
          >
            <Image
              boxSizing="border-box"
              alt=""
              src="/Europe.png"
              minH={'10.8rem'}
              borderRadius="4px 4px 0 0"
            />
            <Flex padding="0 1.5rem">
              <Text
                marginTop={'1.2rem'}
                marginBottom={'1.6rem'}
                gap="12px"
                display={'flex'}
                flexDirection={'column'}
              >
                <strong>Londres</strong>
                <span>Reino Unido</span>
              </Text>
              <Box
                display={'flex'}
                flex={1}
                alignItems="center"
                justifyContent={'center'}
              >
                <Icon as={CircleHalf} />
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  )
}
