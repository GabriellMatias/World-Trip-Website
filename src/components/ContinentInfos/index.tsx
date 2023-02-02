import { Darktheme, LightTheme } from '@/styles/themes'
import { Flex, Text, Box, HStack, useColorModeValue } from '@chakra-ui/react'

interface ContinentInfosProps {
  description: string
  totalLanguages: number
  totalCities: number
  totalCountries: number
}

export function ContinentInfos({
  description,
  totalCities,
  totalCountries,
  totalLanguages,
}: ContinentInfosProps) {
  const { colors } = useColorModeValue(Darktheme, LightTheme)
  return (
    <Flex
      w="full"
      flexDirection={['column', 'column', 'row']}
      marginTop="24px"
      padding={'1.5rem 1rem 3rem 1rem'}
      gap={['1rem', '1rem', '4.3rem']}
      justify={'space-between'}
    >
      <Text
        maxW={['343px', '600px']}
        textAlign={'justify'}
        lineHeight={['1.6rem', '2.25rem']}
        fontSize={['0.875rem', '1.5rem']}
        color={colors.gray[200]}
      >
        {description}
      </Text>
      <HStack flex={1} justifyContent={'space-between'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'flex-start'}
        >
          <Text
            as={'strong'}
            fontWeight="semibold"
            color={'orange.500'}
            lineHeight={['2.25rem', '3.25rem']}
            fontSize={['1.5rem', '3rem']}
          >
            {totalCountries}
          </Text>
          <Text
            as={'span'}
            fontWeight="semibold"
            lineHeight={['1.6rem', '2.25rem']}
            fontSize={['0.875rem', '1.5rem']}
            color={colors.gray[200]}
          >
            Countries
          </Text>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'flex-start'}
        >
          <Text
            as={'strong'}
            fontWeight="semibold"
            color={'orange.500'}
            lineHeight={['2.25rem', '3.25rem']}
            fontSize={['1.5rem', '3rem']}
          >
            {totalLanguages}
          </Text>
          <Text
            as={'span'}
            fontWeight="semibold"
            lineHeight={['1.6rem', '2.25rem']}
            fontSize={['0.875rem', '1.5rem']}
            color={colors.gray[200]}
          >
            Languages
          </Text>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'flex-start'}
        >
          <Text
            as={'strong'}
            fontWeight="semibold"
            color={'orange.500'}
            lineHeight={['2.25rem', '3.25rem']}
            fontSize={['1.5rem', '3rem']}
          >
            {totalCities} +
          </Text>
          <Text
            as={'span'}
            fontWeight="semibold"
            lineHeight={['1.6rem', '2.25rem']}
            fontSize={['0.875rem', '1.5rem']}
            color={colors.gray[200]}
          >
            Cities
          </Text>
        </Box>
      </HStack>
    </Flex>
  )
}
