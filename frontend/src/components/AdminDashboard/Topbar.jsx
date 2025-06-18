import React from "react";
import { Bell, User, MessageSquare, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center px-6 py-2 border-b bg-white shadow-sm">
      <img src="../src/assets/images/logo.png" alt="Campus Core Logo" className="h-10" />

      <div className="flex items-center gap-6">
        <Bell className="w-5 h-5" />
        <MessageSquare className="w-5 h-5" />
        <Settings className="w-5 h-5" />
        <User className="w-6 h-6" />
        <span className="font-semibold text-sm">DEVANSH ⌄</span>
      </div>
    </div>
  );
}
