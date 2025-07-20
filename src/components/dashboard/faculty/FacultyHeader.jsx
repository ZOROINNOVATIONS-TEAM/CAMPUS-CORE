// src/components/faculty/FacultyHeader.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Font Awesome Icons
import {
  faUser,
  faBell,
  faCaretDown,
  faHome,
  faBook,
  faCalculator,
  faChartBar,
  faFileContract,
  faBriefcase,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// NavLink Component (Moved outside FacultyHeader)
const NavLink = ({ label, path, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`whitespace-nowrap flex items-center space-x-2 ${
        isActive ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400" : "text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{label}</span>
    </Link>
  );
};

// FacultyHeader Component
const FacultyHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsCount, setNotificationsCount] = useState(3);
  const [isDark, setIsDark] = useState(false);

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Update dark class and localStorage when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Greeting logic
  const [greeting, setGreeting] = useState("Welcome");
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top Header */}
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          {/* Logo and Title (Logo on left) */}
          <div className="flex items-center space-x-2">
            <img src="/camplogo.jpg" alt="Campus Core Logo" className="h-12 w-12 rounded-full" />
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">CAMPUS-CORE</h1>
          </div>

          {/* Right Side: Notifications, Dark Mode Toggle, Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button className="relative p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <FontAwesomeIcon icon={faBell} className="text-gray-800 dark:text-gray-200" />
              {notificationsCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 bg-red-500 text-xs font-bold text-white rounded-full -mr-2 -mt-2">
                  {notificationsCount}
                </span>
              )}
            </button>

            {/* Dark Mode Toggle (added near notification) */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-gray-800 dark:text-gray-200" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img
                  src="https://placehold.co/30"
                  alt="Profile Picture"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Dr. San</span>
                <FontAwesomeIcon icon={faCaretDown} className="text-sm text-gray-800 dark:text-gray-200" />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-md py-2 z-50">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
                    Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
                    Settings
                  </Link>
                  <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  <button
                    onClick={() => console.log("Logout")}
                    className="block w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-900 text-red-500 dark:text-red-400"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-indigo-500 dark:bg-indigo-700 text-white max-w-6xl mx-auto py-8 p-6 rounded-lg shadow-md mb-8 mt-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">{greeting}, Dr. San</h2>
            <p className="text-sm">{formattedDate}</p>
            <p className="text-sm">Faculty ID: FT10529 | Spring Semester 2025</p>
          </div>

          {/* Next Class Card */}
          <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg text-indigo-500 dark:text-indigo-300">
            <p className="text-sm font-medium">Next Class</p>
            <p className="text-lg font-bold">Advanced Mathematics</p>
            <p className="text-sm">in 45 minutes</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="max-w-6xl mx-auto px-4 py-2 overflow-x-auto border-t border-b bg-gray-50 dark:bg-gray-800">
        <div className="flex space-x-8 whitespace-nowrap">
          <NavLink label="Home" path="/facultydashboard" icon={faHome} />
          <NavLink label="Exam" path="/faculty/exam" icon={faBook} />
          <NavLink label="Course Setup" path="/faculty/course-setup" icon={faCalculator} />
          <NavLink label="Grading" path="/faculty/grading" icon={faChartBar} />
          <NavLink label="Assignment" path="/faculty/assignment" icon={faFileContract} />
          <NavLink label="Duties" path="/faculty/duties" icon={faBriefcase} />
          <NavLink label="Mentor" path="/faculty/mentor" />
        </div>
      </nav>
    </>
  );
};

export default FacultyHeader;
