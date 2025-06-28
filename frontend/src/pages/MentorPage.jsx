import React, { useState } from "react";
import ChatSidebar from "../components/MentorChat/ChatSidebar";
import ChatWindow from "../components/MentorChat/ChatWindow";
import Topbar from "../components/dashboard/Topbar";
import Menu from "../components/dashboard/Menu";
import WelcomeCard from "../components/dashboard/WelcomeCard";

const initialChats = {
  "Olivia Mitchell": [
    { from: "mentor", text: "Have you submitted the report?", time: "8:00 p.m." },
    { from: "student", text: "Not yet ma'am, will submit by 9.", time: "8:01 p.m." }
  ],
  "Benjamin": [
    { from: "mentor", text: "Are you attending the lab?", time: "6:47 p.m." },
    { from: "student", text: "Yes sir, already there.", time: "6:48 p.m." }
  ],
  "Daniel Miller": [
    { from: "mentor", text: "Assignment marks released.", time: "4:51 p.m." },
    { from: "student", text: "Thank you sir!", time: "4:52 p.m." }
  ],
  "John Smith": [
    { from: "mentor", text: "I will look at it by today.", time: "12:03 p.m." },
    { from: "student", text: "Sir, I also have question about the assignment due.", time: "12:15 p.m." },
    { from: "mentor", text: "You can submit it on Tuesday.", time: "12:24 p.m." },
    { from: "student", text: "Okay, thank you sir.", time: "12:26 p.m." },
    { from: "mentor", text: "Any other doubts ?", time: "12:37 p.m." },
    { from: "student", text: "No sir, it's clear. Thank you.", time: "12:42 p.m." }
  ],
};

const MentorPage = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("John Smith");
  const [chats, setChats] = useState(initialChats);

  const handleSend = (msg) => {
    const updated = {
      ...chats,
      [selectedFaculty]: [...chats[selectedFaculty], { from: "student", text: msg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
    };
    setChats(updated);
  };

  return (
    <div className="bg-[#d7e3dd] min-h-screen p-4">
      <Topbar />
       <WelcomeCard/>
      <Menu />
      <div className="mt-6 flex rounded-xl overflow-hidden shadow-lg">
        <ChatSidebar selected={selectedFaculty} onSelect={setSelectedFaculty} chats={chats} />
        <ChatWindow faculty={selectedFaculty} messages={chats[selectedFaculty]} onSend={handleSend} />
      </div>
    </div>
  );
};

export default MentorPage;
