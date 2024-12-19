"use client";

import React from 'react';
import { FaHome, FaUser, FaCog, FaBandcamp } from 'react-icons/fa';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`w-64 bg-gray-950 text-white flex flex-col justify-between ${className}`}>
      <div className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white hover:text-black">
              <FaHome className="mr-3" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white hover:text-black">
              <FaUser className="mr-3" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white hover:text-black">
              <FaCog className="mr-3" />
              <span>Settings</span>
            </a>
            <ul>
              <li>
                <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white hover:text-black">
                  <FaUser className="mr-3" />
                  <span>Accounts</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <a
          href="#"
          className="flex items-center p-2 rounded-lg hover:bg-white hover:text-black"
        >
          <FaBandcamp className="mr-3" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
