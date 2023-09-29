import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import StickyNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import Search from '../pages/Search'
import Checkout from '../pages/Checkout'

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

        <Footer />

    </Router>
  )
}

export default Index