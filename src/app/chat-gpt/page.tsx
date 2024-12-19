"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';

const Page: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex ">
        {!isSidebarVisible && <Sidebar />}
        <div className='bg-gray-100'>
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-100 text-black rounded-lg hover:bg-gray-500 hover:text-white m-4 w-8 h-8 flex items-center justify-center"
        >
          <img src="./public/sidebar.png" alt="Toggle Sidebar" className="w-6 h-6" />
        </button>
        </div>
        <ChatArea />
      </div>
    </div>
  );
}; 

export default Page;