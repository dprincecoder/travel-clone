import React from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiUser } from 'react-icons/fi'


const Navbar = () => {
  return (
    <>
        <nav className='lg:flex bg-white justify-between w-full py-5 px-28 items-center hidden'>
            <div className='flex gap-20 items-center'>
                <h1 className='text-4xl font-bold text-green'>Travul<span>9ja</span></h1>

                <div className="flex gap-5 text-black menu">
                    <Link to={'/'}>Flight</Link>
                    <Link to={'/'}>Hotels</Link>
                    <Link to={'/'}>Car Hire</Link>
                </div>
            </div>

            <div className="nav-action-btn flex items-center gap-4">
                <Link to={'/'} className='text-[#006B58]'>Login</Link>
                <Link to={'/'} className='bg-[#006B58] text-white p-3 rounded-full'>Create account</Link>
            </div>
        </nav>

        {/* Mobile View */}
        <nav className='flex bg-white justify-between w-full py-5 px-5 items-center lg:hidden'>
            <div className='flex gap-20 items-center'>
                <h1 className='text-4xl font-bold'>Logo</h1>
            </div>

            <div className="nav-action-btn flex items-center gap-4">
                <FiUser size={23} className='cursor-pointer' />
                <FiMenu size={23} className='cursor-pointer' />
            </div>
        </nav>
    </>
  )
}

export default Navbar