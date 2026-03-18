import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="bg-gray-300 h-0.5 w-250 ml-60 mb-10 justify-center items-center">
          
         </div>

         <div className="flex px-30 justify-between mb-30">
            <div className="max-w-100">
               <img src="Skillbee.svg" alt="" className='mb-8' />
               <p className='mb-5 font-semibold'>
                Skillbee is the #1 micro-learning platform for busyprofessionals. Empowering your growth, onefive- minute lesson at a time
               </p>
               <p className='mb-5 font-semibold'>
                follow us on:
               </p>
               <div className="flex gap-2">
                <img src="Social1.svg" alt="" />
                <img src="Social2.svg" alt="" />
                <img src="social3.svg" alt="" />
               </div>
            </div>
            <div className="flex gap-40">
                <div className="flex flex-col gap-[17px] font-semibold">
                 <h1 className='font-bold text-[#EE5822]'>
                    Platform
                 </h1>
                 <p>How it works</p>
                 <p>Courses</p>
                 <p>For Teams</p>
                 <p>Pricing</p>
                </div>
                <div className="flex flex-col gap-[17px] font-semibold">
                 <h2 className='font-bold text-[#EE5822]'>
                    Company
                 </h2>
                 <p>About us</p>
                 <p>Career</p>
                 <p>Blog</p>
                 <p>Contact</p>
                </div>
                <div className="flex flex-col gap-[17px] font-semibold">
                <h3 className='font-bold text-[#EE5822]'>
                    Support
                </h3>
                <p>Help Center</p>
                <p>Privacy policy</p>
                <p>Terms of service</p>
                <p>Cookies</p>
                </div>
            </div>
         </div>

          <div className="bg-gray-300 h-0.5 w-320 ml-20 mb-10 justify-center items-center">
          
         </div>

         <div className="flex px-20 justify-between font-semibold">
            <div className="flex gap-20">
            <div className="flex gap-4">
                  <img src="cc.svg" alt="" className='h-5 w-5' />
               <p>
               2026 Skillbee<br/> inc
               </p>
            </div>
               <p>
                All right<br/> reserved
               </p>
            </div>
            <div className="">
               <p>
                  English(US).
               </p>
            </div>
         </div>
    </div>
  )
}

export default Footer
