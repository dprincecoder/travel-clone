
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/scss';
import Firstimg from '../assets/Firstimg.png';
import airline from '../assets/airline.png';
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
    <h2 className="text-black mx-14 m-5 font-bold">Trending Flights Deals</h2>
   
    <Swiper
    breakpoints ={breakpoints}
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={1}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
  
    onSlideChange={(e) => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    
    <div className="swiper-sliders mx-20">
     
    <SwiperSlide className="swiper-background img-section w-64 ml-14 space-x-4 border-black">
        <div>
      <img src={Firstimg} />

      <div className="swiper-contents flex justify-around mt-6">
         <img src={airline} />
          <Button variant='gradient' style={{ fontFamily: 'rubik' }} color='green' size='sm' className='rounded-full capitalize'>Create account</Button>
          
        </div>
        </div>


    </SwiperSlide>

    <SwiperSlide className="w-64"> 
        <div>
      <img src={Firstimg}  />

       <div className="swiper-contents flex justify-around mt-6">
         <img src={airline} />
          <Button variant='gradient' style={{ fontFamily: 'rubik' }} color='green' size='sm' className='rounded-full capitalize'>Create account</Button>
          
        </div>
        </div>

        
    </SwiperSlide>
    <SwiperSlide className="w-64"> 
    <div>
      <img src={Firstimg}  />

       <div className="swiper-contents flex justify-around mt-6">
         <img src={airline} />
          <Button variant='gradient' style={{ fontFamily: 'rubik' }} color='green' size='sm' className='rounded-full capitalize'>Create account</Button>
          
        </div>
        </div>
    </SwiperSlide>

    <SwiperSlide className="w-64"> 
        <div>
      <img src={Firstimg} />
       <div className="swiper-contents flex justify-around mt-6">
         <img src={airline} />
          <Button variant='gradient' style={{ fontFamily: 'rubik' }} color='green' size='sm' className='rounded-full capitalize'>Create account</Button>
          
        </div>
        </div>

       
        </SwiperSlide>

        <SwiperSlide className="w-64"> 
        <div>
      <img src={Firstimg} />
      <div className="swiper-contents flex justify-around mt-6">
         <img src={airline} />
          <Button variant='gradient' style={{ fontFamily: 'rubik' }} color='green' size='sm' className='rounded-full capitalize'>Create account</Button>
          
        </div>
        </div>

       
        </SwiperSlide>

        <SwiperSlide className="w-64"> 
        <div>
      <img src={Firstimg} />
      <div className="swiper-contents flex justify-around mt-6">
         <img src={airline} />
          <Button variant='gradient' style={{ fontFamily: 'rubik' }} color='green' size='sm' className='rounded-full capitalize'>Create account</Button>
          
        </div>
        </div>

        </SwiperSlide>

        <SwiperSlide className="w-64 "> 
        <div>
      <img src={Firstimg} />
       <div className="swiper-contents flex justify-around mt-6">
         <img src={airline} />
          <Button variant='gradient' style={{ fontFamily: 'rubik' }} color='green' size='sm' className='rounded-full capitalize'>Create account</Button>
          
        </div>
        </div>
        </SwiperSlide>
        </div>
  </Swiper>

  </>
  

  
  );

  
};