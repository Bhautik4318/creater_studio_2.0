"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Page: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });
  const ChatArea = dynamic(() => import('./ChatArea'), { ssr: false });

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {isSidebarVisible && <Sidebar />}
        <div className='bg-gray-100 flex-1'>
          <button
            onClick={toggleSidebar}
            className="p-2 bg-gray-100 text-black rounded-lg hover:bg-gray-500 hover:text-white m-4 w-8 h-8 flex items-center justify-center md:hidden"
          >
            <img src="/icons8-sidebar-24.png" alt="Toggle Sidebar" className="w-6 h-6" />
          </button>
          <ChatArea />
        </div>
      </div>
    </div>
  );
};

