import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";



<SwiperSlide>
<img src={one} alt="" />
</SwiperSlide>
<SwiperSlide>
<img src={two} alt="" />
</SwiperSlide>
<SwiperSlide>
<img src={three} alt="" />
</SwiperSlide>

export default Home;


<Swiper
slidesPerView={2}
spaceBetween={30}
pagination={{
  clickable: true,
}}
modules={[Pagination]}
className="mySwiper"
>
<SwiperSlide>
  <img src={one} alt="" />
</SwiperSlide>
<SwiperSlide>
  <img src={two} alt="" />
</SwiperSlide>
<SwiperSlide>
  <img src={three} alt="" />
</SwiperSlide>
</Swiper>


<div className="border-2 border-red-600 mt-40 grid grid-cols-2 gap-3">
      <div className="border border-yellow-600 mt-5 mb-5">
        <h1>Info Side</h1>
      </div>
      <div className="border border-white mt-5 mb-5">
       
      </div>
    </div>