import React from 'react'

const Page1 = () => {
  return (
    <div>
   
<body class="bg-gray-100 font-sans">

  <div class="max-w-3xl mx-auto p-6">

  
    <p class="text-sm text-gray-400 mb-2">Quizzes &gt; Excel Basics</p>

  
    <h1 class="text-xl font-semibold mb-4">
      Quick Check: Excel Basics
    </h1>

    
    <h2 class="text-lg font-medium mb-6">
      What is the primary purpose of VLOOKUP in Excel?
    </h2>

  
    <div class="space-y-4">

     
      <div class="flex items-center justify-between bg-gray-50 border rounded-xl px-4 py-4">
        <div class="flex items-center gap-4">
          <span class="w-8 h-8 flex items-center justify-center rounded-md bg-gray-200 font-semibold text-sm">A</span>
          <p class="text-gray-700 text-sm">To format cells with color</p>
        </div>
      </div>

     
      <div class="flex items-center justify-between bg-orange-50 border-2 border-orange-500 rounded-xl px-4 py-4">
        <div class="flex items-center gap-4">
          <span class="w-8 h-8 flex items-center justify-center rounded-md bg-orange-500 text-white font-semibold text-sm">B</span>
          <p class="text-gray-800 text-sm font-medium">
            To search and retrieve data from a table
          </p>
        </div>
        <span class="text-orange-500 text-lg">✔</span>
      </div>

     
      <div class="flex items-center justify-between bg-gray-50 border rounded-xl px-4 py-4">
        <div class="flex items-center gap-4">
          <span class="w-8 h-8 flex items-center justify-center rounded-md bg-gray-200 font-semibold text-sm">C</span>
          <p class="text-gray-700 text-sm">To calculate average</p>
        </div>
      </div>

      
      <div class="flex items-center justify-between bg-gray-50 border rounded-xl px-4 py-4">
        <div class="flex items-center gap-4">
          <span class="w-8 h-8 flex items-center justify-center rounded-md bg-gray-200 font-semibold text-sm">D</span>
          <p class="text-gray-700 text-sm">To sort alphabetically</p>
        </div>
      </div>

    </div>

    
    <div class="flex justify-between items-center mt-8">
      <button class="text-gray-500 flex items-center gap-2 text-sm">
        ← Previous
      </button>

      <button class="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 flex items-center gap-2">
        Submit →
      </button>
    </div>

   
    <div class="mt-8 bg-orange-500 text-white rounded-2xl p-6">
      <p class="text-sm opacity-80 mb-2">PRO TIP</p>
      <h3 class="font-semibold mb-2">Need a refresher?</h3>
      <p class="text-sm mb-4">
        VLOOKUP is one of the most powerful tools in Excel for data analysis.
        If you're struggling, check out our "Excel Essentials" module.
      </p>
      <button class="text-sm font-medium underline">
        Review Module
      </button>
    </div>

  </div>

</body>

    </div>
  )
}

export default Page1
