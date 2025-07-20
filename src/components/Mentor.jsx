import React, { useState } from 'react';
import { FaPhone, FaSearch, FaUser, FaPaperPlane } from 'react-icons/fa';

export default function Mentor() {
  const [activeTab, setActiveTab] = useState('CHAT');
  const [selectedChat, setSelectedChat] = useState('John Smith');

  const facultyList = [
    { name: 'Olivia Mitchell', time: '8:00 p.m.' },
    { name: 'Benjamin', time: '6:47 p.m.' },
    { name: 'Daniel Miller', time: '4:51 p.m.' },
    { name: 'John Smith', time: '12:47 p.m.' },
  ];

  const messages = [
    { sender: 'John Smith', text: 'I will look at it by today.', time: '12:03 p.m.' },
    { sender: 'Devansh', text: 'Sir, I also have question about the assignment due.', time: '12:05 p.m.' },
    { sender: 'John Smith', text: 'You can submit it on Tuesday.', time: '12:14 p.m.' },
    { sender: 'Devansh', text: 'Okay, thank you sir.', time: '12:36 p.m.' },
    { sender: 'John Smith', text: 'Anyother doubts ?', time: '12:37 p.m.' },
    { sender: 'Devansh', text: "No sir, it's clear. Thank you.", time: '12:47 p.m.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="bg-white rounded-xl shadow-xl max-w-5xl mx-auto overflow-hidden">
        {/* <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
          <div>
            <h2 className="text-lg font-bold">Welcome back, Dev!</h2>
            <p className="text-sm">Wednesday, 12 June 2025 | Semester 2025</p>
          </div>
          <div>
            <p className="text-sm font-medium">Next Class</p>
            <p className="text-sm">Advanced Mathematics, 4:15 minutes</p>
          </div>
        </div> */}

        <div className="flex border-t">
          <div className="w-1/3 border-r p-4">
            <div className="flex justify-between mb-4">
              <button
                className={`font-medium ${activeTab === 'CHAT' ? 'text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('CHAT')}
              >
                CHAT
              </button>
              <button
                className={`font-medium ${activeTab === 'CALLS' ? 'text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('CALLS')}
              >
                CALLS
              </button>
            </div>
            <div className="relative mb-4">
              <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search faculty"
                className="pl-10 pr-3 py-2 w-full border rounded-lg text-sm"
              />
            </div>
            {facultyList.map((faculty) => (
              <div
                key={faculty.name}
                onClick={() => setSelectedChat(faculty.name)}
                className={`p-2 rounded-lg cursor-pointer ${selectedChat === faculty.name ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              >
                <p className="font-medium">{faculty.name}</p>
                <p className="text-xs text-gray-500">{faculty.time}</p>
              </div>
            ))}
          </div>

          <div className="w-2/3 p-4 flex flex-col justify-between bg-gray-50">
            <div>
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="font-semibold">{selectedChat}</h3>
                <FaPhone className="text-gray-500" />
              </div>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === 'Devansh' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`p-2 rounded-lg text-sm w-fit max-w-xs ${msg.sender === 'Devansh' ? 'bg-blue-200' : 'bg-white border'}`}
                    >
                      <p>{msg.text}</p>
                      <p className="text-[10px] text-right text-gray-500 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center mt-4 border-t pt-2">
              <input
                type="text"
                placeholder="Type a message"
                className="flex-1 px-4 py-2 border rounded-l-lg"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
