import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-center items-center mt-10 md:mt-20 mb-10">
        <img src="Area.svg" alt="Illustration" className="max-w-xs md:max-w-md" />
      </div>
      
      <div className="text-center mt-10 px-4">
        <h1 className='font-bold text-3xl md:text-5xl mb-4 text-gray-900'>
          Build skills that actually 
        </h1>
        <p className='text-[#EE5822] font-bold text-2xl md:text-4xl mb-6'>
          Matter
        </p>
        <p className='text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base'>
          Daily 5-minute lessons built for busy professionals. No fluff, no filler — just real skills that move your career forward.
        </p>
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <Link to="/join" className="bg-[#EE5822] text-white font-bold py-4 px-12 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 text-center">
          Get Started
        </Link>
      </div>

      <div className="h-px w-full max-w-4xl bg-gray-200 my-16 md:my-24 mx-auto"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <img src="timer.svg" alt="Timer Icon" className='w-8 h-8' />
          </div>
          <h2 className='font-bold text-xl mb-3 text-gray-900'>
            5-Min Daily
          </h2>
          <p className='text-gray-500 text-sm leading-relaxed max-w-[240px]'>
            Perfect for your commute or coffee break.
          </p>
        </div>

        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <img src="up.svg" alt="Growth Icon" className='w-8 h-8' />
          </div>
          <h2 className='font-bold text-xl mb-3 text-gray-900'>
            Career Growth
          </h2>
          <p className='text-gray-500 text-sm leading-relaxed max-w-[240px]'>
            Curated tracks for leadership and tech.
          </p>
        </div>

        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <img src="shield.svg" alt="Shield Icon" className='w-8 h-8' />
          </div>
          <h2 className='font-bold text-xl mb-3 text-gray-900'>
            Expert Content
          </h2>
          <p className='text-gray-500 text-sm leading-relaxed max-w-[240px]'>
            Insights from industry-leading mentors.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
