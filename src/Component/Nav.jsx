import React from 'react'
import { IoFlashOutline } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import vectorImage from '../../public/Vector.svg'

const Nav = () => {
  return (
    <div>
      <nav className='flex justify-between px-20 py-10 items-center'>
        <div className="flex gap-2 items-center">
          <img src={vectorImage} alt="Vector" />
           <span className='text-[#EE5822] text-2xl font-semibold h-8.5 w-26.75 font-600'>
            Skillbee
           </span>
        </div>
        <div className="flex justify-between gap-7.75 font-200 font-semibold">
         <p>
            How it works
         </p>
         <p>
            Courses
         </p>
         <p>
            Pricing
         </p>
        </div>
        <div className="flex gap-14.5 font-semibold">
            <button>
                Sign Up
            </button>
            <button className='group flex border rounded-[55px] bg-[#EE5822] text-white px-6 py-2
             transition duration-300 align-center '>
                Get Started
                <span className='hidden group-hover:block ml-2'>
                  <GoChevronRight size={20} className='mt-0.5' />
                </span>
            </button>
        </div>
      </nav>
      

    </div>
  )
}

export default Nav
