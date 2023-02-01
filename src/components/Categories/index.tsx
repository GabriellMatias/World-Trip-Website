import { Grid, GridItem } from '@chakra-ui/layout'
import CategoriesBox from './CategoriesBox'

export default function Categories() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <CategoriesBox icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <CategoriesBox icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <CategoriesBox icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <CategoriesBox icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <CategoriesBox icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}
