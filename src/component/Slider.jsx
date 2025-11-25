import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import banner from "../assets/b.jpg"



// import "./styles.css";

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center my-5">
        <SwiperSlide><img className="w-full h-[500px] object-cover" src={banner} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-cover" src="https://i.pinimg.com/1200x/c0/bb/52/c0bb52c34e37087c54cb22c8bc195415.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-cover" src="https://i.pinimg.com/1200x/97/78/1a/97781a0c73206bff1eab4aa6f8303ae0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-cover" src="https://i.pinimg.com/1200x/7b/97/9a/7b979a8655a43401fb1e3ca64451c9e5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-cover" src="https://i.pinimg.com/1200x/02/12/94/021294f0528c0bc3e00e9f5ffb20f99c.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-cover" src="https://i.pinimg.com/1200x/63/21/a4/6321a41a1f3271970fa986a8f281628c.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;
