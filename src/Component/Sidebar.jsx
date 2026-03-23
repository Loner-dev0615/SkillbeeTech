import React from 'react';
import { Home, BarChart2, Bookmark, User, LogOut, MessageSquare, Edit3, MessageCircle, Settings, HelpCircle, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import NavItem from '../Component/NavItem';

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const isPathActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside className="w-72 border-r border-gray-100 flex flex-col justify-between h-full bg-white shadow-sm z-50">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between gap-3 px-6 py-8">
          <div className="">
            <img src="/newlogo.svg" alt="Skillbee Logo" className="w-32 h-auto" />
          </div>
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 overflow-y-auto">
          <div onClick={handleLinkClick}>
            <NavItem to="/dashboard" icon={<Home size={20} />} label="Home" active={isPathActive('/dashboard')} />
          </div>
          <div onClick={handleLinkClick}>
            <NavItem to="/dashboard/lessonOverview" icon={<MessageSquare size={20} />} label="Lesson Overview" active={isPathActive('/dashboard/lessonOverview')} />
          </div>
          <div onClick={handleLinkClick}>
            <NavItem to="/dashboard/lessonContent" icon={<Edit3 size={20} />} label="Lesson Content" active={isPathActive('/dashboard/lessonContent')} />
          </div>
          <div onClick={handleLinkClick}>
            <NavItem to="/dashboard/tracks" icon={<BarChart2 size={20} />} label="My Tracks" active={isPathActive('/dashboard/tracks')} />
          </div>
          <div onClick={handleLinkClick}>
            <NavItem to="/dashboard/bookmarks" icon={<Bookmark size={20} />} label="Bookmarks" active={isPathActive('/dashboard/bookmarks')} />
          </div>
          <div onClick={handleLinkClick}>
            <NavItem to="/dashboard/quiz" icon={<MessageCircle size={20} />} label="Quiz" active={isPathActive('/dashboard/quiz')} />
          </div>
          <div onClick={handleLinkClick}>
            <NavItem to="/dashboard/profile" icon={<User size={20} />} label="Profile" active={isPathActive('/dashboard/profile')} />
          </div>
          <div onClick={handleLinkClick}>
            <NavItem to="/dashboard/settings" icon={<Settings size={20} />} label="Settings" active={isPathActive('/dashboard/settings')} />
          </div>
        </nav>

        <div className="p-4 border-t border-gray-50">
          <Link to="/landing" className="block w-full">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 font-semibold cursor-pointer group">
              <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Sign-out</span>
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
