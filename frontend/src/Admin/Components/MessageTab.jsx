import React, { useState } from "react";
import { Search, Send, Image, Smile } from "lucide-react";

const users = [
  {
    name: "Aman Verma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Jain",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const MessageTab = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSend = () => {
    if (message.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "You", text: message, image: uploadedImage },
      ]);
      setMessage("");
      setUploadedImage(null);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-[80vh] bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 border-r p-4">
        <h2 className="text-lg font-semibold mb-4">Chats</h2>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute top-2.5 left-2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-3 py-2 w-full border rounded-full bg-gray-100 focus:outline-none"
          />
        </div>

        {/* User List */}
        <div className="space-y-3 overflow-y-auto h-[60vh]">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                selectedUser.name === user.name ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={user.image}
                alt="user"
                className="w-10 h-10 rounded-full shadow-md object-cover"
              />
              <span className="font-medium text-gray-700">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="w-2/3 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 px-5 py-4 border-b bg-gray-50">
          <img
            src={selectedUser.image}
            alt="selected"
            className="w-10 h-10 rounded-full shadow-md object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800">
            {selectedUser.name}
          </h3>
        </div>

        {/* Messages */}
        <div className="flex-1 px-5 py-3 overflow-y-auto space-y-4 bg-white">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">No messages yet.</p>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[70%] text-sm shadow space-y-1 ${
                    msg.sender === "You"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="uploaded"
                      className="w-40 rounded-lg shadow"
                    />
                  )}
                  <div>{msg.text}</div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t flex items-center gap-2 bg-gray-50">
          {/* Upload Image */}
          <label
            htmlFor="upload"
            className="cursor-pointer bg-purple-100 p-2 rounded-full shadow-md"
          >
            <Image className="text-purple-600" size={20} />
            <input
              type="file"
              id="upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>

          {/* Emoji (static for now) */}
          <button className="bg-yellow-100 p-2 rounded-full shadow-md">
            <Smile className="text-yellow-600" size={20} />
          </button>

          {/* Input */}
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 px-4 py-2 border rounded-full bg-white focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageTab;
