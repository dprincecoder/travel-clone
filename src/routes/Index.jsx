import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <Router>
        
        <Navbar />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>

        <Footer />

    </Router>
  )
}

export default Index