import React, { useState, useRef } from 'react'

const Profile = () => {
  const [name, setName] = useState("Alex Johnson");
  const [profilePic, setProfilePic] = useState("/Ellipse 10.svg");
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempPic, setTempPic] = useState(profilePic);
  
  const fileInputRef = useRef(null);

  const handleEditClick = () => {
    setTempName(name);
    setTempPic(profilePic);
    setIsEditing(true);
  };

  const handleSave = () => {
    setName(tempName);
    setProfilePic(tempPic);
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempPic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
    
<section className="bg-[#f8f6f6] font-sans min-h-screen">
        <div className="w-full mx-auto p-6 mb-4">
          
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className=" justify-between items-start">
              <div className="flex gap-4">
                <img src={profilePic} className="w-30 h-30 rounded-full border-4 border-orange-400 object-cover" alt="Profile" />
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded-full flex gap-1"><img src="/tarrr.svg" alt="" />Verified Student</span>
                  </div>
                  <p className="text-sm text-gray-500">Beginner {name} learning public speaking</p>
                  <div className="mt-6 flex gap-3">
                    <button 
                      onClick={handleEditClick}
                      className="bg-[#EC5B13] text-white px-4 py-2 rounded-lg text-sm h-[38px] w-[122.44px] hover:bg-orange-600 transition"
                    >
                      Edit Profile
                    </button>
                    <button className="border px-4 py-2 rounded-[12px] text-sm border-[#EC5B1333] hover:bg-gray-50 transition">Share Profile</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-30 mt-20">
                <div className="bg-white p-4 rounded-xl text-center flex gap-4 p-6 shadow-sm border border-gray-50">
                 <div className="">
                   <img src="/hiz.svg" alt="" className=''/>
                 </div>
                <div className="">
                    <h3 className="font-bold">42</h3>
                  <p className="text-xs text-gray-500">LESSONS DONE</p>
                </div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center flex gap-4 p-6 shadow-sm border border-gray-50">
                 <div className="">
                   <img src="/tock.svg" alt="" />
                 </div>
                 <div className="">
                   <h3 className="font-bold">128h</h3>
                  <p className="text-xs text-gray-500">TIME LEARNED</p>
                 </div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center flex gap-4 p-6 shadow-sm border border-gray-50">
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
                <div className=" flex flex-col gap-3 flex-1 ">
                <div className="flex justify-between ">
                    <h1 className='font-bold '>
                   Mastering Public Speaking
                  </h1>
                  <span className='text-[#EC5B13] font-bold'>
                    75%
                  </span>
                </div>
                  <p className='text-gray-400 text-sm'>
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
                <div className=" flex flex-col gap-3 flex-1 ">
                <div className="flex justify-between ">
                    <h1 className='font-bold '>
                   React Fundamentals
                  </h1>
                  <span className='text-[#EC5B13] font-bold'>
                    88%
                  </span>
                </div>
                  <p className='text-gray-400 text-sm'>
                   Frontend Development • 5 Lessons left
                  </p>
                   <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-orange-500 h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
                <div>
                  <img src="/play.svg" alt="" />
                </div>
               </div>
                {/*third card*/}
                <div className="flex gap-7 items-center mb-9 ">
                <div className="">
                  <img src="/color.svg" alt=""  className='rounded-2xl'/>
                </div>
                <div className=" flex flex-col gap-3 flex-1 ">
                <div className="flex justify-between ">
                    <h1 className='font-bold '>
                   Color Theory for UI
                  </h1>
                  <span className='text-[#EC5B13] font-bold'>
                    15%
                  </span>
                </div>
                  <p className='text-gray-400 text-sm'>
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
                  <div className=" p-3 rounded-lg text-center text-[10px]"><img src="/badge.svg" alt="" className='w-full mb-1' />EARLY BIRD</div>
                  <div className=" p-3 rounded-lg text-center text-[10px]"><img src="/badge1.svg" alt="" className='w-full mb-1' />PRO LEARNER</div>
                  <div className=" p-3 rounded-lg text-center text-[10px]"><img src="/badge2.svg" alt="" className='w-full mb-1' />7 DAY STREAK</div>
                  <div className=" p-3 rounded-lg text-center text-[10px]"><img src="/badge3.svg" alt="" className='w-full mb-1' />GRADUATED</div>
                  <div className=" p-3 rounded-lg text-center text-[10px]"><img src="/badge4.svg" alt="" className='w-full mb-1' />HELPER</div>
                  <div className=" p-3 rounded-lg text-center text-[10px]"><img src="/badge5.svg" alt="" className='w-full mb-1' />CHAMPION</div>
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

      {/* ✅ EDIT MODAL */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <div className="space-y-6">
              {/* Profile Picture Upload */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative group">
                  <img 
                    src={tempPic} 
                    className="w-24 h-24 rounded-full border-4 border-orange-100 object-cover" 
                    alt="Preview" 
                  />
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition"
                  >
                    Change
                  </button>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept="image/*"
                />
                <p className="text-xs text-gray-400">Recommended: Square image, max 2MB</p>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                <input 
                  type="text" 
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Enter your name"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => setIsEditing(false)}
                  className="w-1/2 border border-gray-200 rounded-xl py-2.5 text-gray-600 font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="w-1/2 bg-[#EC5B13] text-white rounded-xl py-2.5 font-medium hover:bg-orange-600 transition shadow-lg shadow-orange-100"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
 
    </div>
  )
}

export default Profile
