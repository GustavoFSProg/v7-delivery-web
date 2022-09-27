import styles from './styles.module.css'

// import { Swiper, SwiperSlide } from 'swiper/react'
import banner01 from '../../assets/banner-01.png'
// import banner02 from '../../assets/banner-02.png'

// Import Swiper styles
// import 'swiper/css'
import Image from 'next/image'
import { Autoplay } from 'swiper'

function Banner() {
  return (
    <div className={styles.container}>
     <Image src={banner01} alt="banner 1"  />

      {/* <Swiper slidesPerView={1}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div >
          <Image src={banner01} alt="banner 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >

            <Image src={banner02} alt="banner 2" />
          </div >
            
        </SwiperSlide>
        
      </Swiper>  */}
    </div>
  )
}

export default Banner
