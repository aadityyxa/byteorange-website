import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import 'swiper/css/scrollbar';

import 'swiper/css/bundle';

import carouselimg1 from '../assets/section-four/carousel-01.png'
import carouselimg2 from '../assets/section-four/carousel-02.png'
import carouselimg3 from '../assets/section-four/carousel-03.png'

export default function Slider() {


    return (
        <Swiper className="slider"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src={carouselimg1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={carouselimg2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={carouselimg3} alt="" /></SwiperSlide>


        </Swiper>
    )
}