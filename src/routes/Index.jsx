import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import StickyNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import Search from '../pages/Search'
import Checkout from '../pages/Checkout'
import Homeimg from '../components/Homeimg'
import Showcase from '../components/Showcase'
import Swiper from '../components/Swiper'
import Secondswiper from '../components/Secondswiper'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


const Index = () => {
  return (
    <Router>
        
        <StickyNavbar />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/search' element={<Search />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Showcase/>
         <Swiper/>
         <Secondswiper/>
         <Homeimg/>
        <Footer />

    </Router>
  )
}

export default Index