import React, { useState } from "react";
import {
  FaUserCircle,
  FaSearch,
  FaPaperPlane,
  FaMicrophone,
  FaUser,
  FaPhone,
  FaCog,
} from "react-icons/fa";

// Dummy data for demonstration; replace with API calls for real functionality
const facultyList = [
  { name: "Olivia Mitchell", time: "8.00 p.m." },
  { name: "Benjamin", time: "6.47 p.m." },
  { name: "Daniel Miller", time: "4.51 p.m." },
  { name: "John Smith", time: "12.42 p.m." },
];

const initialChats = {
  "Olivia Mitchell": [
    {
      sender: "Olivia Mitchell",
      text: "Hi, how can I help you today?",
      time: "8.01 p.m.",
      side: "left",
    },
  ],
  Benjamin: [
    {
      sender: "Benjamin",
      text: "Let me know if you need help with your project.",
      time: "6.48 p.m.",
      side: "left",
    },
  ],
  "Daniel Miller": [
    {
      sender: "Daniel Miller",
      text: "Welcome to office hours.",
      time: "4.52 p.m.",
      side: "left",
    },
  ],
  "John Smith": [
    { sender: "John Smith", text: "I will look at it by today.", time: "12.03 p.m.", side: "left" },
    { sender: "Me", text: "Sir, I also have question about the assignment due.", time: "12.15 p.m.", side: "right" },
    { sender: "John Smith", text: "You can submit it on Tuesday.", time: "12.24 p.m.", side: "left" },
    { sender: "Me", text: "Okay, thank you sir.", time: "12.26 p.m.", side: "right" },
    { sender: "John Smith", text: "Any other doubts?", time: "12.37 p.m.", side: "left" },
    { sender: "Me", text: "No sir, it's clear. Thank you.", time: "12.42 p.m.", side: "right" },
  ],
};

export default function Mentor() {
  const [input, setInput] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(facultyList[3]);
  const [activeTab, setActiveTab] = useState("CHAT");
  const [chatMessages, setChatMessages] = useState(initialChats);
  const [searchFaculty, setSearchFaculty] = useState("");

  // Handle message send
  function handleSend() {
    if (!input.trim()) return;
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + (now.getHours() >= 12 ? " p.m." : " a.m.");
    const newMsg = {
      sender: "Me",
      text: input,
      time: timeString,
      side: "right",
    };
    setChatMessages((prev) => ({
      ...prev,
      [selectedFaculty.name]: [...(prev[selectedFaculty.name] || []), newMsg],
    }));
    setInput("");
  }

  // Filter faculty by search input
  const filteredFaculty = facultyList.filter((f) =>
    f.name.toLowerCase().includes(searchFaculty.toLowerCase())
  );

  // For Calls tab, just show a placeholder (can integrate with call backend)
  const renderCallsTab = () => (
    <div className="flex-1 flex flex-col items-center justify-center text-gray-500 text-xl">
      <FaPhone className="text-3xl mb-2" />
      <div>Call feature coming soon...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex flex-col">
      {/* Header Tabs */}
      <div className="flex justify-between items-center px-5 pt-5 pb-2 bg-white border-b">
        <div className="flex gap-5">
          <button
            className={`px-6 py-2 rounded-full font-semibold text-base ${activeTab === "CHAT" ? "bg-[#dedede] text-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("CHAT")}
          >
            CHAT
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold text-base ${activeTab === "CALLS" ? "bg-[#dedede] text-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("CALLS")}
          >
            CALLS
          </button>
        </div>
        <div className="flex items-center gap-3">
          <FaUser className="text-black" />
          <span className="font-semibold text-sm">DEVANSH</span>
          <FaCog className="text-gray-400 ml-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 bg-white rounded-xl mx-2 my-3 shadow">
        {/* Faculty List */}
        <div className="w-[270px] bg-[#F5F6FA] border-r rounded-l-xl py-3 px-3 flex flex-col">
          <div className="flex items-center gap-2 mb-3 bg-[#dedede] rounded-lg px-2 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              value={searchFaculty}
              onChange={e => setSearchFaculty(e.target.value)}
              placeholder="Search faculty"
              className="bg-transparent text-sm outline-none w-full"
              style={{ color: "#333" }}
            />
          </div>
          <ul className="flex-1">
            {filteredFaculty.map((faculty, idx) => (
              <li
                key={faculty.name}
                className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer mb-2 ${
                  selectedFaculty.name === faculty.name
                    ? "bg-white shadow font-bold"
                    : "hover:bg-[#ededed]"
                }`}
                onClick={() => setSelectedFaculty(faculty)}
              >
                <div className="flex items-center gap-3">
                  <FaUserCircle className="text-black text-lg" />
                  <span className="text-base">{faculty.name}</span>
                </div>
                <span className="text-xs text-gray-500">{faculty.time}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Chat Window or Calls */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b px-6 py-3">
            <div className="flex items-center gap-2">
              <FaUser className="text-black" />
              <span className="font-semibold text-base">{selectedFaculty.name}</span>
            </div>
            <FaPhone className="text-gray-500" />
          </div>
          {/* Chat or Calls */}
          {activeTab === "CALLS" ? (
            renderCallsTab()
          ) : (
            <>
              {/* Chat Messages */}
              <div className="flex-1 px-6 py-3 bg-[#f5f6fa] overflow-y-auto">
                {(chatMessages[selectedFaculty.name] || []).map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-${msg.side === "right" ? "end" : "start"} mb-3`}
                  >
                    <div
                      className={`max-w-[60%] px-4 py-2 rounded-xl ${
                        msg.side === "right"
                          ? "bg-[#6e87ed] text-white self-end"
                          : "bg-white border text-gray-700"
                      }`}
                      style={{ fontSize: "16px" }}
                    >
                      {msg.text}
                    </div>
                    <span className="text-xs text-gray-400 mt-1">
                      {msg.time}
                    </span>
                  </div>
                ))}
              </div>
              {/* Chat Input */}
              <div className="flex items-center gap-3 px-6 py-4 bg-[#dedede] border-t rounded-b-xl">
                <FaUserCircle className="text-gray-500" />
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 px-3 py-2 rounded-lg border bg-white text-gray-800 outline-none"
                  style={{ fontSize: "15px" }}
                  onKeyDown={e => {
                    if (e.key === "Enter") handleSend();
                  }}
                />
                <FaMicrophone className="text-gray-600 text-lg cursor-pointer" />
                <button
                  className="bg-[#6e87ed] hover:bg-[#3666F6] text-white rounded-full p-2 shadow"
                  onClick={handleSend}
                >
                  <FaPaperPlane className="text-xl" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}