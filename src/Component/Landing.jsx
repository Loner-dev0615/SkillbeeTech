import React, { useState } from 'react';
import Herosect from './Herosect';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <div className='bg-[#f8f6f6]'>
        <nav className="flex items-center justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto relative z-50">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img src="skill.svg" alt="Skillbee Logo" className="w-24 md:w-30" />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center gap-8 lg:gap-25"
          >
            <div className="flex items-center gap-6 lg:gap-10">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">How it works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">Courses</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            </div>
            
            <div className="flex items-center gap-4 lg:gap-14.5">
              <a href="/join" className="text-gray-600 hover:text-gray-900 transition font-semibold">Sign Up</a>
              <a href="/welcome" className="bg-[#EE5822] text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition font-semibold">
                Get Started
              </a>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-6 md:hidden z-50 border-t border-gray-100"
            >
              <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium" onClick={() => setIsMenuOpen(false)}>How it works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium" onClick={() => setIsMenuOpen(false)}>Courses</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <hr className="border-gray-100" />
              <a href="/join" className="text-gray-600 hover:text-gray-900 transition font-semibold" onClick={() => setIsMenuOpen(false)}>Sign Up</a>
              <a href="/welcome" className="bg-[#EE5822] text-white px-6 py-3 rounded-full shadow text-center font-semibold" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </a>
            </motion.div>
          )}
        </nav>

        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Master a new Skill,<br />
              <span className="text-[#EE5822]">5 minutes</span> at a time.
            </h1>
            <p className="mt-6 md:mt-10 lg:mt-15 text-gray-600 max-w-md mx-auto md:mx-0">
              Micro-learning for high achievers. Daily lessons, curated tracks, and
              proven habit-building techniques to help you grow every single day.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-15 lg:mt-30 justify-center md:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#EE5822] text-white px-8 py-4 rounded-full shadow hover:bg-orange-600 transition cursor-pointer font-semibold"
              >
                Start your first lesson
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-gray-400 px-8 py-4 rounded-full hover:bg-gray-100 transition cursor-pointer font-semibold"
              >
                Download App
              </motion.button>
            </div>
            <div className="flex items-center gap-3 mt-8 justify-center md:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img 
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="w-8 h-8 rounded-full border-2 border-white" 
                    src={`https://i.pravatar.cc/40?img=${i}`} 
                    alt={`avatar${i}`} 
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                10k+ Learners already Growing with us
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <img
              src="Rectangle 1.svg"
              className="w-full max-w-md md:max-w-none md:w-105 md:h-130 object-cover rounded-[30px] shadow-lg"
              alt="Hero"
            />
          </motion.div>
        </section>
        <Herosect />
      </div>
    </div>
  );
};

export default Landing;