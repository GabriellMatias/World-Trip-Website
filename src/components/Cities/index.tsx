import { Box, Image } from '@chakra-ui/react'
import { CitiesDetails } from './citiesDetails'

export function Cities() {
  return (
    <Box width="16rem" height={'17rem'} marginBottom={4}>
      <Image
        boxSizing="border-box"
        alt=""
        src="/Europe.png"
        minH={'10.8rem'}
        borderRadius="4px 4px 0 0"
      />
      <CitiesDetails />
    </Box>
  )
}
