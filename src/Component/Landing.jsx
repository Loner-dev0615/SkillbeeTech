import React from 'react';
import Herosect from './Herosect';

const Landing = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Master a new Skill,<br />
            <span className="text-[#EE5822]">5 minutes</span> at a time.
          </h1>
          <p className="mt-15 text-gray-600 max-w-md">
            Micro-learning for high achievers. Daily lessons, curated tracks, and
            proven habit-building techniques to help you grow every single day.
          </p>
          <div className="flex items-center gap-4 mt-30">
            <button className="bg-[#EE5822] text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 transition">
              Start your first lesson
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Download App
            </button>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-3">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=1" alt="avatar1" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=2" alt="avatar2" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=3" alt="avatar3" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=4" alt="avatar4" />
            </div>
            <p className="text-sm text-gray-600">
              10k+ Learners already Growing with us
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="Rectangle 1.svg"
            className="w-105 h-130 object-cover rounded-[30px] shadow-lg"
            alt="Hero"
          />
        </div>
      </section>\
      <Herosect />
    </div>
  );
};

export default Landing;
