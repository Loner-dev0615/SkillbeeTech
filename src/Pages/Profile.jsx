import React from 'react'

const Profile = () => {
  return (
    <div>
    
<section className="bg-gray-100 font-sans">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <input type="text" placeholder="Search skills tracks, or lessons....." className="w-1/2 px-4 py-2 rounded-lg bg-gray-200 outline-none" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <h3 className="font-semibold">Alex Johnson</h3>
                <p className="text-sm text-gray-500">Beginner</p>
              </div>
              <img src="dark.svg" className="w-10 h-10 rounded-full" />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className=" justify-between items-start">
              <div className="flex gap-4">
                <img src="Ellipse 10.svg" className="w-30 h-30 rounded-full border-4 border-orange-400 object-cover" />
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-lg font-bold">Alex Johnson</h2>
                    <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded-full flex gap-1"><img src="tarrr.svg" alt="" />Verified Student</span>
                  </div>
                  <p className="text-sm text-gray-500">Beginner Alex Johnson learning public speaking</p>
                  <div className="mt-6 flex gap-3">
                    <button className="bg-[#EC5B13] text-white px-4 py-2 rounded-lg text-sm h-[38px] w-[122.44px]">Edit Profile</button>
                    <button className="border px-4 py-2 rounded-[12px] text-sm border-[#EC5B1333]">Share Profile</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-30 mt-20">
                <div className="bg-white p-4 rounded-xl text-center flex gap-4 p-6">
                 <div className="">
                   <img src="hiz.svg" alt="" className=''/>
                 </div>
                <div className="">
                    <h3 className="font-bold">42</h3>
                  <p className="text-xs text-gray-500">LESSONS DONE</p>
                </div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center flex gap-4 p-6">
                 <div className="">
                   <img src="tock.svg" alt="" />
                 </div>
                 <div className="">
                   <h3 className="font-bold">128h</h3>
                  <p className="text-xs text-gray-500">TIME LEARNED</p>
                 </div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center flex gap-4 p-6">
                 <div className="">
                   <img src="fire.svg" alt="" />
                 </div>
                 <div className="">
                   <h3 className="font-bold">15</h3>
                  <p className="text-xs text-gray-500">DAY STREAK</p>
                 </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="col-span-2">
                <div className="flex justify-between mb-4">
                  <h3 className="font-semibold">Active Tracks</h3>
                  <a href="#" className="text-orange-500 text-sm">View all</a>
                </div>
               <div className="flex gap-3.5 ">
                <div className="">
                  <img src="public.svg" alt=""  className='rounded-2xl'/>
                </div>
                <div className="">
                <div className="flex justify-between">
                    <h1 className='font-bold '>
                   Mastering Public Speaking
                  </h1>
                  <span className='text-[#EC5B13]'>
                    75%
                  </span>
                </div>
                  <p className='text-gray-300'>
                   Advanced Public Speaking • 12 Lessons left
                  </p>
                   <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-orange-500 h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
                <div clas>
                  <img src="play.svg" alt="" />
                </div>
               </div>
                <div className="bg-gray-50 p-4 rounded-xl mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h4 className="font-medium">React Fundamentals</h4>
                      <p className="text-xs text-gray-500">Frontend Development · 5 Lessons left</p>
                    </div>
                    <span className="text-sm text-orange-500">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-orange-500 h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h4 className="font-medium">Color Theory for UI</h4>
                      <p className="text-xs text-gray-500">Visual Design · 20 Lessons left</p>
                    </div>
                    <span className="text-sm text-orange-500">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-orange-500 h-2 rounded-full w-[15%]"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-4">
                  <h3 className="font-semibold">Badges</h3>
                  <span className="text-xs text-gray-400">12 total</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-xs">🥇<br/>BRONZE</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-xs">🎯<br/>FOCUS</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-xs">⭐<br/>7 DAY</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-xs">🎓<br/>GRAD</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-xs">💬<br/>HELPER</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center text-xs">🏆<br/>CHAMP</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="text-sm font-medium mb-2">Next Badge Progress</h4>
                  <p className="text-xs text-gray-500 mb-2">Complete 2 more lessons to earn "Top User"</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-orange-500 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  )
}

export default Profile


 
