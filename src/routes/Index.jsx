import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import StickyNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import Search from '../pages/Search'
import Checkout from '../pages/Checkout'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import Payment from '../pages/payment'

const Index = () => {
  return (
    <Router>
        
        <StickyNavbar />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/search' element={<Search />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/payment' element={<Payment/>} />
        </Routes>

        <Footer />

    </Router>
  )
}

export default Index