import React from 'react'

const Profile = () => {
  return (
    <div>
    
<section className="bg-[#f8f6f6] font-sans">
        <div className="w-full mx-auto p-6 mb-4">
          
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className=" justify-between items-start">
              <div className="flex gap-4">
                <img src="/Ellipse 10.svg" className="w-30 h-30 rounded-full border-4 border-orange-400 object-cover" />
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-lg font-bold">Alex Johnson</h2>
                    <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded-full flex gap-1"><img src="tarrr.svg" alt="" />Verified Student</span>
                  </div>
                  <p className="text-sm text-gray-500">Beginner Alex Johnson learning public speaking</p>
                  <div className="mt-6 flex gap-3">
                    <button className="bg-[#EC5B13] text-white px-4 py-2 rounded-lg text-sm `h-[38px] w-[122.44px]">Edit Profile</button>
                    <button className="border px-4 py-2 `rounded-[12px] text-sm border-[#EC5B1333]">Share Profile</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-30 mt-20">
                <div className="bg-white `p-4 rounded-xl text-center flex gap-4 p-6">
                 <div className="">
                   <img src="/hiz.svg" alt="" className=''/>
                 </div>
                <div className="">
                    <h3 className="font-bold">42</h3>
                  <p className="text-xs text-gray-500">LESSONS DONE</p>
                </div>
                </div>
                <div className="bg-white `p-4 rounded-xl text-center flex gap-4 p-6">
                 <div className="">
                   <img src="/tock.svg" alt="" />
                 </div>
                 <div className="">
                   <h3 className="font-bold">128h</h3>
                  <p className="text-xs text-gray-500">TIME LEARNED</p>
                 </div>
                </div>
                <div className="bg-white `p-4 rounded-xl text-center flex gap-4 p-6">
                 <div className="">
                   <img src="/fire.svg" alt="" />
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

                {/*first card*/}
               <div className="flex gap-7 items-center mb-9 ">
                <div className="">
                  <img src="/public.svg" alt=""  className='rounded-2xl'/>
                </div>
                <div className=" flex flex-col gap-3  ">
                <div className="flex gap-20 ">
                    <h1 className='font-bold '>
                   Mastering Public Speaking
                  </h1>
                  <span className='text-[#EC5B13] font-bold'>
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
                <div>
                  <img src="/play.svg" alt="" />
                </div>
               </div>

               {/*second card*/}
                 <div className="flex gap-7 items-center mb-9 ">
                <div className="">
                  <img src="/react.svg" alt=""  className='rounded-2xl'/>
                </div>
                <div className=" flex flex-col gap-3  ">
                <div className="flex gap-20 ">
                    <h1 className='font-bold '>
                   React Fundamentals
                  </h1>
                  <span className='text-[#EC5B13] font-bold'>
                    88%
                  </span>
                </div>
                  <p className='text-gray-300'>
                   Frontend Development • 5 Lessons left
                  </p>
                   <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-orange-500 h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
                <div clas>
                  <img src="/play.svg" alt="" />
                </div>
               </div>
                {/*third card*/}
                <div className="flex gap-7 items-center mb-9 ">
                <div className="">
                  <img src="/color.svg" alt=""  className='rounded-2xl'/>
                </div>
                <div className=" flex flex-col gap-3  ">
                <div className="flex gap-20 ">
                    <h1 className='font-bold '>
                   Color Theory for UI
                  </h1>
                  <span className='text-[#EC5B13] font-bold'>
                    15%
                  </span>
                </div>
                  <p className='text-gray-300'>
                  Visual Design • 20 Lessons left
                  </p>
                 <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-orange-500 h-2 rounded-full w-[15%]"></div>
                  </div>
                </div>
                <div>
                  <img src="/play.svg" alt="" />
                </div>
               </div>
              </div>
              <div>
                <div className="flex justify-between mb-4">
                  <h3 className="font-semibold">Badges</h3>
                  <span className="text-xs text-gray-400">12 total</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4 font-bold justify-center items-center">
                  <div className=" p-3 rounded-lg text-center text-xs"><img src="/badge.svg" alt="" className='p-4' /><br/>EARLY BIRD</div>
                  <div className=" p-3 rounded-lg text-center text-xs"><img src="/badge1.svg" alt="" className='p-4'  /><br/>PRO LEARNER</div>
                  <div className=" p-3 rounded-lg text-center text-xs"><img src="/badge2.svg" alt="" className='p-4' /><br/>7 DAY STREAK</div>
                  <div className=" p-3 rounded-lg text-center text-xs"><img src="/badge3.svg" alt=""className='p-4' /><br/>GRADUATED</div>
                  <div className=" p-3 rounded-lg text-center text-xs"><img src="/badge4.svg" alt="" className='p-4' /><br/>HELPER</div>
                  <div className=" p-3 rounded-lg text-center text-xs"><img src="/badge5.svg" alt=""className='p-4' /><br/>CHAMPION</div>
                </div>
                <div className="bg-[#EC5B130D] p-4 rounded-xl">
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


 
