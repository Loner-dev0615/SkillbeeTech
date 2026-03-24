import React from 'react'
import { motion } from 'framer-motion'

const Herosect3 = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16">

           
             


             
                <div className="bg-gray-300 h-0.5 w-full mx-auto mb-5 mt-10"></div>

                <section className="">
                    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold mb-2"
                        >
                            Trusted by 10,000 + Learners
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 mb-10"
                        >
                            See how skillbee is transforming the daily habits of professionals worldwide.
                        </motion.p>

                        <div className="grid md:grid-cols-3 gap-8 mb-10">
                            {[
                                {
                                    name: "Maria Rodriguez",
                                    role: "Communication Expert.",
                                    img: "maria.jpg",
                                    text: "“As a busy parent, I thought my learning days were over. Skillbee proved me wrong. It's my daily 5-minute sanctuary.”"
                                },
                                {
                                    name: "Ellie Joe",
                                    role: "Software Engineer.",
                                    img: "joe.jpg",
                                    text: "“The micro-lessons are incredibly high quality. I learned more about finance in a week than I did in college.”"
                                },
                                {
                                    name: "Sam Smith",
                                    role: "Marketing Manager.",
                                    img: "sam.jpg",
                                    text: "“Skillbee is the only app that actually helped me stick to a learning habit. 5 minutes really is all it takes.”"
                                }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="text-orange-500 mb-3 text-lg">★★★★★</div>
                                    <p className="text-sm text-black mb-4 font-bold max-w-xs italic">
                                        {item.text}
                                    </p>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <img src={item.img} className="w-10 h-10 rounded-full" alt={item.name} />
                                        <div className="text-left text-sm">
                                            <p className="font-bold">{item.name}</p>
                                            <p className="text-gray-500 text-xs">{item.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
                        >
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full md:w-1/2 px-6 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <button className="w-full md:w-auto bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition font-semibold">
                                Search
                            </button>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-orange-50 p-8 md:p-12 rounded-3xl"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-8">
                                Ready to master a new skill?<br className="hidden md:block" />
                                Start your journey today.
                            </h3>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#EB6016] text-white px-8 py-3 rounded-full hover:bg-orange-600 font-semibold transition shadow-lg shadow-orange-200"
                                >
                                    Get Started For Free
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-[#EB6016] border border-[#EB6016] px-8 py-3 rounded-full hover:bg-orange-50 font-semibold transition"
                                >
                                    Join Now
                                </motion.button>
                            </div>

                            <p className="text-sm text-gray-500 font-medium">
                                No credit card required • Cancel anytime
                            </p>
                        </motion.div>
                    </div>
                </section>

            </section>
        </div>
    )
}

export default Herosect3