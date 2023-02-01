import { Darktheme, LightTheme } from '@/styles/themes'
import { Flex, Text, Box, Image, useColorModeValue } from '@chakra-ui/react'

export function CitiesDetails() {
  const { colors } = useColorModeValue(Darktheme, LightTheme)
  return (
    <Flex
      padding="0 1.5rem"
      width="16rem"
      marginTop={-2}
      borderBottomRadius={4}
      border={'1px solid orange'}
      gap={16}
    >
      <Text
        marginTop={'1.2rem'}
        marginBottom={'1.6rem'}
        gap="12px"
        display={'flex'}
        flexDirection={'column'}
        color={colors.gray[200]}
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
