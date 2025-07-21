import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faMoon, faSun, faCog } from "@fortawesome/free-solid-svg-icons";

export function TopNavigation({ isDark, setIsDark }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-white/50 dark:bg-purple-300/50 backdrop-blur-lg shadow-md dark:border-t border-blue-500">
      {/* Logo or App Name */}
      <div className="font-bold text-xl">CAMPUS-CORE</div>
      {/* User Controls */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </button>
        {/* Notifications */}
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="text-xl cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>
        {/* Settings */}
        <FontAwesomeIcon icon={faCog} className="text-xl cursor-pointer" />
        {/* User Menu */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-2 focus:outline-none"
            aria-haspopup="true"
            aria-expanded={showUserMenu}
          >
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <FontAwesomeIcon icon={faUser} />
            </div>
            
          <span className="hidden md:inline">San</span>

          </button>
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50">
              <div className="py-1">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setShowUserMenu(false)}
                >
                  Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setShowUserMenu(false)}
                >
                  Settings
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setShowUserMenu(false)}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
