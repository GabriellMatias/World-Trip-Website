// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

export function Slides() {
  return (
    <Flex margin={'20px 0px'}>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        effect="fade"
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            bgImage="url('/Foto.png')"
            bgSize={'cover'}
            bgRepeat="no-repeat"
            align={'center'}
            justify={'center'}
            width={'100vw'}
            height={'150px'}
            color={'$black'}
          >
            <Link href={'/ContinentDetails'}>Pais Nome</Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/Foto-1.png')"
            bgSize={'cover'}
            bgRepeat="no-repeat"
            align={'center'}
            justify={'center'}
            width={'100vw'}
            height={'150px'}
            color={'$black'}
          >
            <Link href={'/ContinentDetails'}>Pais Nome</Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/Foto-2.png')"
            bgSize={'cover'}
            bgRepeat="no-repeat"
            align={'center'}
            justify={'center'}
            width={'100vw'}
            height={'150px'}
            color={'$black'}
          >
            <Link href={'/ContinentDetails'}>Pais Nome</Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
