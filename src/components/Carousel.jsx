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

import mobileBanner from "../assets/images/mobile_banner.png";
import desktopBanner from "../assets/images/desktop_banner.png";
import { useWindowInfo } from "react-window-info-hook";
import Divider from "./Divider";



export default function Carousel() {
  const info = useWindowInfo();

SwiperCore.use([Autoplay]);
  return (
    <>
    <Divider />
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
          <img className="-z-10 absolute top-0 right-0 left-0" src={info.mobile ? mobileBanner : desktopBanner} />
          <div className="z-10 w-10/12 mx-auto h-full flex flex-col space-y-5 md:space-y-8 items-start justify-start pt-14 md:justify-center">
            <div className="flex flex-col items-start">
              <p className="text-4xl font-bold text-white md:text-[#e8898a] md:text-7xl">
                Delicious Cakes
              </p>
              <p className="text-3xl md:text-6xl text-white md:text-[#e8898a]">For Everyone</p>
            </div>
            <p className="text-sm md:text-base text-white md:text-[#e8898a]">
              Enjoy the best home made cakes!
            </p>
            <button className="uppercase text-white md:text-[#e8898a] border-2 border-white md:border-[#e8898a] cursor-pointer rounded px-4 md:px-8 py-1 md:py-3 font-semibold text-xs md:text-lg flex items-center space-x-2">
              <span>Order now</span>
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
