import React from 'react'

const LessonContent = () => {
    return (
        <div>
          


<div className="w-full mx-auto px-6 py-8 bg-[#f8f6f6]">


 


  <h1 className="text-xl font-semibold mb-5 px-3">
    Excel Basics for Beginners
  </h1>

 
  <div className="relative rounded-xl overflow-hidden mb-6 px-3">
    <img src="/vid.svg" 
         className="w-[651px] h-[283px] object-cover"/>

   
  </div>

  
<div className="w-[771px] h-[124px] mt-10">
      <h2 className="font-semibold text-sm mb-2 ">
    Why This Matters
  </h2>

  <p className="text-gray-600 text-sm mb-6 ">
    Excel is used in <span className="font-semibold text-black">85% of office internships</span>. Knowing just 5 core functions can make you look like a pro from day one—and save hours of manual work.
  </p>
</div>


  <div className="bg-orange-100 border border-[#FFEDD5] p-4 rounded-lg mb-4 w-[771px] h-[124px]">
    <p className="text-xs text-orange-500 font-semibold mb-1">KEY INSIGHT</p>
    <p className="text-sm text-[#7C2D12]">
      Excel is used in <span className="font-semibold">85% of office internships</span>, knowing just 5 core functions can make you look like a pro from day one—and save hours of manual work.
    </p>
  </div>


  <div className="bg-[#F3F4F6] p-4 rounded-lg mb-15 w-[771px] h-[124px] mt-10">
    <p className="text-xs text-gray-400 font-semibold mb-1">REAL SCENARIO</p>
    <p className="text-sm text-gray-700">
      Your manager hands you a 500-row spreadsheet and asks you to employee IDs with salaries from another file. With VLOOKUP, this takes 30 seconds instead of 2 hours.
    </p>
  </div>

  
  <h3 className="text-center text-sm font-semibold mb-6 mr-60">
    The 5 functions to know
  </h3>

  <div className="grid grid-cols-2 gap-y-6 gap-x-12 max-w-3xl mx-auto mr-80">

    <div className="flex items-center gap-3">
      <span className="bg-[#EE5822] text-white w-[38px] h-[39px] flex items-center justify-center rounded-xl text-xs">1</span>
      <p className="text-sm text-gray-700">SUM – Add up a range of cells</p>
    </div>

    <div className="flex items-center gap-3">
      <span className="bg-[#EE5822] text-white w-[38px] h-[39px] flex items-center justify-center rounded-xl text-xs">2</span>
      <p className="text-sm text-gray-700">AVERAGE – Calculate the mean</p>
    </div>

    <div className="flex items-center gap-3">
      <span className="bg-[#EE5822] text-white w-[38px] h-[39px] flex items-center justify-center rounded-xl text-xs">3</span>
      <p className="text-sm text-gray-700">IF – Logic-based conditions</p>
    </div>

    <div className="flex items-center gap-3">
      <span className="bg-[#EE5822] text-white w-[38px] h-[39px] flex items-center justify-center rounded-xl text-xs">4</span>
      <p className="text-sm text-gray-700">VLOOKUP – Find values in another table</p>
    </div>

    <div className="flex items-center gap-3 col-span-2">
      <span className="bg-[#EE5822] text-white w-[38px] h-[39px] flex items-center justify-center rounded-xl text-xs">5</span>
      <p className="text-sm text-gray-700">COUNTIF – Count matching entries</p>
    </div>

  </div>

 
  <div className="flex justify-center mt-10 mb-20">
    <button className="bg-[#EE5822] hover:bg-[#D44D1B] text-white px-10 py-3 rounded-xl text-sm h-[54px] w-[362px]">
      Mark as Complete
    </button>
  </div>

</div>



    </div >
  )
}

export default LessonContent
