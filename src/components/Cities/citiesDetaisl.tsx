import { Flex, Text, Box, Image } from '@chakra-ui/react'

export function CitiesDetails() {
  return (
    <Flex
      padding="0 1.5rem"
      width="16rem"
      marginTop={-2}
      borderBottomRadius={4}
      border={'1px solid orange'}
      gap={16}
      bgColor={'white'}
    >
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
        <Image alt="" src="/Ellipse 6bandeira.png" borderRadius="100%" />
      </Box>
    </Flex>
  )
}
