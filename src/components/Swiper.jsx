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
    
    <div className="swiper-sliders">
    <h2>Trending Flights Deals</h2>
    <SwiperSlide className="swiper-background">
        <div>
      <img src={Frame} className="img-section1"/>
        </div>

        <div className="swiper-contents" >
          <h1></h1>
          <button className="swiper-btn">Book now</button>
        </div>
    </SwiperSlide>

    <SwiperSlide> 
        <div>
      <img src={Frame}  className="img-section1"/>
        </div>

        <div className="swiper-contents">
          <h1></h1>
          <button  className="swiper-btn">Book now</button>
        </div>
    </SwiperSlide>
    <SwiperSlide> 
        <div>
      <img src={Frame}   className="img-section1"/>
        </div>

        <div className="swiper-contents">
          <h1></h1>
          <button  className="swiper-btn">Book now</button>
        </div>
    </SwiperSlide>

    <SwiperSlide> 
        <div>
      <img src={Frame}   className="img-section1"/>
        </div>

        <div className="swiper-contents">
          <h1></h1>
          <button  className="swiper-btn">Book now</button>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div>
      <img src={Frame}   className="img-section1"/>
        </div>

        <div className="swiper-contents">
          <h1></h1>
          <button  className="swiper-btn">Book now</button>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div>
      <img src={Frame}   className="img-section1"/>
        </div>

        <div className="swiper-contents">
          <h1></h1>
          <button  className="swiper-btn">Book now</button>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div>
      <img src={Frame}   className="img-section1"/>
        </div>

        <div className="swiper-contents">
          <h1></h1>
          <button  className="swiper-btn">Book now</button>
        </div>
        </SwiperSlide>
        </div>
  </Swiper>
  
  );
};