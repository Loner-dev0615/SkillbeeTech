import React from 'react';
import { Home, BarChart2, Bookmark, User, LogOut, PlayCircle, MessageSquare, Edit3, MessageCircle, Settings } from 'lucide-react';
import { FaPlayCircle } from "react-icons/fa";
import Landing from '../Component/Landing';

const Dashboard = () => {
  const recommendations = [
    {
      title: "Active Listening techniques",
      category: "Communication",
      duration: "4 min",
      icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
      bg: "bg-blue-50",
    },
    {
      title: "Writing Clear Emails",
      category: "Writing",
      duration: "5 min",
      icon: <Edit3 className="w-5 h-5 text-green-500" />,
      bg: "bg-green-50",
    },
    {
      title: "Managing Expectations",
      category: "Communication",
      duration: "6 min",
      icon: <MessageCircle className="w-5 h-5 text-purple-500" />,
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      <aside className="w-64 border-r border-gray-100 p-8 flex flex-col gap-4 justify-between">
        <nav className="space-y-4">
          <NavItem icon={<Home size={20} />} label="Home" active />
          <NavItem icon={<MessageSquare size={20} />} label="LessonOverview"  />
          <NavItem icon={<Edit3 size={20} />} label="Lesson Content" />
          <NavItem icon={<BarChart2 size={20} />} label="Tracks" />
          <NavItem icon={<MessageCircle size={20} />} label="Quiz" />
          <NavItem icon={<Bookmark size={20} />} label="Bookmarks" />
          <NavItem icon={<User size={20} />} label="Profile" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>
        
        <a href='/Landing'>
          <button className="flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors font-medium">
            <LogOut size={20} />
            <span>Sign-out</span>
          </button>
        </a>
      </aside>

      <main className="flex-1 p-16 max-w-7xl">
        <header className="mb-12">
          <p className="text-gray-400 text-sm font-medium mb-1">Tuesday, February 25</p>
          <h1 className="text-4xl font-bold tracking-tight">Good morning</h1>
        </header>

        <div className="relative bg-[#f35b23] rounded-[40px] p-16 text-white overflow-hidden mb-16 shadow-xl shadow-orange-100">
          <div className="relative z-10 max-w-md">
            <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Today's Lesson
            </span>
            <h2 className="text-6xl font-black mt-8 mb-12 leading-[1.1]">
              Excel Basics for Beginners
            </h2>
            <div className="flex items-center gap-2 mb-10 text-orange-100 font-medium">
              <span>Excel Basics</span>
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full mx-1"></span>
              <span>5 min</span>
            </div>
            <button className="bg-white text-[#f35b23] px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-orange-50 transition-all shadow-lg shadow-black/5">
              <FaPlayCircle fill="currentColor" className="text-[#f35b23] bg-white rounded-full" />
              Start Learning
            </button>
          </div>


          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-20 w-48 h-48 bg-white/10 rounded-full translate-y-1/2"></div>
        </div>

        <div className="flex justify-between items-end mb-8">
          <h3 className="uppercase tracking-[0.2em] text-xs text-gray-400 font-extrabold">Recommended for you</h3>
          <button className="text-[#f35b23] font-bold text-sm">View all</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((item, idx) => (
            <div key={idx} className="group border border-gray-100 p-6 rounded-3xl flex items-center justify-between hover:border-orange-200 hover:shadow-md transition-all cursor-pointer">
              <div className="flex gap-4 items-center">
                <div className={`${item.bg} p-4 rounded-2xl`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[15px] leading-tight mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 font-medium">
                    {item.category} <span className="mx-1">•</span> {item.duration}
                  </p>
                </div>
              </div>
              <PlayCircle className="w-8 h-8 text-[#f35b23] opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
    active ? 'bg-orange-50 text-[#f35b23] font-bold' : 'text-gray-400 hover:text-gray-600 font-medium'
  }`}>
    {icon}
    <span>{label}</span>
  </div>
);

export default Dashboard;