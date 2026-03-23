import React from 'react'
import { motion } from 'framer-motion'

const Herosect4 = () => {
  return (
    <div>
      <section className="py-20">
        <div className="bg-gray-300 h-0.5 w-full max-w-7xl mx-auto mb-10"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Plans for you or your team
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="border border-orange-500 rounded-full p-1 flex gap-2">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                For Individuals
              </button>
              <button className="px-6 py-2 text-sm text-gray-600 font-semibold">
                For Teams
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-orange-300 p-8 text-left rounded-2xl flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-xl">
                Single Skill Program
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Learn a single skill and earn a credential
              </p>
              <p className="text-4xl font-bold mt-8">
                $20 <span className="text-sm font-normal text-gray-500">/month</span>
              </p>
              <ul className="mt-8 space-y-4 text-sm text-gray-800 flex-grow">
                <li className="flex gap-3"> 
                  <img src="check.svg" alt="" className="w-5 h-5 shrink-0" /> 
                  <span>Access all courses within the learning program</span>
                </li>
                <li className="flex gap-3"> 
                  <img src="check.svg" alt="" className="w-5 h-5 shrink-0" /> 
                  <span>Earn a certificate upon completion after trial</span>
                </li>
              </ul>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition"
              >
                Start Trial
              </motion.button>
            </motion.div>

            {/* Plan 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-4 border-orange-500 p-8 text-left relative bg-white shadow-xl rounded-2xl flex flex-col h-full md:scale-105 z-10"
            >
              <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-sm py-1.5 text-center font-bold rounded-t-lg">
                Most Popular
              </div>
              <h3 className="font-bold text-xl mt-6">
                Skillbee Plus Monthly
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Complete multiple courses and earn credentials
              </p>
              <p className="mt-8">
                <span className="line-through text-gray-400 text-lg">$24</span>
                <span className="text-4xl font-bold ml-2">$14.40</span>
                <span className="text-sm text-gray-500">/month</span>
              </p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 shadow-md transition"
              >
                Save Now
              </motion.button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Cancel anytime
              </p>
              <ul className="mt-8 space-y-4 text-sm text-gray-800 flex-grow font-medium">
                <li className="flex gap-3"> 
                  <img src="check.svg" alt="" className="w-5 h-5 shrink-0" /> 
                  <span>Access 10,000+ courses and Specializations from 170+ leading companies</span>
                </li>
                <li className="flex gap-3">
                  <img src="check.svg" alt="" className="w-5 h-5 shrink-0" /> 
                  <span>Earn unlimited certificates after your trial ends</span>
                </li>
                <li className="flex gap-3">
                  <img src="check.svg" alt="" className="w-5 h-5 shrink-0" /> 
                  <span>1,000+ applied projects and hands-on labs from industry experts</span>
                </li>
                <li className="flex gap-3">
                  <img src="check.svg" alt="" className="w-5 h-5 shrink-0" /> 
                  <span>15+ Professional Certificate programs from industry leaders</span>
                </li>
              </ul>
            </motion.div>

            {/* Plan 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border border-orange-300 p-8 text-left rounded-2xl flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-xl">
                Skillbee Plus Annual
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Combine flexibility and savings
              </p>
              <p className="text-4xl font-bold mt-8">
                $160 <span className="text-sm font-normal text-gray-500">/year</span>
              </p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition"
              >
                Try Annual Plan
              </motion.button>
              <p className="text-xs text-center text-gray-500 mt-3 font-semibold">
                14-day money-back guarantee
              </p>
              <p className="mt-8 text-sm font-bold text-gray-900">
                Everything in Monthly, plus:
              </p>
              <ul className="mt-4 space-y-4 text-sm text-gray-800 flex-grow">
                <li className="flex gap-3"> 
                  <img src="check.svg" alt="" className="w-5 h-5 shrink-0" /> 
                  <span>Save when you pay upfront</span>
                </li>
                <li className="flex gap-3"> 
                  <img src="check.svg" alt="" className="w-5 h-5 shrink-0" /> 
                  <span>Maximum flexibility to learn at your pace</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Herosect4