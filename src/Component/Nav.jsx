import React, { useState } from 'react'
import { IoFlashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <nav className='flex justify-between px-6 md:px-20 py-4 md:py-6 items-center max-w-7xl mx-auto'>
        <div className="flex gap-2 items-center">
          <Link to="/" className='text-[#EE5822] text-2xl font-bold font-semibold'>
            Skillbee
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between gap-8 font-semibold text-gray-600">
          <p className="hover:text-[#EE5822] cursor-pointer transition-colors">How it works</p>
          <p className="hover:text-[#EE5822] cursor-pointer transition-colors">Courses</p>
          <p className="hover:text-[#EE5822] cursor-pointer transition-colors">Pricing</p>
        </div>

        <div className="hidden md:flex gap-6 items-center font-semibold">
          <Link to="/join" className="text-gray-600 hover:text-gray-900 transition-colors">
            Sign Up
          </Link>
          <button className='bg-[#EE5822] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300'>
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none p-2"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl absolute top-full left-0 right-0 z-50">
          <p className="text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>How it works</p>
          <p className="text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Courses</p>
          <p className="text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</p>
          <hr className="border-gray-50" />
          <Link to="/join" className="text-gray-600 font-semibold" onClick={() => setIsMenuOpen(false)}>
            Sign Up
          </Link>
          <button className='bg-[#EE5822] text-white px-6 py-3 rounded-full font-semibold' onClick={() => setIsMenuOpen(false)}>
            Get Started
          </button>
        </div>
      )}
    </div>
  )
}

export default Nav
