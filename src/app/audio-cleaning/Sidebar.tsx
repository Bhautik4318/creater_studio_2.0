import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaBandcamp, FaAlignRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-950 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 w-64 z-50`}
    >
      {/* Toggle Button */}
      <button
        className="absolute top-4 right-[-1.5rem] bg-gray-800 text-white p-2 rounded-full shadow-md focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaAlignRight />
      </button>

      {/* Sidebar Content */}
      <div className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg hover:bg-white hover:text-black"
            >
              <FaHome className="mr-3" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg hover:bg-white hover:text-black"
            >
              <FaUser className="mr-3" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg hover:bg-white hover:text-black"
            >
              <FaCog className="mr-3" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="fixed bottom-0 mb-4 flex items-center p-2 rounded-lg hover:bg-white hover:text-black"
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
