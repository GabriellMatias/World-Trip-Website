// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { Flex, Image } from '@chakra-ui/react'

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
          <Image
            src={'/Background.png'}
            width={'100vw'}
            height={'auto'}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/Background.png'}
            width={'100vw'}
            height={'auto'}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
