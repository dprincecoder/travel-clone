// Import Swiper React components
import  '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css/effect-fade';
// import '/App.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/scss';
import Frame from '../assets/Frame.png'

export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
   
    spaceBetween={1}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <div>
    <SwiperSlide>
        <div>
      <img src={Frame} className="second-sliders"/>
        </div>
    </SwiperSlide>

    <SwiperSlide> 
        <div>
      <img src={Frame}   className="second-sliders"/>
        </div>
    </SwiperSlide>
    <SwiperSlide> 
        <div>
      <img src={Frame}    className="second-sliders"/>
        </div>
    </SwiperSlide>

    <SwiperSlide> 
        <div>
      <img src={Frame}    className="second-sliders"/>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div>
      <img src={Frame}    className="second-sliders"/>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div>
      <img src={Frame}   className="second-sliders"/>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div>
      <img src={Frame}    className="second-sliders"/>
        </div>
        </SwiperSlide>
        </div>
  </Swiper>
  
  );
};