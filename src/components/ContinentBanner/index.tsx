import { Flex } from '@chakra-ui/react'

export function ContinentBanner() {
  return (
    <Flex
      bgImage="url('/Europe.png')"
      w="100%"
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={['center', 'center', 'flex-start']}
      textAlign={['center', 'left']}
      fontSize={['1.75rem', '5xl']}
      color="gray.100"
      fontWeight="500"
    >
      Europa
    </Flex>
  )
}
