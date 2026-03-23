import React from 'react'
import { motion } from 'framer-motion'

const Herosect1 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16 mb-30">

             
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold">Something for everyone:</h2>
                        <p className="text-gray-600 mt-2 max-w-xl">
                            Explore a wide range of categories. Whether it's career growth or personal hobbies, we've got you covered
                        </p>
                    </motion.div>

                    <motion.a 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="#" 
                        className="text-orange-500 font-medium mt-4 md:mt-0 hover:underline"
                    >
                        View all 10 categories →
                    </motion.a>

                </div>


                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    
                    <motion.div variants={itemVariants} className="flex items-center gap-4 border border-black rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                            <img src="leader.svg" alt="" />
                        </div>
                        <div>
                            <p className="font-semibold">Leadership</p>
                            <p className="text-sm text-gray-500">9 lesson</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4 border border-black rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                            <img src="network.svg" alt="" />
                        </div>
                        <div>
                            <p className="font-semibold">Public Speaking</p>
                            <p className="text-sm text-gray-500">10 lesson</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4 border border-black rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                            <img src="finance.svg" alt="" />
                        </div>
                        <div>
                            <p className="font-semibold">Finance</p>
                            <p className="text-sm text-gray-500">12 lesson</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4 border border-black rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                            <img src="time.svg" alt="" />
                        </div>
                        <div>
                            <p className="font-semibold">Time Management</p>
                            <p className="text-sm text-gray-500">16 lesson</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4 border border-black rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-lg">
                            <img src="excel.svg" alt="" />
                        </div>
                        <div>
                            <p className="font-semibold">Excel & Data</p>
                            <p className="text-sm text-gray-500">10 lesson</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4 border border-black rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <div className ="w-10 h-10 flex items-center justify-center rounded-lg">
                            <img src="design.svg" alt="" />
                        </div>
                        <div>
                            <p className="font-semibold">Design Thinking</p>
                            <p className="text-sm text-gray-500">16 lesson</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4 border border-black rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                            <img src="software.svg" alt="" />
                        </div>
                        <div>
                            <p className="font-semibold">Software Skills</p>
                            <p className="text-sm text-gray-500">17 lesson</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4 border border-black rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center bg-orange-300 rounded-lg">
                            <img src="writing.svg" alt="" />
                        </div>
                        <div>
                            <p className="font-semibold">Writing</p>
                            <p className="text-sm text-gray-500">13 lesson</p>
                        </div>
                    </motion.div>

                </motion.div>

            </section>

        </div>
    )
}

export default Herosect1
