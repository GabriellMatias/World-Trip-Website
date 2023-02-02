import { Box, Image } from '@chakra-ui/react'
import { CitiesDetails, CitiesProps } from './citiesDetails'

export function Cities({ city }: CitiesProps) {
  return (
    <Box marginBottom={4}>
      <Image
        width="16rem"
        height={'17rem'}
        boxSizing="border-box"
        alt=""
        src={city.tumbnail}
        minH={'10.8rem'}
        borderRadius="4px 4px 0 0"
      />
      <CitiesDetails city={city} />
    </Box>
  )
}
