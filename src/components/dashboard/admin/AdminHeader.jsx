// src/components/dashboard/admin/AdminHeader.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faBook,
  faChartBar,
  faBell,
  faEnvelope,
  faEllipsisH,
  faCaretDown,
  faSearch,
  faChalkboardTeacher,
  faFileContract,
  faUser,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

// Top Bar (Sticky — only navigation, logo, dark mode, profile)
export const AdminTopBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-blue-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/camplogo.jpg" alt="Campus Core Logo" className="h-15 w-14 rounded-full" />
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            CampusCore Admin
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-300 transition">
            <FontAwesomeIcon icon={faSearch} className="text-black" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-300 relative transition">
            <FontAwesomeIcon icon={faBell} className="text-black"  />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-black text-xs flex items-center justify-center">
              3
            </span>
          </button>
          {/* 🌙 / ☀️ */}
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-300 transition">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-black"/>
          </button>
          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-300 transition"
            >
              <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-indigo-700" />
              <span className="text-lg text-indigo-700">San</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-300 rounded-lg shadow-lg z-50">
                <Link to="/profile" className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </Link>
                <hr className="my-2 border-gray-200 dark:border-gray-600" />
                <button
                  onClick={() => console.log("Logout")}
                  className="block text-left w-full px-4 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-800"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Scrollable Banner + Tab Navigation
export const AdminBannerAndTabs = () => {
  const location = useLocation();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const tabs = [
  { label: "Home", path: "/admin/dashboard", icon: faHome },
  { label: "Schedule", path: "/admin/schedule", icon: faCalendarAlt },
  { label: "Course Setup", path: "/admin/course-setup", icon: faBook },
  { label: "Analytics", path: "/admin/analytics", icon: faChartBar },
  { label: "Fees", path: "/admin/fees", icon: faFileContract },
  { label: "Other", path: "/admin/map", icon: faEllipsisH },
];


  return (
    <div className="bg-transparent">
      {/* Welcome Banner */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-xl shadow">
          <h1 className="text-2xl font-semibold">Welcome, Admin 👋</h1>
          <p className="text-sm mt-1">{today}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
        <div className="flex gap-3 pb-3">
          {tabs.map((tab) => {
            const isActive = tab.path === location.pathname;
            return (
              <Link
                key={tab.label}
                to={tab.path}
                className={`flex gap-2 items-center px-10 py-4 rounded-lg transition text-sm font-medium whitespace-nowrap 
                  ${isActive
                    ? "bg-blue-200 dark:bg-blue-700 text-blue-700 dark:text-white shadow"
                    : "text-stone-900 dark:text-gray-300 hover:bg-blue-300 dark:hover:bg-gray-700"
                  }`}
              >
                <FontAwesomeIcon icon={tab.icon} />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};



