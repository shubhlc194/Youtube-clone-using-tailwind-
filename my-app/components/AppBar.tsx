import React from "react";

export const AppBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] text-white shadow-md sticky top-0 z-50">
      
      {/* Left: Menu + Logo */}
      <div className="flex items-center gap-4">
        <button className="text-2xl cursor-pointer">☰</button>
        <div className="text-2xl font-bold text-white tracking-tight">
          <span className="text-red-600">You</span>Tube
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center w-full max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-l-full text-white bg-[#121212] border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 text-sm"
        />
        <button className="px-4 py-2 bg-[#222] border border-l-0 border-gray-600 rounded-r-full hover:bg-[#333]">
          🔍
        </button>
        <button className="ml-3 p-2 bg-[#222] rounded-full hover:bg-[#333]">
          🎤
        </button>
      </div>

      {/* Right: Sign-in Button */}
      <div className="flex items-center gap-2">
        <button className="border border-blue-500 text-blue-500 px-4 py-1.5 rounded-full font-medium hover:bg-blue-900/20 transition">
          Sign In
        </button>
      </div>
    </div>
  );
};
