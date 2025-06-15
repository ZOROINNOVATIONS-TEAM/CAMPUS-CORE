import React from "react";
import { Home, Calendar, BookOpen, BarChart2, Bell, MessageSquare, Users } from "lucide-react";

const menuItems = [
  { icon: <Home size={18} />, label: "Home" },
  { icon: <Calendar size={18} />, label: "Schedule" },
  { icon: <BookOpen size={18} />, label: "Course Setup" },
  { icon: <BarChart2 size={18} />, label: "Analytics" },
  { icon: <Bell size={18} />, label: "Notification" },
  { icon: <MessageSquare size={18} />, label: "Message" },
  { icon: <Users size={18} />, label: "Mentor" },
];
export default function Menu() {
  return (
    <div className="flex flex-wrap gap-4 justify-between bg-white p-3 rounded-xl shadow-md">
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-sm text-gray-700">
          <div className="p-2 bg-gray-100 rounded-full mb-1">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
