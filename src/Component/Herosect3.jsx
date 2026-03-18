import React from 'react'

const Herosect3 = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 gap-12 items-start">


                    <div>

                        <h2 className="text-3xl font-bold mb-4">
                            The 30 second
                            <br /> Elevator pitch
                        </h2>

                        <p className="text-black  mb-6 max-w-290">
                            Mastering your introduction is the key to networking success.
                            In this lesson, we break down the three essential components
                            of a pitch that sticks.
                        </p>

                        <ul className="space-y-3 text-black text-sm mt-15">

                            <li className="flex gap-2 font-bold">
                                <span className="text-orange-500">
                                    <img src="ei_check.svg" alt="" />
                                </span>
                                <span>The "Problem" Hook: Start with a challenge.</span>
                            </li>

                            <li className="flex gap-2 font-bold">
                                <span className="text-orange-500 ">
                                    <img src="ei_check.svg" alt="" />
                                </span>
                                <span>The "Solution" Core: Explain your unique value.</span>
                            </li>

                            <li className="flex gap-2 font-bold">
                                <span className="text-orange-500">
                                    <img src="ei_check.svg" alt="" />
                                </span>
                                <span>The "Call to Action": End with a clear next step.</span>
                            </li>

                        </ul>

                        <button className="mt-10 bg-[#EE5822] text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
                            Try this lesson for free
                        </button>

                    </div>




                    <div>

                        <div className="bg-[#EE5822] text-black rounded-xl p-6">

                            <div className="flex justify-between text-sm mb-3">
                                <span className="border border-bold text-semibold px-3 py-1 rounded-full text-xs">Module 1.2</span>
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

                        <div className="mb-6 mt-6 space-y-3  ">
                            <img
                                src="mic.jpg"
                                className="rounded-lg w-80 h-40 object-cover ml-30"
                            />

                            <p className="text-md text-center mt-5">
                                "A pitch without context is just noise"
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">

                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2 border bg-gray-400 rounded-full text-sm">
                                    <b>Replay</b>
                                </button>

                                <button className="px-4 py-2 border bg-gray-400  rounded-full text-bold text-sm">
                                    <b>Notes</b>
                                </button>
                            </div>

                            <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm">
                                Mark Complete
                            </button>

                        </div>

                    </div>

                </div>




                <div className="grid md:grid-cols-3 gap-10 mt-16 border-t pt-10">

                    <div>
                        <div className="w-10 h-10 bg-purple-200 rounded-md flex items-center justify-center mb-3">
                            <img src="spaced.svg" alt="" />
                        </div>
                        <h4 className="font-semibold mb-1">Spaced Repetition</h4>
                        <p className="text-sm text-gray-600">
                            Our algorithm schedules review sessions at optimal intervals
                            to lock skills into your long-term memory.
                        </p>
                    </div>

                    <div>
                        <div className="w-10 h-10 rounded-md flex items-center justify-center mb-3">
                            <img src="smart.svg" alt="" />
                        </div>
                        <h4 className="font-semibold mb-1">Smart Reminders</h4>
                        <p className="text-sm text-gray-600">
                            Get nudges when you're most likely to have free time,
                            helping you maintain your streak effortlessly.
                        </p>
                    </div>

                    <div>
                        <div className="w-10 h-10 rounded-md flex items-center justify-center mb-3">
                            <img src="gamified.svg" alt="" />
                        </div>
                        <h4 className="font-semibold mb-1">Gamified Progress</h4>
                        <p className="text-sm text-gray-600">
                            Earn XP, collect rare badges, and compete with friends
                            in monthly skill-building challenges.
                        </p>
                    </div>

                </div>
                <div className="bg-gray-300 h-0.5 w-300 items-center ml-10 mb-5 mt-10">

                </div>

                <section className="">

                    <div className="max-w-6xl mx-auto px-6 py-12 text-center">


                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            Trusted by 10,000 + Learners
                        </h2>
                        <p className="text-gray-500 mb-10">
                            See how skillbee is transforming the daily habits of professionals worldwide.
                        </p>


                        <div className="grid md:grid-cols-3 gap-8 mb-10">


                            <div>
                                <div className="text-orange-500 mb-3 text-lg">★★★★★</div>
                                <p class="text-sm text-black mb-4 font-bold">
                                    “As a busy parent, I thought my learning days were over. Skillbee proved me wrong.
                                    It's my daily 5-minute sanctuary.”
                                </p>
                                <div class="flex items-center justify-center gap-2 mt-9">
                                    <img src="maria.jpg" class="w-10 h-10 rounded-full" />
                                    <div class="text-left text-sm">
                                        <p class="font-bold">Maria Rodriguez</p>
                                        <p class="text-gray-500 text-xs">Communication Expert.</p>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div class="text-orange-500 mb-3 text-lg">★★★★★</div>
                                <p class="text-sm text-black mb-4 font-bold">
                                    “The micro-lessons are incredibly high quality. I learned more about finance in a week than I did in college.”
                                </p>
                                <div class="flex items-center justify-center gap-2 mt-9">
                                    <img src="joe.jpg" class="w-10 h-10 rounded-full" />
                                    <div class="text-left text-sm">
                                        <p class="font-bold">Ellie Joe</p>
                                        <p class="text-gray-500 text-xs">Software Engineer.</p>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div class="text-orange-500 mb-3 text-lg">★★★★★</div>
                                <p class="text-sm text-black font-bold mb-4">
                                    “Skillbee is the only app that actually helped me stick to a learning habit.
                                    5 minutes really is all it takes.”
                                </p>
                                <div class="flex items-center justify-center gap-2 mt-9">
                                    <img src="sam.jpg" class="w-10 h-10 rounded-full" />
                                    <div class="text-left text-sm">
                                        <p class="font-bold">Sam Smith</p>
                                        <p class="text-gray-500 text-xs">Marketing Manager.</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
                            <input
                                type="text"
                                placeholder="Search"
                                class="w-full md:w-1/2 px-5 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <button class="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
                                Search
                            </button>
                        </div>


                        <div>
                            <h3 class="text-xl md:text-2xl font-semibold mb-6">
                                Ready to master a new skill?<br class="hidden md:block" />
                                Start your journey today.
                            </h3>

                            <div class="flex flex-col md:flex-row justify-center gap-4 mb-4">
                                <button class="bg-[#EB6016] text-white px-6 py-3 rounded-full hover:bg-orange-600">
                                    Get Started For Free
                                </button>
                                <button class="bg-[#EB6016] text-white px-6 py-3 rounded-full hover:bg-orange-300">
                                    Join Now
                                </button>
                            </div>

                            <p class="text-xs text-gray-500">
                                No credit card required  Cancel anytime
                            </p>
                        </div>

                    </div>

                </section>

            </section>
        </div>
    )
}

export default Herosect3
