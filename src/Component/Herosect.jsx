import React from 'react'
import Herosect1 from './Herosect1'
import Herosect2 from './Herosect2'
import Herosect3 from './herosect3'
import Herosect4 from './Herosect4'
import Footer from './Footer'

const Herosect = () => {
    return (
        <div className='bg-[#f8f6f6]'>
            <section className="max-w-7xl mx-auto px-6 py-16 ">

                <h2 className="text-3xl font-bold mb-10">
                    How Skillbee works:
                </h2>

                <div className="grid md:grid-cols-3 gap-6">


                    <div className="bg-white border border-gray-300 rounded-xl p-6 relative">

                        <span className="absolute top-4 left-4 bg-green-300 text-black text-sm font-semibold px-2 py-1 rounded">
                            1
                        </span>

                        <h3 className="mt-8 text-2xl font-semibold">
                            Find the skill of your choice
                        </h3>

                        <p className="text-black text-md mt-2 max-w-70 font-400">
                            We’ll connect you to a skills list that will motivate and challenge you
                            from first lesson to fluency.
                        </p>

                        <div className

                            ="mt-6 space-y-3">

                            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <img src="learn.jpg" alt="" className="h-20 w-20 rounded-2xl object-cover" />
                                    <div className="text-sm">
                                        <p className="font-medium">Software learning</p>
                                        <p className="text-gray-500 text-xs">Public Speaking</p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold">⭐ 4.9</span>
                            </div>

                            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <img src="look.jpg" alt="" className="h-20 w-20 rounded-2xl object-cover" />
                                    <div className="text-sm">
                                        <p className="font-medium">Software learning</p>
                                        <p className="text-gray-500 text-xs">Public Speaking</p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold">⭐ 4.9</span>
                            </div>

                            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <img src="image.jpg" alt="" className="h-20 w-20 rounded-2xl object-cover" />
                                    <div className="text-sm">
                                        <p className="font-medium">Software learning</p>
                                        <p className="text-gray-500 text-xs">Speak Fluently</p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold">⭐ 4.9</span>
                            </div>

                        </div>

                    </div>



                    <div className="bg-white border border-gray-300 rounded-xl p-6 relative">

                        <span className="absolute top-4 left-4 bg-yellow-300 text-black text-sm font-semibold px-2 py-1 rounded">
                            2
                        </span>

                        <h3 className="mt-8 text-2xl font-semibold ">
                            Start learning
                        </h3>

                        <p className="text-black text-md mt-2 max-w-70 font-400">
                            Your tutor will tailor every lesson to your goals, so progress feels
                            personal from the beginning.
                        </p>
                        <div className="mt-30">
                            <img
                                src="woman.jpg"
                                className="mt-30  h-[255px]  w-full object-cover rounded-lg"
                            />
                        </div>

                    </div>



                    <div className="bg-white border border-gray-300 rounded-xl p-6 relative">

                        <span className="absolute top-4 left-4 bg-blue-300 text-black text-sm font-semibold px-2 py-1 rounded">
                            3
                        </span>

                        <h3 className="mt-8 text-2xl font-semibold ">
                            Make Progress every week
                        </h3>

                        <p className="text-black text-md mt-2 max-w-70 font-400">
                            Choose new mini lessons you want to take and build lasting confidence,
                            one conversation at a time.
                        </p>

                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
                            className="mt-10 rounded-lg h-44 w-full object-cover"
                        />

                    </div>

                </div>

            </section>
            <Herosect1 />
            <Herosect2 />
            <Herosect3 />
            <Herosect4 />
            <Footer/>
        </div>

    )
}

export default Herosect
