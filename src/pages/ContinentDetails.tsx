import { Cities } from '@/components/Cities'
import { ContinentBanner } from '@/components/ContinentBanner'
import { ContinentInfos } from '@/components/ContinentInfos'
import { HeaderComponent } from '@/components/Header'
import { Darktheme, LightTheme } from '@/styles/themes'
import { Flex, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react'
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
        as={'section'}
        direction="column"
        align={'center'}
        justify={'center'}
      >
        <ContinentBanner />
        <Flex maxWidth={'72.5rem'} direction={'column'}>
          <ContinentInfos />
          <Flex
            w="full"
            gap={'20px'}
            flexDirection="column"
            margin={'0rem 1rem'}
          >
            <Text
              textAlign={'left'}
              color={colors.gray[200]}
              lineHeight={['2.25rem', '3.375rem']}
              fontSize={['1.5rem', '2.25rem']}
              fontWeight="medium"
            >
              Cidades +100
            </Text>

            <Grid
              gridTemplateColumns={['1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}
              justifyItems="right"
              gap="20px"
            >
              <Cities />
              <Cities />
              <Cities />
              <Cities />
              <Cities />
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
