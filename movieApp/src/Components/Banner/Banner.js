import React from 'react'
import style from "./style/Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {bannerData} from "../../Helpers/Helper"
const Banner = () => {
  return (
    <section className={style.mainBanner}>
        <div className="container">
        <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        
        modules={[Pagination,Autoplay, Navigation]}
        className="mySwiper"
      >
        {bannerData.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                <img className={style.slideImg} src={item.img} alt="banner" />
                </SwiperSlide>
            )})
        }
      </Swiper>
        </div>
    </section>
  )
}

export default Banner