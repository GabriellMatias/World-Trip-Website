import { Darktheme, LightTheme } from '@/styles/themes'
import { Flex, Text, Box, useColorModeValue, Image } from '@chakra-ui/react'

export interface CitiesProps {
  city: {
    tumbnail: string
    flag: string
    city: string
    country: string
  }
}

export function CitiesDetails({ city }: CitiesProps) {
  const { colors } = useColorModeValue(Darktheme, LightTheme)
  return (
    <Flex
      padding="0 1.5rem"
      width="16rem"
      height={'110px'}
      marginTop={-2}
      borderBottomRadius={4}
      border={'1px solid orange'}
      gap={'16px'}
    >
      <Text
        marginTop={'1.2rem'}
        marginBottom={'1.6rem'}
        gap="12px"
        display={'flex'}
        flexDirection={'column'}
        color={colors.gray[200]}
      >
        <strong>{city.city}</strong>
        <span>{city.country}</span>
      </Text>
      <Box
        minW={'2rem'}
        display={'flex'}
        flex={1}
        alignItems="center"
        justifyContent={'end'}
      >
        <Image
          src={city.flag}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
          alt=""
        />
      </Box>
    </Flex>
  )
}
