import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon,
  BookOpenIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { FaBook, FaEllipsisH } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlineEmojiObjects } from "react-icons/md";

const navigationItems = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/student/dashboard",
  },
  {
    name: "Schedule",
    icon: CalendarIcon,
    href: "/student/schedule",
  },
  {
    name: "CourseSetup",
    icon: FaBook,
    href: "/student/courses",
  },
  {
    name: "Result",
    icon: ChartBarIcon,
    href: "/student/result",
  },
  {
    name: "Fees",
    icon: TbFileInvoice,
    href: "/student/fees",
  },
  {
    name: "Other",
    icon: MdOutlineEmojiObjects,
    href: "/student/other",
  },
  {
    name: "Mentor",
    icon: UserGroupIcon,
    href: "/student/mentor",
  },
];

const StudentNavbar  = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center py-6 bg-[#ededed]">
      <div className="w-full max-w-[1200px]">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between bg-white rounded-2xl px-6 py-5 shadow-sm">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 min-w-[105px] cursor-pointer group transition ${
                  isActive
                    ? "text-blue-700 font-semibold"
                    : "text-gray-800 font-medium hover:text-blue-700"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={`text-2xl ${isActive ? "text-blue-700" : ""}`}>
                  <item.icon className={`h-6 w-6 ${isActive ? "text-blue-700" : ""}`} />
                </span>
                <span
                  className={`text-base ${
                    isActive
                      ? "text-blue-700 font-semibold"
                      : "group-hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex justify-end px-2">
          <button onClick={() => setMenuOpen((prev) => !prev)} className="text-gray-500 hover:text-gray-700">
            <FaEllipsisH className="h-7 w-7" />
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col bg-white rounded-2xl mt-2 px-4 py-4 shadow space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-2 px-2 py-3 rounded-md transition ${
                    isActive
                      ? "text-blue-700 font-semibold bg-blue-50"
                      : "text-gray-800 hover:text-blue-700"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <item.icon className={`h-6 w-6 ${isActive ? "text-blue-700" : ""}`} />
                  <span className="text-base">{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default StudentNavbar ;