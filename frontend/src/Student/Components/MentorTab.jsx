import React, { useState } from "react";
import {
  Send,
  Phone,
  Search,
  Settings,
  Paperclip,
} from "lucide-react";

const initialFacultyList = [
  {
    name: "Olivia Mitchell",
    time: "8:00 p.m.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Benjamin",
    time: "6:47 p.m.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Daniel Miller",
    time: "4:51 p.m.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "John Smith",
    time: "12:42 p.m.",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
];

const MentorTab = () => {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("CHAT");
  const [chatMessages, setChatMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [facultyList] = useState(initialFacultyList);
  const [selectedFaculty, setSelectedFaculty] = useState(facultyList[3]);
  const [profileImage, setProfileImage] = useState(null);

  const handleSend = () => {
    if (input.trim() !== "") {
      setChatMessages([
        ...chatMessages,
        {
          sender: "student",
          text: input,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setInput("");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const filteredFaculty = facultyList.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-[90vh] bg-gray-100 shadow rounded-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 bg-white p-4 border-r">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            {["CHAT", "CALLS"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold ${
                  activeTab === tab
                    ? "text-black border-b-2 border-black"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <img
                src="https://i.pravatar.cc/150?img=64"
                alt="user"
                className="w-6 h-6 rounded-full"
              />
            )}
            <span className="font-semibold">DEVANSH</span>
            <Settings className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center bg-gray-200 rounded-lg px-2 py-1 mb-4">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search faculty"
            className="bg-transparent px-2 py-1 outline-none w-full text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Faculty List */}
        <div className="space-y-3">
          {filteredFaculty.length === 0 ? (
            <p className="text-sm text-gray-400 px-2">No matches found.</p>
          ) : (
            filteredFaculty.map((f, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedFaculty(f)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
                  selectedFaculty.name === f.name
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={f.avatar}
                    alt={f.name}
                    className="w-8 h-8 rounded-full shadow"
                  />
                  <span className="text-sm font-medium">{f.name}</span>
                </div>
                <span className="text-xs text-gray-500">{f.time}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat / Call Area */}
      <div className="w-2/3 flex flex-col justify-between bg-white">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-3">
            <img
              src={selectedFaculty.avatar}
              alt={selectedFaculty.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-gray-800">
              {selectedFaculty.name}
            </span>
          </div>
          <Phone className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>

        {/* Dynamic Area */}
        {activeTab === "CHAT" ? (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {chatMessages.length === 0 ? (
                <p className="text-center text-gray-400 mt-20">
                  Start a conversation with {selectedFaculty.name.split(" ")[0]}...
                </p>
              ) : (
                chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      msg.sender === "student" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 rounded-lg ${
                        msg.sender === "student"
                          ? "bg-blue-200 text-right"
                          : "bg-gray-200"
                      } max-w-xs`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[11px] text-gray-500 mt-1">
                      {msg.time}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Chat Input */}
            <div className="flex items-center border-t px-4 py-3">
              <label className="cursor-pointer">
                <Paperclip className="w-4 h-4 text-gray-500 mr-3" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <input
                type="text"
                placeholder="Type a message"
                className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded-lg outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="ml-3 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
            Call history is currently empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorTab;
