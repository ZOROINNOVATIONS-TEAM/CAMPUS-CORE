import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
// import {logo} from "../../assets/images/logo.png"; 
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [dark, setDark] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Payment of $1500 received.",
      read: false,
      date: "2025-06-29 18:40",
    },
    {
      id: 2,
      message: "Assignment deadline tomorrow.",
      read: false,
      date: "2025-06-29 08:00",
    },
    {
      id: 3,
      message: "Profile updated successfully.",
      read: true,
      date: "2025-06-27 10:20",
    },
  ]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef();
  const notifRef = useRef();
  const searchInputRef = useRef();

  // Example search data (in real apps, fetch from API)
  const allSearchable = [
    { type: "Page", label: "Dashboard", url: "/" },
    { type: "Page", label: "Profile", url: "/profile" },
    { type: "Page", label: "Fees", url: "/fees" },
    { type: "Page", label: "Messages", url: "/messages" },
    { type: "Page", label: "Schedule", url: "/schedule" },
    { type: "Page", label: "Mentors", url: "/mentors" },
    { type: "Action", label: "Logout", url: "/logout" },
    { type: "Help", label: "Support", url: "/support" },
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Focus search input when open
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Toggle theme (visual only)
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Mark all notifications as read
  function markAllRead() {
    setNotifications((n) => n.map((itm) => ({ ...itm, read: true })));
  }
  // Delete a notification
  function deleteNotification(id) {
    setNotifications((n) => n.filter((itm) => itm.id !== id));
  }

  // Format date (short)
  function formatDate(str) {
    const d = new Date(str.replace(" ", "T"));
    return d.toLocaleString("en-IN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // Enhanced search logic
  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]);
    } else {
      setSearchResults(
        allSearchable.filter((item) =>
          item.label.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  return (
    <header className="w-full bg-gradient-to-r from-white to-blue-50 shadow-sm z-50 relative">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/campus-core-logo.png"
            // src={logo}

            alt="Campus Core Logo"
            className="h-12 w-auto drop-shadow-lg"
            style={{ minWidth: 90 }}
          />
        </div>
        {/* Right section */}
        <div className="flex items-center gap-8 relative">
          {/* Search */}
          {/* <div className="relative">
            <button
              aria-label="Open search"
              className="focus:outline-none"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <FaSearch className="text-2xl text-gray-500 hover:text-blue-600 transition" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-10 z-50 w-80 bg-white rounded-full border border-gray-300 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)] p-3 animate-fadeIn">
                <div className="flex items-center gap-2 bg-white">
                  <FaSearch className="text-lg text-gray-400 ml-2" />
                  <input
                    ref={searchInputRef}
                    className="flex-1 bg-transparent text-lg px-2 py-1 outline-none rounded-full"
                    placeholder="Search pages, actions…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                  />
                  <button
                    className="text-gray-400 hover:text-blue-600 text-xl px-2"
                    onClick={() => setSearch("")}
                    type="button"
                    tabIndex={-1}
                  >
                    ×
                  </button>
                </div>
                {searchResults.length > 0 && (
                  <ul className="mt-3">
                    {searchResults.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.url}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 text-base text-gray-700"
                        >
                          <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-semibold">
                            {item.type}
                          </span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {search.trim() && searchResults.length === 0 && (
                  <div className="py-4 text-center text-gray-400 text-base">
                    No results found.
                  </div>
                )}
              </div>
            )}
          </div> */}
          {/* Toggle Switch */}
          <button
            className={`relative w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
              dark ? "bg-blue-600" : "bg-gray-200"
            }`}
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 rounded-full shadow transition-transform duration-300 ${
                dark
                  ? "translate-x-6 bg-white border border-blue-600"
                  : "translate-x-0 bg-white"
              }`}
            />
            <span className="sr-only">Toggle dark mode</span>
          </button>
          {/* Notification icon */}
          <div className="relative" ref={notifRef}>
            <button
              className="relative"
              onClick={() => setShowNotifications((v) => !v)}
              aria-label="Notifications"
            >
              <FaBell className="text-2xl text-gray-500 hover:text-blue-600 transition" />
              {notifications.some((n) => !n.read) && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 text-xs font-bold shadow">
                  {notifications.filter((n) => !n.read).length}
                </span>
              )}
            </button>
            {/* Notification dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-96 bg-white rounded-xl shadow-xl border z-50 py-4 animate-fadeIn">
                <div className="flex items-center justify-between px-4 py-2 border-b">
                  <span className="font-bold text-lg text-blue-700">
                    Notifications
                  </span>
                  <button
                    className="text-blue-600 text-sm hover:underline"
                    onClick={markAllRead}
                  >
                    Mark all as read
                  </button>
                </div>
                <ul className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 && (
                    <li className="text-gray-400 px-4 py-8 text-center">
                      No notifications.
                    </li>
                  )}
                  {notifications.map((n) => (
                    <li
                      key={n.id}
                      className={`flex items-start gap-3 px-4 py-3 border-b last:border-b-0 ${
                        n.read ? "bg-gray-50" : "bg-blue-50"
                      }`}
                    >
                      <span className="mt-1">
                        <FaBell className={n.read ? "text-gray-300" : "text-blue-600"} />
                      </span>
                      <div className="flex-1">
                        <div className="text-base text-gray-700">{n.message}</div>
                        <div className="text-xs text-gray-400 mt-1">{formatDate(n.date)}</div>
                      </div>
                      <button
                        className="ml-2 text-gray-400 hover:text-red-500 text-lg"
                        title="Delete"
                        onClick={() => deleteNotification(n.id)}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* User section */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 focus:outline-none hover:bg-blue-50 px-3 py-2 rounded-lg transition"
              onClick={() => setShowDropdown((v) => !v)}
              aria-label="Account"
            >
              <FaUserCircle className="text-2xl text-blue-600" />
              <span className="font-semibold text-lg text-gray-700">Dr.Kab</span>
              <svg className="w-4 h-4 ml-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 14l-5-5h10l-5 5z" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border z-50 py-2 animate-fadeIn">
                <a
                  href="/profile"
                  className="block px-6 py-3 text-lg hover:bg-blue-50 text-gray-700 rounded-lg"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-6 py-3 text-lg hover:bg-blue-50 text-gray-700 rounded-lg"
                >
                  Settings
                </a>
                <button
                  className="w-full text-left px-6 py-3 text-lg hover:bg-blue-50 text-gray-700 rounded-lg"
                  onClick={() => alert("Logged out!")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Add animation keyframes */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.23s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-12px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </header>
  );
}