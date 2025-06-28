import React, { useState } from "react";
import { FaPhoneAlt, FaPaperPlane, FaMicrophone, FaPen } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import WelcomeCard from "../dashboard/WelcomeCard";

const ChatWindow = ({ faculty, messages, onSend }) => {
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") send();
  };

  return (

    <div className="w-2/3 bg-white p-4 flex flex-col justify-between">
     
      <div className="flex justify-between items-center mb-4">
       
        <div className="flex items-center gap-2 font-medium text-sm">
          <FaUserCircle className="text-black" size={20} />
          {faculty}
        </div>
        <FaPhoneAlt className="text-gray-500" size={16} />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {messages.map((m, i) => (
          <div key={i} className={`text-sm ${m.from === "student" ? "text-right" : "text-left"}`}>
            <div
              className={`inline-block px-3 py-2 rounded-xl ${
                m.from === "student" ? "bg-[#6d89ef] text-white" : "bg-[#f2f2f2]"
              }`}
            >
              {m.text}
            </div>
            <div className="text-xs text-gray-500 mt-1">{m.time}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="mt-4 flex items-center bg-gray-100 rounded-full px-4 py-2">
        <FaPen className="mr-2 text-gray-500" size={14} />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message"
          className="flex-1 text-sm bg-transparent outline-none"
        />
        <FaMicrophone className="mx-2 text-gray-500" size={14} />
        <button onClick={send} className="text-blue-500">
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
