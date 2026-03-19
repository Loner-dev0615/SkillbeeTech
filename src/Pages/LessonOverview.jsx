import React from 'react'

const LessonOverview = () => {
  return (
    <div>
      
<div className="w-full mx-auto px-6 py-10 bg-gray-100">

 
 

  
  <h1 className="text-2xl font-bold mb-2">
    Excel Basics for Beginners
  </h1>

  <p className="text-gray-600 text-sm mb-6">
    Master The Fundamentals Of Spreadsheet Management And Data Organization From Scratch.
  </p>

  
  <div className="relative rounded-xl overflow-hidden mb-10">
    <img src="/video.svg" alt="Lesson Video"
         className="w-[651px] h-[283px] object-cover"/>

   
   

 
    
  </div>


  <div className="grid md:grid-cols-3 gap-4">

    
    <div className="md:col-span-2">

      <h2 className="font-semibold mb-6 flex items-center gap-2">
        <span className="w-1 h-5 bg-[#EC5B13] inline-block"></span>
        What you'll learn
      </h2>

      <div className="space-y-4">

      
        <div className="bg-white p-4 rounded-lg flex gap-3 items-start shadow-sm w-120">
          <div className="text-orange-500">
            <img src="/tick.svg" alt="" />
          </div>
          <div>
            <p className="font-medium text-sm">The 5 essential Excel functions</p>
            <p className="text-gray-500 text-xs">Learn SUM, AVERAGE, MIN, MAX, and COUNT to handle any basic data set.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg flex gap-3 items-start shadow-sm w-120">
          <div className="text-orange-500">
            <img src="/tick.svg" alt="" />
          </div>
          <div>
            <p className="font-medium text-sm">How to use VLOOKUP in real scenarios</p>
            <p className="text-gray-500 text-xs">Master the art of looking up data across multiple sheets efficiently.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg flex gap-3 items-start shadow-sm w-120">
          <div className="text-orange-500">
            <img src="/tick.svg" alt="" />
          </div>
          <div>
            <p className="font-medium text-sm">Pivot Tables for quick reporting</p>
            <p className="text-gray-500 text-xs">Summarize thousands of rows of data into a neat report in seconds.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg flex gap-3 items-start shadow-sm w-120">
          <div className="text-orange-500">
            <img src="/tick.svg" alt="" />
          </div>
          <div>
            <p className="font-medium text-sm">Conditional Formatting mastery</p>
            <p className="text-gray-500 text-xs">Make your data talk visually with colors, scales, and icons.</p>
          </div>
        </div>

      </div>
    </div>

   
    <div>

      <div className="bg-[#f6edea] p-6 rounded-lg shadow-sm mt-60 ml-10 ">

        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <span className="text-[#EC5B13]">
            <img src="Icon.png" alt="" />
          </span>
          Lesson Details
        </h3>

        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Duration</span>
            <span className="font-medium text-black">45 Minutes</span>
          </div>

          <div className="flex justify-between">
            <span>Level</span>
            <span className="font-medium text-black">Beginner</span>
          </div>

          <div className="flex justify-between">
            <span>Total Lessons</span>
            <span className="font-medium text-black">12 Modules</span>
          </div>
        </div>

      </div>

    </div>

  </div>

</div>
    </div>
  )
}

export default LessonOverview
