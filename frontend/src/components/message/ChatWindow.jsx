import React, { useState, useRef, useEffect } from "react";

const names = {
  admin: "Admin Office",
  sharma: "Prof. Sharma",
  library: "Library"
};

export default function ChatWindow({ user, messages, onSend }) {
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, user]);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {names[user]?.charAt(0)}
        </div>
        <div className="font-medium text-gray-800">{names[user]}</div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            ref={idx === messages.length - 1 ? scrollRef : null}
            className={`flex ${msg.from === "you" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-sm px-4 py-2 rounded-lg text-sm ${
                msg.from === "you"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
              <p className="text-[11px] mt-1 text-gray-600 text-right">
                {msg.from === "you" ? "You" : names[msg.from]} • {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center p-3 border-t bg-white">
        <input
          type="text"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-4 py-2 border rounded-full text-sm outline-none text-gray-800"
        />
        <button
          onClick={handleSend}
          className="ml-3 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
