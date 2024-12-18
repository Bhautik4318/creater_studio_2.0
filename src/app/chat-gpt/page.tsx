"use client";

import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaLongArrowAltUp, FaShapes, FaShareAltSquare, FaAirbnb, FaRegGrinHearts, FaWordpress, FaAlignRight, FaAndroid, FaAngrycreative, FaAlgolia, FaAdn, FaAnkh, FaArchway, FaAudible, FaAmilia, FaAppleAlt, FaBacon, FaApper, FaBath, FaBandcamp } from 'react-icons/fa';
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
const Sidebar: React.FC = () => {
  return (
    <div className=" w-64 bg-gray-950 text-white flex flex-col">
      <div className="p-4 pl-20 text-2xl font-bold border-b border-gray-700">
        MyApp

      </div>
      <div className="flex-1 p-4 relative">
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
                  {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="mr-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg> */}
                  <span>Accounts</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="  fixed bottom-0   flex items-center  pl-3 pr-10 py-2 w-auto  mb-2.5 rounded-lg hover:bg-white hover:text-black">
            <FaBandcamp className="mr-3" />
              <span>Logout</span>
            </a>
          </li>
        </ul>

      </div>
      {/* <div className="p-4 border-t border-gray-700">
        
      </div> */}
    </div>
  );
};

const ChatGPT: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      try {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(input);
        setMessages([...messages, { text: input, sender: 'user' }, { text: result.response.text(), sender: 'bot' }]);
      } catch (error) {
        setMessages([...messages, { text: input, sender: 'user' }, { text: "Something went wrong.", sender: 'bot' }]);
      } finally {
        setIsLoading(false);
      }
      setInput('');
    }
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Chat Area */}
      <div className="  h-screen  flex-1 flex flex-col relative  ">
        {/* Messages Section */}
        <div className=" flex-1 p-4 overflow-y-auto bg-gray-100">
          {messages.length === 0 ? (
            <p className="text-gray-500">Start the conversation...</p>
          ) : (
            <div className="space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={` p-2 rounded-lg shadow ${message.sender === 'user'
                      ? 'bg-blue-500 text-white self-end'
                      : 'bg-gray-300 text-black self-start'
                    }`}
                >
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
              ))}
              {isLoading && (
                <div className=" flex justify-center items-center py-4">
                  <div className="w-6 h-6 border-4 border-t-4 border-gray-500 border-solid rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Input Section */}
        <div className=" fixed bottom-0 w-5/6  p-4 border-t bg-white">
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="flex-1 p-2 border rounded-l-lg focus:outline-none text-black"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPT;

