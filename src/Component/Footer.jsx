import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#f8f6f6] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-300 h-0.5 w-full mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="max-w-md">
            <img src="Skillbee.svg" alt="Skillbee Logo" className="mb-6 w-32 md:w-40" />
            <p className="mb-6 font-semibold text-gray-700 leading-relaxed">
              Skillbee is the #1 micro-learning platform for busy professionals. Empowering your growth, one five-minute lesson at a time.
            </p>
            <p className="mb-4 font-bold text-gray-900 uppercase tracking-wider text-sm">
              Follow us on:
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition"><img src="Social1.svg" alt="Social 1" className="w-6 h-6" /></a>
              <a href="#" className="hover:opacity-80 transition"><img src="Social2.svg" alt="Social 2" className="w-6 h-6" /></a>
              <a href="#" className="hover:opacity-80 transition"><img src="social3.svg" alt="Social 3" className="w-6 h-6" /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-[#EE5822] uppercase tracking-wide">Platform</h1>
              <div className="flex flex-col gap-2 text-gray-600 font-semibold">
                <a href="#" className="hover:text-gray-900 transition">How it works</a>
                <a href="#" className="hover:text-gray-900 transition">Courses</a>
                <a href="#" className="hover:text-gray-900 transition">For Teams</a>
                <a href="#" className="hover:text-gray-900 transition">Pricing</a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-[#EE5822] uppercase tracking-wide">Company</h2>
              <div className="flex flex-col gap-2 text-gray-600 font-semibold">
                <a href="#" className="hover:text-gray-900 transition">About us</a>
                <a href="#" className="hover:text-gray-900 transition">Career</a>
                <a href="#" className="hover:text-gray-900 transition">Blog</a>
                <a href="#" className="hover:text-gray-900 transition">Contact</a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#EE5822] uppercase tracking-wide">Support</h3>
              <div className="flex flex-col gap-2 text-gray-600 font-semibold">
                <a href="#" className="hover:text-gray-900 transition">Help Center</a>
                <a href="#" className="hover:text-gray-900 transition">Privacy policy</a>
                <a href="#" className="hover:text-gray-900 transition">Terms of service</a>
                <a href="#" className="hover:text-gray-900 transition">Cookies</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 h-0.5 w-full mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-semibold text-gray-500 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <img src="cc.svg" alt="Copyright" className="h-5 w-5" />
              <p>2026 Skillbee Inc.</p>
            </div>
            <p>All rights reserved</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <p>English (US)</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
