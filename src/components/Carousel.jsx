import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { AiOutlineArrowRight } from "react-icons/ai";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css";
// import required modules
import { EffectFade, Pagination } from "swiper";

import banner from "../assets/images/banner-1.jpg";

export default function Carousel() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        spaceBetween={5}
        // autoplay={{ delay: 4000 }}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative w-full h-full">
          <img className="-z-10 absolute top-0 right-0 left-0" src={banner} />
          <div className="z-10 w-10/12 mx-auto h-full flex flex-col space-y-6 items-start justify-center bg">
            <div className="flex flex-col items-start">
              <p className="text-4xl font-bold text-white md:text-7xl">
                Fashionable
              </p>
              <p className="text-4xl md:text-6xl text-white">Collection</p>
            </div>
            <p className="text-xs md:text-base text-white">
              Get free shipping on all orders over $99.00
            </p>
            <button className="uppercase text-white bg-black cursor-pointer rounded px-6 md:px-8 py-2 md:py-4 font-bold text-sm md:text-lg flex items-center space-x-2">
              <span>Shop now</span>
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
