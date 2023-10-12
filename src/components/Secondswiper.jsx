// Import Swiper React components
// import  '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css/effect-fade';
// import '/App.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/scss';
import Frame from '../assets/Frame.png'
import {Button} from "@material-tailwind/react"

export default () => {

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

  };

  return (
    
    <>
    <h2 className="text-black mx-14 m-5 font-bold">Popular Hotels</h2>
   
    <Swiper
    breakpoints={breakpoints}
    modules={[Navigation, Pagination, A11y]}
   
    spaceBetween={1}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
   
   
    <div className="swiper-sliders  mx-20 ">
  
    <SwiperSlide className="swiper-background w-48 pt-10 mx-10">
        <div>
          
      <img src={Frame} />
        </div>

        <div className="swiper-contents flex ">
          <h1></h1>
         
          
        </div>
    </SwiperSlide>

    <SwiperSlide className="w-48  pt-10"> 
        <div>
        <img src={Frame} />
        </div>

        <div className="swiper-contents">
          <h1></h1>
          
        </div>
    </SwiperSlide>
    <SwiperSlide className="w-48  pt-10"> 
        <div>
        <img src={Frame} />
        </div>

        <div className="swiper-contents">
          <h1></h1>
         
        </div>
    </SwiperSlide>

    <SwiperSlide className="w-48  pt-10"> 
        <div>
        <img src={Frame} />
        </div>

        <div className="swiper-contents">
          <h1></h1>
       
        </div>
        </SwiperSlide>

        <SwiperSlide className="w-48  pt-10"> 
        <div>
        <img src={Frame} />
        </div>

        <div className="swiper-contents">
          <h1></h1>
        </div>
        </SwiperSlide>

        <SwiperSlide className="w-48  pt-10"> 
        <div>
        <img src={Frame} />
        </div>

        <div className="swiper-contents">
          <h1></h1>
          
        </div>
        </SwiperSlide>

        <SwiperSlide className="w-48  pt-10"> 
        <div>
        <img src={Frame} />
        </div>

        <div className="swiper-contents">
          <h1></h1>
        </div>
        </SwiperSlide>
        </div>
  </Swiper>

  </>
  

  
  );

  
};