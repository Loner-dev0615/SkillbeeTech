import React from 'react';
import { Home, BarChart2, Bookmark, User, LogOut, MessageSquare, Edit3, MessageCircle, Settings, HelpCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import NavItem from '../Component/NavItem';

const Sidebar = () => {
  const location = useLocation();

  const isPathActive = (path) => location.pathname === path;

  return (
    <aside className="w-72 border-r border-gray-100 p-8 flex flex-col justify-between h-screen sticky top-0 bg-white shadow-sm z-50">
      <div>
        <div className="flex items-center gap-3 px-4">
          <div className="">
            <img src="newlogo.svg" alt="" className="w-50 h-40" />
          </div>
         
        </div>

        <nav className="space-y-2">
         
          <NavItem to="/dashboard" icon={<Home size={20} />} label="Home" active={isPathActive('/dashboard')} />
           <NavItem to="/dashboard/lessonOverview" icon={<MessageSquare size={20} />} label="Lesson Overview" active={isPathActive('/dashboard/lessonOverview')} />
          <NavItem to="/dashboard/lessonContent" icon={<Edit3 size={20} />} label="Lesson Content" active={isPathActive('/dashboard/lessonContent')} />
          <NavItem to="/dashboard/tracks" icon={<BarChart2 size={20} />} label="My Tracks" active={isPathActive('/dashboard/tracks')} />
         <NavItem to="/dashboard/bookmarks" icon={<Bookmark size={20} />} label="Bookmarks" active={isPathActive('/dashboard/bookmarks')} />
          <NavItem to="/dashboard/quiz" icon={<MessageCircle size={20} />} label="Quiz" active={isPathActive('/dashboard/quiz')} />
          <NavItem to="/profile" icon={<User size={20} />} label="Profile" active={isPathActive('/profile')} />
          <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
       
        </nav>

      
       
        
        <a href="/Landing" className="block mt-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 font-semibold cursor-pointer group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Sign-out</span>
          </button>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
