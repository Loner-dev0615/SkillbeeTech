import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Outlet } from "react-router-dom";
import Sidebar from '../Component/Sidebar';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f6f6] text-slate-900 relative">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Common Header */}
        <header className="bg-white border-b border-gray-100 p-4 md:p-8 flex justify-between items-center z-40">
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search tracks or lessons..."
                className="w-full bg-[#f3f4f6] rounded-xl py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm md:text-base"
              />
            </div>
          </div>

          <div className="flex ml-4 items-center gap-3 md:gap-4">
            <div className="text-right hidden sm:block">
              <h1 className="font-bold text-sm">Alex Johnson</h1>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Beginner</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm flex-shrink-0">
              <img src="/sam.jpg" alt="Alex Johnson" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#FAFAFA] p-4 md:p-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
