import React, { useMemo } from 'react';
import { BarChart2, CheckCircle, Search } from 'lucide-react';
import { FaPlayCircle } from "react-icons/fa";

const Dashboard = () => {
  const recommendations = [
    { title: "Active Listening", category: "COMMUNICATION", duration: "4 min" },
    { title: "Writing Clear E...", category: "WRITING", duration: "5 min" },
    { title: "Strategic Deci...", category: "LEADERSHIP", duration: "12 min" },
    { title: "Advanced Pivo...", category: "EXCEL", duration: "8 min" },
    { title: "Python for Aut...", category: "CODING", duration: "15 min" },
  ];

  const tracks = [
    { title: "Excel Basics", path: "Professional Path", lessons: "3 of 8", progress: 38, color: "bg-orange-500" },
    { title: "Coding Fundamentals", path: "Professional Path", lessons: "6 of 10", progress: 60, color: "bg-orange-500" },
  ];

  const currentDate = useMemo(() => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  }, []);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  return (
    <div className="flex-1 bg-white font-sans text-slate-900 p-8 overflow-y-auto min-h-screen">
      <header className="flex justify-between items-start mb-8">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search skills tracks, or lessons..."
            className="w-full bg-[#EDECEC] rounded-xl py-3 pl-12 pr-4 focus:outline-none"
          />
        </div>

        <div className="flex ml-4 items-center gap-4">
          <div className="text-right">
            <h1 className="font-bold">Alex Johnson</h1>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Beginner</p>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm">
            <img src="sam.jpg" alt="Alex Johnson" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <p className="text-gray-400 text-xs font-bold uppercase mb-2">{currentDate}</p>
      <h1 className="text-3xl font-bold mb-6">{greeting}, Alex</h1>

      <div className="bg-[#f35b23] rounded-3xl p-10 text-white relative overflow-hidden mb-12 shadow-xl shadow-orange-100">
        <div className="relative z-10">
          <span className="bg-white/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Today's Lesson
          </span>
          <h2 className="text-5xl font-extrabold mt-6 mb-8 max-w-lg leading-tight">
            Excel Basics for Beginners: Mastering Formulas
          </h2>

          <div className="flex gap-8 mb-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                 <BarChart2 size={14} />
              </div>
              <span>Module: Data Foundation</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                 <FaPlayCircle size={14} />
              </div>
              <span>Estimated: 5 mins</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-white text-[#f35b23] px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-50 transition-all active:scale-95 cursor-pointer">
              <FaPlayCircle fill="currentColor" size={16} /> Start Learning
            </button>
            <button className="text-white font-medium text-sm hover:underline cursor-pointer">View Syllabus</button>
          </div>
        </div>
        {/* Decorative background circles */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">My Tracks</h3>
        <button className="text-xs font-bold text-gray-600 hover:text-orange-500 cursor-pointer">View All Tracks &rsaquo;</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {tracks.map((track, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
            <div className="flex justify-between mb-4">
              <div className="p-2 bg-orange-50 text-orange-500 rounded-lg">
                <BarChart2 size={20} />
              </div>
              <button className="text-gray-300 hover:text-gray-500">•••</button>
            </div>

            <h4 className="font-bold text-lg mb-1">{track.title}</h4>
            <p className="text-xs text-gray-400 mb-6">{track.path}</p>

            <div className="flex justify-between text-[10px] font-bold mb-2">
              <span>{track.lessons} lessons</span>
              <span>{track.progress}%</span>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#f35b23] h-full transition-all duration-500" style={{ width: `${track.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex justify-between mb-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recommended for you</h4>
            <h4 className="text-[10px] font-black text-orange-400 uppercase tracking-widest cursor-pointer">New Feed</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-4 rounded-2xl border border-gray-50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                    <img src="book.svg" alt="" className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold leading-tight group-hover:text-orange-500 transition-colors">{rec.title}</h5>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
                      {rec.category} • {rec.duration}
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-orange-500 group-hover:bg-orange-50 transition-all">
                  <img src="SVG.svg" alt="" className="w-3 h-3 group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-15 group-hover:saturate-1000 group-hover:invert-40" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-80 shrink-0">
          <div className="bg-white border border-dashed border-gray-200 rounded-3xl p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="text-orange-500" />
            </div>
            <h4 className="text-xl font-bold mb-2">Advance Your Career</h4>
            <p className="text-xs text-gray-400 mb-8 leading-relaxed">
              Unlock all premium tracks and certifications with our annual plan.
            </p>
            <button className="w-full bg-[#f35b23] text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-[#d84a1a] transition-colors active:scale-95 cursor-pointer">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
