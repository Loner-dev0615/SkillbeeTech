import React from 'react'

const Herosect4 = () => {
  return (
    <div>
      <section className="py-20">

         <div className="bg-gray-300 h-0.5 w-300 items-center ml-10 mb-10">
          .
         </div>

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-6">
            Plans for you or your team
          </h2>


          <div className="flex justify-center mb-12">
            <div className="border border-orange-500 rounded-full p-1 flex gap-2">

              <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm">
                For Individuals
              </button>

              <button className="px-6 py-2 text-sm text-gray-600">
                For Teams
              </button>

            </div>
          </div>


          <div className="grid md:grid-cols-3 gap-4">


            <div className="border border-orange-300 p-8 text-left mt-6 w-70 h-140">

              <h3 className="font-semibold text-lg">
                Single Skill Program
              </h3>

              <p className="text-black text-sm mt-1">
                Learn a single skill and earn a credential
              </p>

              <p className="text-3xl font-bold mt-6">
                $20 <span className="text-sm font-normal">/month</span>
              </p>

              <ul className="mt-6 space-y-3 text-sm text-black">
                <li className="flex gap-2"> <img src="check.svg" alt="" /> Access all courses within the learning program</li>
                <li className="flex gap-2"> <img src="check.svg" alt="" /> Earn a certificate upon completion after trial</li>
              </ul>

            </div>


            <div className="border-5 border-orange-500 p-8 text-left relative bg-white shadow w-70 ">

              <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-sm py-1 text-center">
                Most Popular
              </div>

              <h3 className="font-semibold text-lg mt-4">
                Skillbee Plus Monthly
              </h3>

              <p className="text-black text-sm mt-1">
                Complete multiple courses and earn credentials
              </p>

              <p className="mt-6">
                <span className="line-through text-gray-400">$24</span>
                <span className="text-3xl font-bold">$14.40</span>
                <span className="text-sm">/month</span>
              </p>

              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded">
                Save Now
              </button>

              <p className="text-sm text-black mt-2">
                Cancel anytime
              </p>

              <ul className="mt-6 space-y-3 text-sm text-black font-bold">
                <li className="flex gap-2"> <img src="check.svg" alt="" /> Access 10,000+ courses and Specializations from 170+ leading companies and universities</li>
                <li className="flex gap-2"><img src="check.svg" alt="" /> Earn unlimited certificates after your trial ends</li>
                <li className="flex gap-2"><img src="check.svg" alt="" /> Earn unlimited certificates after your trial endsLearn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</li>
                <li className="flex gap-2"><img src="check.svg" alt="" />Choose from more than 15 Professional Certificate programs from industry leaders like Google, Facebook, and more</li>
              </ul>

            </div>


            <div className="border border-orange-300 p-8 text-left mt-6 w-70">

              <h3 className="font-semibold text-lg">
                Skillbee Plus Annual
              </h3>

              <p className="text-black text-sm mt-1">
                Combine flexibility and savings
              </p>

              <p className="text-3xl font-bold mt-6">
                $160 <span className="text-sm font-normal">/year</span>
              </p>

              <button className="mt-4 border border-orange-500 text-orange-500 px-6 py-2 rounded font-bold">
                Try skillbee plus Annual
              </button>

              <p className="text-sm text-black mt-3 font-bold mb-4">
                14-day money-back guarantee
              </p>
               <p>
                Everything included in the monthly plan, plus:
               </p>
              <ul className="mt-6 space-y-3 text-sm text-black">

                <li className="flex gap-2"> <img src="check.svg" alt="" /> Save when you pay upfront</li>
                <li className="flex gap-2"> <img src="check.svg" alt="" /> Maximum flexibility to learn at your pace</li>
              </ul>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default Herosect4