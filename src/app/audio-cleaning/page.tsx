import React from "react";
import UploadButton from "@/components/UploadButton"; 
import Sidebar from './Sidebar';

const AudioCleaningPage: React.FC = () => {
  return (
    <div>
      <Sidebar  />
      <main className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
        <section className="text-center max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Free Audio Tools Online</h1>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Master Your Audio Journey! Dive deep into the intricacies of sound with our curated suite of tools. Unveil the full potential of your audio with our cutting-edge suite. From subtle tweaks to transformative adjustments, embark on an auditory journey like no other. Discover the magic within each note.
          </p>
          <UploadButton /> {/* Use the new client component */}
        </section>
      </main>
    </div>
  );
};

export default AudioCleaningPage;
