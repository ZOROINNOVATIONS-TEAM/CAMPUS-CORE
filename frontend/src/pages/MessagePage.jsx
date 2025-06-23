import React, { useState } from "react";
import MessageSidebar from "../components/message/MessageSidebar";
import ChatWindow from "../components/message/ChatWindow";

const initialMessages = {
  admin: [
    { from: "admin", text: "Welcome to the new semester!", time: "2025-06-22 09:58" },
    { from: "you", text: "Thank you!", time: "2025-06-22 10:01" }
  ],
  sharma: [
    { from: "sharma", text: "Don't forget the assignment deadline!", time: "2025-06-21 18:45" }
  ],
  library: [
    { from: "library", text: "Your requested books are available for pickup.", time: "2025-06-20 16:00" }
  ]
};

export default function MessagePage() {
  const [selectedUser, setSelectedUser] = useState("admin");
  const [allMessages, setAllMessages] = useState(initialMessages);

  const handleSend = (newText) => {
    if (!newText.trim()) return;
    setAllMessages((prev) => ({
      ...prev,
      [selectedUser]: [
        ...(prev[selectedUser] || []),
        { from: "you", text: newText, time: new Date().toLocaleString() }
      ]
    }));
  };

  return (
    <div className="flex h-[90vh] bg-white rounded-xl shadow-md overflow-hidden">
      <MessageSidebar
        selected={selectedUser}
        onSelect={setSelectedUser}
        latestMessages={allMessages}
      />
      <ChatWindow
        user={selectedUser}
        messages={allMessages[selectedUser] || []}
        onSend={handleSend}
      />
    </div>
  );
}
