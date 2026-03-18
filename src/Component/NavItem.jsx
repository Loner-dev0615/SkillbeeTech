import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon, label, active, to }) => (
  <Link to={to || "#"} className="block no-underline text-inherit">
    <div className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${active ? 'bg-orange-50 text-[#f35b23] font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
      <span className={active ? 'text-[#f35b23]' : 'text-gray-400'}>{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  </Link>
);

export default NavItem;
