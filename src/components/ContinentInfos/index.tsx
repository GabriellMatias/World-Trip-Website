import { Darktheme, LightTheme } from '@/styles/themes'
import { Flex, Text, Box, HStack, useColorModeValue } from '@chakra-ui/react'

export function ContinentInfos() {
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
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
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
            50
          </Text>
          <Text
            as={'span'}
            fontWeight="semibold"
            lineHeight={['1.6rem', '2.25rem']}
            fontSize={['0.875rem', '1.5rem']}
            color={colors.gray[200]}
          >
            paises
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
            60
          </Text>
          <Text
            as={'span'}
            fontWeight="semibold"
            lineHeight={['1.6rem', '2.25rem']}
            fontSize={['0.875rem', '1.5rem']}
            color={colors.gray[200]}
          >
            linguas
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
            24
          </Text>
          <Text
            as={'span'}
            fontWeight="semibold"
            lineHeight={['1.6rem', '2.25rem']}
            fontSize={['0.875rem', '1.5rem']}
            color={colors.gray[200]}
          >
            cidades +100
          </Text>
        </Box>
      </HStack>
    </Flex>
  )
}
