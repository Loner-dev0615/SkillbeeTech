import React from 'react';
import { Home, BarChart2, Bookmark, User, LogOut, PlayCircle, MessageSquare, Edit3, MessageCircle } from 'lucide-react';
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

  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      <aside className="w-64 border-r border-gray-100 p-8 flex flex-col justify-between">
        <nav className="space-y-4">
          <NavItem icon={<Home size={20} />} label="Home" active />
          <NavItem icon={<MessageSquare size={20} />} label="LessonOverview"  />
          <NavItem icon={<Edit3 size={20} />} label="Lesson Content" />
          <NavItem icon={<BarChart2 size={20} />} label="Tracks" />
          <NavItem icon={<MessageCircle size={20} />} label="Quiz" />
          <NavItem icon={<Bookmark size={20} />} label="Bookmarks" />
          <NavItem icon={<User size={20} />} label="Profile" />
        </nav>
        
        <a href='/Landing'>
          <button className="flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors font-medium">
            <LogOut size={20} />
            <span>Sign-out</span>
          </a>
        </button>
      </aside>

      
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-start mb-8">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search skills tracks, or lessons..." 
              className="w-full bg-[#EDECEC] rounded-xl py-3 pl-12 pr-4 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            
            <div className="relative">
              <img src="Frame 271.svg" alt="Marybro" className="w-30 h-10 rounded-full border border-gray-200" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </header>

        <p className="text-gray-400 text-xs font-bold uppercase mb-2">Monday, March 16</p>
        <h1 className="text-3xl font-bold mb-6">Good morning, Alex</h1>

        
        <div className="bg-[#f35b23] `rounded-[32px] p-10 text-white relative overflow-hidden mb-12 rounded-2xl">
          <div className="relative z-10">
            <span className="bg-white/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Today's Lesson</span>
            <h2 className="text-5xl font-extrabold mt-6 mb-8 max-w-lg leading-tight">
              Excel Basics for Beginners: Mastering Formulas
            </h2>
            <div className="flex gap-8 mb-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center">::</div>
                <span>Module: Data Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <span> Estimated: 5 mins</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-white text-[#f35b23] px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-50 transition-colors">
                <FaPlayCircle fill="currentColor" size={16} /> Start Learning
              </button>
              <button className="text-white font-medium text-sm">View Syllabus</button>
            </div>
          </div>
        </div>

        
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">My Tracks</h3>
          <button className="text-xs font-bold text-gray-600">View All Tracks &rsaquo;</button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {tracks.map((track, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
              <div className="flex justify-between mb-4">
                <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><BarChart2 size={20}/></div>
                <button className="text-gray-300">•••</button>
              </div>
              <h4 className="font-bold text-lg mb-1">{track.title}</h4>
              <p className="text-xs text-gray-400 mb-6">{track.path}</p>
              <div className="flex justify-between text-[10px] font-bold mb-2">
                <span>{track.lessons} lessons</span>
                <span>{track.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full" style={{ width: `${track.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </main>

    
      <aside className="w-80 p-8 flex flex-col gap-8">
        <div>
          <div className="flex justify-between mb-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recommended for you</h4>
            <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-widest">New Feed</h4>
          </div>
          <div className="space-y-6">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <BookOpen size={18} className="text-gray-600" />
                  <div>
                    <h5 className="text-sm font-bold leading-tight">{rec.title}</h5>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{rec.category} • {rec.duration}</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-orange-500 group-hover:text-orange-500">
                  <Play fill="currentColor" size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-auto bg-white border border-dashed border-gray-200 `rounded-[32px] p-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-gray-800" />
          </div>
          <h4 className="text-xl font-bold mb-2">Advance Your Career</h4>
          <p className="text-xs text-gray-400 mb-8 leading-relaxed">
            Unlock all premium tracks and certifications with our annual plan.
          </p>
          <button className="w-full bg-[#f35b23] text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-200">
            Upgrade to Premium
          </button>
        </div>
      </aside>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${
    active ? 'bg-orange-50 text-[#f35b23] font-bold' : 'text-gray-400 hover:text-gray-600 font-medium'
  }`}>
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Dashboard;