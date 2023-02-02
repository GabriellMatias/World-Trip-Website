import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Navigation, Pagination, A11y, EffectFade } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { HomeSliderProps } from '@/pages'

export function Slides({ continents }: HomeSliderProps) {
  return (
    <Flex
      w="100%"
      h={['250px', '450px']}
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        effect="fade"
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Flex
              borderRadius={8}
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.sliderImage}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              {/* continent/${continent.slug} */}
              <Link href={`/ContinentDetails/${continent.slug}`}>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  {continent.title}
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  {continent.subtitle}
                </Text>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
