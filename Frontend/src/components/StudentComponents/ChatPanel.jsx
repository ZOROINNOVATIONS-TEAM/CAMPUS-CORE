import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatBox from "./ChatBox";

const ChatPanel = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const contacts = [
        { name: "Olivia Mitchell", time: "8:00 p.m." },
        { name: "Benjamin", time: "6:47 p.m." },
        { name: "Daniel Miller", time: "4:51 p.m." },
        { name: "John Smith", time: "12:42 p.m." }
    ];

    const dummyMessages = [
        { from: "them", text: "I will look at it by today.", time: "12:03 p.m." },
        { from: "me", text: "Sir, i also have question about the assignment due.", time: "12:05 p.m." },
        { from: "them", text: "You can submit it on Tuesday.", time: "12:07 p.m." },
        { from: "me", text: "Okay, thank you sir.", time: "12:08 p.m." },
        { from: "them", text: "Any other doubts ?", time: "12:37 p.m." },
        { from: "me", text: "No sir, it's clear. Thank you.", time: "12:42 p.m." }
    ];

    return (
        <div className="w-full min-h-screen p-4 ">
            <div className="w-full min-h-[80vh] p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 shadow-2xl dark:border dark:border-violet-700 rounded-xl flex justify-center items-start">
                <div className="w-full max-w-7xl flex flex-col md:flex-row overflow-hidden">
                    <ChatSidebar
                        contacts={contacts}
                        selected={selectedUser}
                        onSelect={setSelectedUser}
                    />
                    <ChatBox
                        messages={dummyMessages}
                        selectedUser={selectedUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatPanel;
