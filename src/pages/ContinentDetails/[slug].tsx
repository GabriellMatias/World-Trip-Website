import { Cities } from '@/components/Cities'
import { ContinentBanner } from '@/components/ContinentBanner'
import { ContinentInfos } from '@/components/ContinentInfos'
import { HeaderComponent } from '@/components/Header'
import { getPrismicClient } from '@/services/prismic'
import { Darktheme, LightTheme } from '@/styles/themes'
import { Flex, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'

export interface ContinentProps {
  continent: {
    slug: string
    title: string
    description: string
    banner_image: string
    countries: number
    languages: number
    cities: number

    cities100: {
      city: string
      country: string
      tumbnail: string
      flag: string
    }[]
  }
}

export default function ContinentDetails({ continent }: ContinentProps) {
  const { colors } = useColorModeValue(Darktheme, LightTheme)
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <Flex flexDirection={'column'}>
      <Heading>
        <Head>
          <title>{continent.title} | WorldTrip</title>
        </Head>
        <HeaderComponent />
      </Heading>
      <Flex
        as={'section'}
        direction="column"
        align={'center'}
        justify={'center'}
      >
        <ContinentBanner
          continentImage={continent.banner_image}
          title={continent.title}
        />
        <Flex maxWidth={'72.5rem'} direction={'column'}>
          <ContinentInfos
            description={continent.description}
            totalCities={continent.cities}
            totalCountries={continent.countries}
            totalLanguages={continent.languages}
          />
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
              {continent.cities100.map((city) => {
                return <Cities key={continent.slug} city={city} />
              })}
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'contries'),
  ])
  const paths = continents.results.map((continent) => {
    return {
      params: {
        slug: continent.uid,
      },
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (query) => {
  const prismic = getPrismicClient()
  const { slug } = query.params!
  const response = await prismic.getByUID('contries', String(slug), {})

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner_image: response.data.banner_image.url,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities100: response.data.cities100.map((city: any) => {
      return {
        city: city.city,
        country: city.country,
        tumbnail: city.tumbnail.url,
        flag: city.flag.url,
      }
    }),
  }

  return {
    props: {
      continent,
    },
    revalidate: 1000 * 6,
  }
}
