import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";

const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="border-2 border-red-600 mt-40 grid grid-cols-2 gap-3">
      <div className="border border-yellow-600 mt-5 mb-5">
        <h1>Info Side</h1>
      </div>
      <div className="border border-white mt-5 mb-5">
        <Swiper
          effect={"coverflow"}
          slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img onClick={handleClick} src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img onClick={handleClick} src={two} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img onClick={handleClick} src={three} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
