import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faBook,
  faChartLine,
  faUser,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const menuItems = [
    { icon: faHome, label: "Home" },
    { icon: faCalendarAlt, label: "Schedule" },
    { icon: faBook, label: "Course" },
    { icon: faChartLine, label: "Analytics" },
    { icon: faUser, label: "Mentor" },
    { icon: faBell, label: "Notification" },
    { icon: faEnvelope, label: "Message" },
  ];

  return (
    <aside className="w-20 md:w-64 bg-blue-900 text-white flex flex-col items-center md:items-start p-4 space-y-6">
      <div className="mb-8 mt-4 font-bold text-xl hidden md:block">Smart Campus</div>
      <nav className="flex flex-col space-y-4 w-full">
        {menuItems.map(({ icon, label }) => (
          <a
            key={label}
            href="#"
            className="flex items-center space-x-4 p-3 rounded-md hover:bg-blue-800 transition"
          >
            <FontAwesomeIcon icon={icon} className="w-6 h-6" />
            <span className="hidden md:inline text-lg">{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

