import styles from './styles.module.css'

// import { Swiper, SwiperSlide } from 'swiper/react'
import banner01 from '../../assets/banner-promoção01.png'
// import banner02 from '../../assets/banner-02.png'

// Import Swiper styles
// import 'swiper/css'
import Image from 'next/image'

function Banner() {
  return (
    <div className={styles.container}>
     <Image src={banner01} alt="banner 1"  />

      {/* <Swiper slidesPerView={1}
      >
        <SwiperSlide>
          <Image src={banner01} alt="banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner02} alt="banner 2" />
        </SwiperSlide>
        
      </Swiper> */}
    </div>
  )
}

export default Banner
