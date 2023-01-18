import { Darktheme, LightTheme } from '@/styles/themes'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

interface CategoriesProps {
  title: string
}

export function Categories({ title }: CategoriesProps) {
  const { colors } = useColorModeValue(Darktheme, LightTheme)
  return (
    <Box
      as="a"
      textDecoration={'none'}
      display="flex"
      alignItems={'center'}
      gap={'8px'}
    >
      <Box
        as="div"
        bgColor={'orange.500'}
        borderRadius="100%"
        width={'8px'}
        height={'8px'}
      />
      <Text fontWeight={'medium'} fontSize={'lg'} color={colors.gray[100]}>
        {title}
      </Text>
    </Box>
  )
}
