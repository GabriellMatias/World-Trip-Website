import { HeaderComponent } from '@/components/Header'
import { Heading } from '@chakra-ui/react'
import Head from 'next/head'

export default function CountryDetails() {
  return (
    <Heading>
      <Head>
        <title>CountryName | WorldTrip</title>
      </Head>
      <HeaderComponent />
    </Heading>
  )
}
