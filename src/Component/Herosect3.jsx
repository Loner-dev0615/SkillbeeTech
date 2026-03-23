import React from 'react'
import { motion } from 'framer-motion'

const Herosect3 = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-4">
                        The 30 second
                        <br /> Elevator pitch
                    </h2>

                    <p className="text-black mb-6 max-w-full md:max-w-2xl">
                        Mastering your introduction is the key to networking success.
                        In this lesson, we break down the three essential components
                        of a pitch that sticks.
                    </p>

                    <ul className="space-y-3 text-black text-sm mt-8 md:mt-15">
                        <li className="flex gap-2 font-bold">
                            <span className="text-orange-500 shrink-0">
                                <img src="ei_check.svg" alt="" />
                            </span>
                            <span>The "Problem" Hook: Start with a challenge.</span>
                        </li>

                        <li className="flex gap-2 font-bold">
                            <span className="text-orange-500 shrink-0">
                                <img src="ei_check.svg" alt="" />
                            </span>
                            <span>The "Solution" Core: Explain your unique value.</span>
                        </li>

                        <li className="flex gap-2 font-bold">
                            <span className="text-orange-500 shrink-0">
                                <img src="ei_check.svg" alt="" />
                            </span>
                            <span>The "Call to Action": End with a clear next step.</span>
                        </li>
                    </ul>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 bg-[#EE5822] text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
                    >
                        Try this lesson for free
                    </motion.button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                >
                    <div className="bg-[#EE5822] text-black rounded-xl p-6">
                        <div className="flex justify-between text-sm mb-3">
                            <span className="border border-black font-semibold px-3 py-1 rounded-full text-xs">Module 1.2</span>
                            <span>5 min read</span>
                        </div>

                        <h3 className="text-lg font-semibold mb-2">
                            Today’s Tip: Context is king
                        </h3>

                        <p className="text-sm mb-4">
                            Effective communication requires understanding your audience’s
                            emotional state.
                        </p>
                    </div>

                    <div className="mb-6 mt-6 space-y-3">
                        <img
                            src="mic.jpg"
                            className="rounded-lg w-full max-w-xs h-40 object-cover mx-auto md:ml-auto md:mr-0"
                            alt="Microphone"
                        />

                        <p className="text-md text-center mt-5 italic">
                            "A pitch without context is just noise"
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 border bg-gray-400 rounded-full text-sm font-bold hover:bg-gray-500 transition-colors">
                                Replay
                            </button>

                            <button className="px-4 py-2 border bg-gray-400 rounded-full text-sm font-bold hover:bg-gray-500 transition-colors">
                                Notes
                            </button>
                        </div>

                        <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition-colors">
                            Mark Complete
                        </button>
                    </div>
                </motion.div>
            </div>




                <div className="grid md:grid-cols-3 gap-10 mt-16 border-t pt-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="w-10 h-10 bg-purple-200 rounded-md flex items-center justify-center mb-3">
                            <img src="spaced.svg" alt="" />
                        </div>
                        <h4 className="font-semibold mb-1">Spaced Repetition</h4>
                        <p className="text-sm text-gray-600">
                            Our algorithm schedules review sessions at optimal intervals
                            to lock skills into your long-term memory.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="w-10 h-10 rounded-md flex items-center justify-center mb-3">
                            <img src="smart.svg" alt="" />
                        </div>
                        <h4 className="font-semibold mb-1">Smart Reminders</h4>
                        <p className="text-sm text-gray-600">
                            Get nudges when you're most likely to have free time,
                            helping you maintain your streak effortlessly.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="w-10 h-10 rounded-md flex items-center justify-center mb-3">
                            <img src="gamified.svg" alt="" />
                        </div>
                        <h4 className="font-semibold mb-1">Gamified Progress</h4>
                        <p className="text-sm text-gray-600">
                            Earn XP, collect rare badges, and compete with friends
                            in monthly skill-building challenges.
                        </p>
                    </motion.div>

                </div>
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