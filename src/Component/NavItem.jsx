import React from 'react';

const NavItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-orange-100 text-orange-600 font-semibold' : 'hover:bg-gray-100'}`}>
    {icon}
    <span>{label}</span>
  </div>
);

export default NavItem;
