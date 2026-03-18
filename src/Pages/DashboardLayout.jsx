import React from 'react';
import { Search } from 'lucide-react';
import { Outlet } from "react-router-dom";
import Sidebar from '../Component/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-white text-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Common Header */}
        <header className="bg-white border-b border-gray-50 p-8 flex justify-between items-center z-40">
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
              <h1 className="font-bold text-sm">Alex Johnson</h1>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Beginner</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm">
              <img src="sam.jpg" alt="Alex Johnson" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#FAFAFA]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
