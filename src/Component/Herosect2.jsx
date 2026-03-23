import React from 'react'
import { motion } from 'framer-motion'

const Herosect2 = () => {
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

            </section>
        </div>
    )
}

export default Herosect2