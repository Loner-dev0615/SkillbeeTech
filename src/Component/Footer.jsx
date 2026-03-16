import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="bg-gray-300 h-0.5 w-300 items-center ml-30 mb-10">
          .
         </div>

         <div className="flex px-30 justify-between mb-30">
            <div className="max-w-100 justify-between">
               <img src="Skillbee.svg" alt="" />
               <p>
                Skillbee is the #1 micro-learning platform for busyprofessionals. Empowering your growth, onefive- minute lesson at a time
               </p>
               <p>
                follow us on:
               </p>
               <div className="">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
               </div>
            </div>
            <div className="flex gap-40">
                <div className="space-y-2">
                 <h1>
                    Platform
                 </h1>
                 <p>How it works</p>
                 <p>Courses</p>
                 <p>For Teams</p>
                 <p>Pricing</p>
                </div>
                <div className="">
                 <h2>
                    Company
                 </h2>
                 <p>About us</p>
                 <p>Career</p>
                 <p>Blog</p>
                 <p>Contact</p>
                </div>
                <div className="">
                <h3>
                    Support
                </h3>
                <p>Help Center</p>
                <p>Privacy policy</p>
                <p>Terms of service</p>
                <p>Cookies</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Footer
