import React from 'react'

const Herosect2 = () => {
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

            </section>
        </div>
    )
}

export default Herosect2