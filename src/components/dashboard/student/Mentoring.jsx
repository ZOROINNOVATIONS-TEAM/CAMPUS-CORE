import React, { useState } from "react";
import { FaSearch, FaMicrophone, FaPaperPlane, FaPhone, FaUserCircle, FaCog } from "react-icons/fa";

const facultyList = [
  { name: "Livia", time: "8:00 p.m." },
  { name: "Selva", time: "5:47 p.m." },
  { name: "keerthana", time: "4:51 p.m." },
  { name: "John Deva", time: "12:42 p.m." },
];

const chatHistory = [
  { sender: "mentor", text: "I will look at it by today.", time: "12:03 p.m." },
  { sender: "student", text: "Sir, I also have question about the assignment due.", time: "12:15 p.m." },
  { sender: "mentor", text: "You can submit it on Tuesday.", time: "12:16 p.m." },
  { sender: "student", text: "Okay, thank you sir.", time: "12:26 p.m." },
  { sender: "mentor", text: "Any other doubts ?", time: "12:37 p.m." },
  { sender: "student", text: "No sir, it's clear. Thank you.", time: "12:42 p.m." },
];

export default function Mentoring() {
  const [message, setMessage] = useState("");

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Top Navigation */}
      <div className="flex items-center justify-between bg-slate-400 shadow px-6 py-3">
        <div className="flex gap-6 items-center">  
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r p-4 flex flex-col">
          {/* Tabs */}
          <div className="flex mb-4">
            <button className="flex-1 font-bold text-black border-b-2 border-black pb-2">CHAT</button>
            <button className="flex-1 text-gray-400 border-b-2 border-gray-200 pb-2">CALLS</button>
          </div>
          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded px-2 py-1 mb-4">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search faculty"
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
          {/* Faculty List */}
          <ul className="flex-1 space-y-2 overflow-auto">
            {facultyList.map((f, idx) => (
              <li
                key={f.name}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                  idx === 3 ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-2xl" />
                  <span className="font-medium">{f.name}</span>
                </div>
                <span className="text-xs text-gray-500">{f.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b px-6 py-3 bg-white">
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-2xl" />
              <span className="font-semibold">John Deva</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-lg text-gray-500 cursor-pointer" />
              <span className="text-gray-400">|</span>
              <h2>San</h2>
              <FaCog className="text-xl text-gray-500 cursor-pointer" />
            </div>
          </div>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "student" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-xl px-4 py-2 max-w-xs text-sm ${
                    msg.sender === "student"
                      ? "bg-indigo-200 text-black"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                  <div className="text-xs text-gray-500 mt-1 text-right">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Message Input */}
          <div className="flex items-center border-t px-4 py-3 bg-white">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 rounded-lg bg-gray-100 px-4 py-2 outline-none"
            />
            <button className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaMicrophone className="text-gray-500" />
            </button>
            <button className="ml-2 p-2 rounded-full bg-blue-500 hover:bg-blue-600">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

