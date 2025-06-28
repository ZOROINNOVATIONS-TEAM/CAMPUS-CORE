import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const ChatSidebar = ({ selected, onSelect, chats }) => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="w-1/3 bg-white border-r p-4">
      {/* Toggle */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => setActiveTab("chat")}
          className={`px-4 py-1 rounded-full text-sm mr-2 ${
            activeTab === "chat" ? "bg-black text-white" : "text-gray-600"
          }`}
        >
          CHAT
        </button>
        <button
          onClick={() => setActiveTab("calls")}
          className={`px-4 py-1 rounded-full text-sm ${
            activeTab === "calls" ? "bg-black text-white" : "text-gray-600"
          }`}
        >
          CALLS
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-2 py-1 rounded mb-4">
        <FaSearch className="text-gray-500 mr-2" size={14} />
        <input
          placeholder="Search faculty"
          className="w-full text-sm bg-transparent outline-none"
        />
      </div>

      {/* Faculty List */}
      {Object.keys(chats).map((name) => (
        <div
          key={name}
          className={`flex items-center justify-between mb-3 p-2 rounded cursor-pointer ${
            selected === name ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
          onClick={() => onSelect(name)}
        >
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-black" size={20} />
            <span className="text-sm">{name}</span>
          </div>
          <span className="text-xs text-gray-500">
            {chats[name].slice(-1)[0]?.time}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChatSidebar;
