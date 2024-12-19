"use client";

import React from "react";

const UploadButton: React.FC = () => {
  const handleClick = () => {
    alert("Upload functionality coming soon!");
  };

  return (
    <button
      className="bg-gray-700 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-600 transition"
      onClick={handleClick}
    >
      UPLOAD AUDIO
    </button>
  );
};

export default UploadButton;
