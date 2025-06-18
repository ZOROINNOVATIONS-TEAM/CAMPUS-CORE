import React from "react";
import {
  Home,
  Calendar,
  Settings,
  BarChart2,
  Bell,
  MessageSquare,
} from "lucide-react";

const navItems = [
  { icon: <Home />, label: "Home" },
  { icon: <Calendar />, label: "Schedule" },
  { icon: <Settings />, label: "Course Setup" },
  { icon: <BarChart2 />, label: "Analytics" },
  { icon: <Bell />, label: "Notification" },
  { icon: <MessageSquare />, label: "Message" },
];

function Navbar() {
  return (
    <div className="bg-white p-3 rounded-xl shadow mb-4 flex justify-around">
      {navItems.map((item, i) => (
        <button
          key={i}
          className="flex flex-col items-center text-gray-600 hover:text-blue-600 text-sm"
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default Navbar;
