import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Calendar,
  BookOpen,
  BarChart2,
  Bell,
  MessageSquare,
  Users,
  Receipt,    
  FileText,     
  MoreHorizontal      
} from "lucide-react";


const menuItems = [
  { icon: <Home size={18} />, label: "Home", path: "/" },
  { icon: <Calendar size={18} />, label: "Schedule", path: "/schedule" },
  { icon: <BookOpen size={18} />, label: "Course Setup", path: "/course-setup" },
  { icon: <Users size={18} />, label: "Mentor", path: "/mentors" },
  { icon: <Receipt size={18} />, label: "Fees", path: "/fees" },           // ✅ Added
  { icon: <FileText size={18} />, label: "Result", path: "/result" },
  { icon: <MoreHorizontal size={18} />, label: "Other", path: "/campus-map" }   // ✅ Added
];

export default function Menu() {
  return (
    <div className="flex flex-wrap mt-6 mb-6 gap-4 justify-between bg-white p-3 rounded-xl shadow-md">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="flex flex-col items-center text-sm text-gray-700 hover:text-blue-600 transition"
        >
          <div className="p-2 bg-gray-100 rounded-full mb-1">{item.icon}</div>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
