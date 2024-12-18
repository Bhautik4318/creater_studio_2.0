"use client";

import React from 'react';
import { FaHome, FaUser, FaCog, FaBandcamp } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-950 text-white flex flex-col">
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
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-white hover:text-black">
                  <FaUser className="mr-3" />
                  <span>Accounts</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="fixed bottom-0 flex items-center pl-3 pr-10 py-2 w-auto mb-2.5 rounded-lg hover:bg-white hover:text-black"
            >
              <FaBandcamp className="mr-3" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
