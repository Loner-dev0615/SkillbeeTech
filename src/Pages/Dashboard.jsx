import React, { useMemo } from 'react';
import { BarChart2, CheckCircle, MoreHorizontal } from 'lucide-react';
import { FaPlayCircle } from "react-icons/fa";

const Dashboard = () => {
  const recommendations = [
    { title: "Active Listening", category: "COMMUNICATION", duration: "4 min" },
    { title: "Writing Clear E...", category: "WRITING", duration: "05 min" },
    { title: "Strategic Deci...", category: "LEADERSHIP", duration: "05 min" },
    { title: "Advanced Pivo...", category: "EXCEL", duration: "05 min" },
    { title: "Python for Aut...", category: "CODING", duration: "05 min" },
  ];

  const tracks = [
    { title: "Excel Basics", path: "Professional Path", lessons: "3 of 8", progress: 38 },
    { title: "Coding Fundamentals", path: "Professional Path", lessons: "6 of 10", progress: 60 },
  ];

  return (
    <div className="flex-1 bg-[#f8f9fa] font-sans text-slate-900 p-10 overflow-y-auto min-h-screen">

      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tight mb-2">MONDAY, MARCH 23</p>
      <h1 className="text-4xl font-bold mb-8 text-[#1a1d23]">Good morning, Alex </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="flex-[2]">
          
          <div className="bg-[#f35b23] rounded-[32px] p-12 text-white relative overflow-hidden mb-12 shadow-2xl shadow-orange-200">
            <div className="relative z-10">
              <span className="bg-white/20 text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                Today's Lesson
              </span>
              <h2 className="text-5xl font-bold mt-10 mb-10 max-w-lg leading-[1.1]">
                Excel Basics for Beginners: Mastering Formulas
              </h2>

              <div className="flex gap-10 mb-10 text-xs font-medium">
                <div className="flex items-center gap-2">
                  <div className="text-white/60"><BarChart2 size={16} /></div>
                  <span>Module: Data Foundation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-white/60"><FaPlayCircle size={16} /></div>
                  <span>Estimated: 5 mins</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <button className="bg-white text-[#f35b23] px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-orange-50 transition-all">
                  <FaPlayCircle size={16} /> Start Learning
                </button>
                <button className="text-white/90 font-bold text-xs hover:underline">View Syllabus</button>
              </div>
            </div>
            
            
            <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          </div>

          
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">My Tracks</h3>
            <button className="text-[11px] font-bold text-gray-500 flex items-center gap-1">
              View All Tracks <span className="text-lg leading-none">›</span>
            </button>
          </div>
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50">
                <div className="flex justify-between mb-6">
                  <div className="p-2.5 bg-blue-50 text-blue-500 rounded-xl">
                    <BarChart2 size={20} />
                  </div>
                  <button className="text-gray-300"><MoreHorizontal size={20} /></button>
                </div>

                <h4 className="font-bold text-lg mb-1">{track.title}</h4>
                <p className="text-[11px] text-gray-400 font-bold mb-8 uppercase tracking-tight">{track.path}</p>

                <div className="flex justify-between text-[11px] font-black mb-2">
                  <span>{track.lessons} lessons</span>
                  <span>{track.progress}%</span>
                </div>

                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#f35b23] h-full" style={{ width: `${track.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recommended for you</h4>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer">New Feed</h4>
            </div>

            <div className="space-y-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#fbe9e2] rounded-xl flex items-center justify-center text-[#f35b23]/60">
                      <div className="border-2 border-current w-5 h-4 rounded-sm flex flex-col gap-0.5 p-0.5">
                        <div className="w-full h-0.5 bg-current opacity-50"></div>
                        <div className="w-full h-0.5 bg-current opacity-50"></div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[14px] font-bold leading-tight">{rec.title}</h5>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
                        {rec.category} <span className="mx-1">•</span> {rec.duration}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-[#f35b23] hover:bg-orange-50">
                    <FaPlayCircle size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-white border-2 border-dashed border-gray-100 rounded-[40px] p-10 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-50">
              <CheckCircle className="text-slate-800" size={20} />
            </div>
            <h4 className="text-2xl font-bold mb-3">Advance Your Career</h4>
            <p className="text-[12px] text-gray-400 font-medium mb-10 leading-relaxed">
              Unlock all premium tracks and certifications with our annual plan.
            </p>
            <button className="w-full bg-[#f35b23] text-white py-4 rounded-2xl font-bold shadow-xl shadow-orange-100 hover:bg-[#d84a1a] transition-all">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;