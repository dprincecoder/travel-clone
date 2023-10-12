import React from 'react'

import Swiper from '../components/Swiper'
import Secondswiper from '../components/Secondswiper'
import Homeimg from '../components/Homeimg'
import Showcase from '../components/Showcase'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Home = () => {
  return (
  
     <div>
    
    <Showcase/>
    <Swiper/>
    <Secondswiper/>
    <Homeimg/>
    </div>
 
  

    
  )
}

export default Home