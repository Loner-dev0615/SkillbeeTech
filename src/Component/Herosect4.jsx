import React from 'react'

const Herosect4 = () => {
  return (
    <div>
      <section class="py-20">

         <div className="bg-gray-300 h-0.5 w-300 items-center ml-30 mb-10">
          .
         </div>

        <div class="max-w-6xl mx-auto px-6 text-center">

          <h2 class="text-2xl font-semibold mb-6">
            Plans for you or your team
          </h2>


          <div class="flex justify-center mb-12">
            <div class="border border-orange-500 rounded-full p-1 flex gap-2">

              <button class="bg-orange-500 text-white px-6 py-2 rounded-full text-sm">
                For Individuals
              </button>

              <button class="px-6 py-2 text-sm text-gray-600">
                For Teams
              </button>

            </div>
          </div>


          <div class="grid md:grid-cols-3 gap-4">


            <div class="border border-orange-300 p-8 text-left mt-6">

              <h3 class="font-semibold text-lg">
                Single Skill Program
              </h3>

              <p class="text-black text-sm mt-1">
                Learn a single skill and earn a credential
              </p>

              <p class="text-3xl font-bold mt-6">
                $20 <span class="text-sm font-normal">/month</span>
              </p>

              <ul class="mt-6 space-y-3 text-sm text-black">
                <li class="flex gap-2"> <img src="check.svg" alt="" /> Access all courses within the learning program</li>
                <li class="flex gap-2"> <img src="check.svg" alt="" /> Earn a certificate upon completion after trial</li>
              </ul>

            </div>


            <div class="border-5 border-orange-500 p-8 text-left relative bg-white shadow ">

              <div class="absolute top-0 left-0 right-0 bg-orange-500 text-white text-sm py-1 text-center">
                Most Popular
              </div>

              <h3 class="font-semibold text-lg mt-4">
                Skillbee Plus Monthly
              </h3>

              <p class="text-black text-sm mt-1">
                Complete multiple courses and earn credentials
              </p>

              <p class="mt-6">
                <span class="line-through text-gray-400">$24</span>
                <span class="text-3xl font-bold">$14.40</span>
                <span class="text-sm">/month</span>
              </p>

              <button class="mt-4 bg-orange-500 text-white px-6 py-2 rounded">
                Save Now
              </button>

              <p class="text-sm text-black mt-2">
                Cancel anytime
              </p>

              <ul class="mt-6 space-y-3 text-sm text-black">
                <li class="flex gap-2"> <img src="check.svg" alt="" /> Access 10,000+ courses and specializations</li>
                <li class="flex gap-2"><img src="check.svg" alt="" /> Earn unlimited certificates</li>
                <li class="flex gap-2"><img src="check.svg" alt="" /> Job-relevant tools and projects</li>
                <li class="flex gap-2"><img src="check.svg" alt="" />Choose from 15+ professional certificates</li>
              </ul>

            </div>


            <div class="border border-orange-300 p-8 text-left mt-6">

              <h3 class="font-semibold text-lg">
                Skillbee Plus Annual
              </h3>

              <p class="text-black text-sm mt-1">
                Combine flexibility and savings
              </p>

              <p class="text-3xl font-bold mt-6">
                $160 <span class="text-sm font-normal">/year</span>
              </p>

              <button class="mt-4 border border-orange-500 text-orange-500 px-6 py-2 rounded">
                Try skillbee plus Annual
              </button>

              <p class="text-sm text-black mt-3">
                14-day money-back guarantee
              </p>

              <ul class="mt-6 space-y-3 text-sm text-black">
                <li class="flex gap-2"> <img src="check.svg" alt="" /> Everything included in the monthly plan</li>
                <li class="flex gap-2"> <img src="check.svg" alt="" /> Save when you pay upfront</li>
                <li class="flex gap-2"> <img src="check.svg" alt="" /> Maximum flexibility to learn at your pace</li>
              </ul>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default Herosect4
