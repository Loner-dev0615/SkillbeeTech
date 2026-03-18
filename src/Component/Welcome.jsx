import React from 'react'
import JoinNow from '../Pages/JoinNow'



const Welcome = () => {
  return (
    <div>
      <div className="ml-70 mt-20 mb-10">
        <img src="rena.svg" alt="" />
      </div>
      <div className="justify-center items-center text-center mt-10">
        <h1 className='font-bold text-3xl mb-4'>
          Build skills that actually 
        </h1>
        <p className='text-[#EE5822] font-bold text-xl justify-center mb-5'>
          Matter
        </p>
        <p className='text-gray-400 max-w-140 mx-auto'>
         Daily 5-minutes lessons built for busy professionals. No fluff, no filler- just real skills that move your career forward
        </p>
      </div>
      <div className="justify-center items-center text-center mt-20">
        <a href="/join" className="bg-[#EE5822] text-white font-bold py-2 px-4 rounded-3xl w-90.5 h-13.5 hover:bg-orange-600">
          Get Started
        </a>
      </div>
      <div className="h-0.5 w-200 bg-gray-200 mt-20 mb-20 ml-60">
        
      </div>
      <div className="flex justify-center items-center text-center gap-20 mb-5">
        <div className="justify-center items-center text-center">
          <img src="timer.svg" alt="" className='ml-28' />
          <h2 className='font-bold mb-5'>
            5-Min Daily
          </h2>
          <p className='max-w-140 mx-auto text-gray-400'>
            Perfect for your commute or coffee break.
          </p>
        </div>
        <div className="justify-center items-center text-center ">
          <img src="up.svg" alt="" className='ml-28' />
          <h2 className='font-bold mb-3'>
            Career Growth
          </h2>
          <p className='max-w-140 mx-auto text-gray-400'>
            Curated tracks for leadership and tech.
          </p>
        </div>
        <div className="justify-center items-center text-center ">
          <img src="shield.svg" alt="" className='ml-28' />
          <h2 className='font-bold mb-3'>
            Expert Content
          </h2>
          <p className='max-w-140 mx-auto text-gray-400'>
           Insights from industry-leading mentors.
          </p>
        </div>
    
      </div>
    </div>
  )
}

export default Welcome
