import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaBriefcase,
  FaUserFriends,
  FaClipboardList,
} from "react-icons/fa";
import { PiExam, PiChartLine } from "react-icons/pi"; // react-icons/pi
import { MdAssignment } from "react-icons/md"; // Assignment alternative

const navigationItems = [
  {
    name: "Home",
    icon: <FaHome className="text-2xl" />,
    href: "/faculty/dashboard",
  },
  {
    name: "Exam",
    icon: (
      <span className="text-2xl font-bold flex items-center justify-center" style={{ fontFamily: "Arial, sans-serif" }}>
        <svg width={26} height={26} viewBox="0 0 28 28" className="inline-block mr-0.5">
          <rect x="3" y="5" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="7.5" y="19" fontSize="10" fontFamily="Arial" fontWeight="bold" fill="currentColor">
            A+
          </text>
        </svg>
      </span>
    ),
    href: "/faculty/exam",
  },
  {
    name: "Course Setup",
    icon: <FaBook className="text-2xl" />,
    href: "/faculty/courses",
  },
  {
    name: "Grading",
    icon: <PiChartLine className="text-2xl" />,
    href: "/faculty/grading",
  },
  {
    name: "Assignment",
    icon: <FaClipboardList className="text-2xl" />,
    href: "/faculty/assignment",
  },
  {
    name: "Duties",
    icon: <FaBriefcase className="text-2xl" />,
    href: "/faculty/duties",
  },
  {
    name: "Mentor",
    icon: <FaUserFriends className="text-2xl" />,
    href: "/faculty/mentor",
  },
];

const FacultyNavbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full flex justify-center bg-[#ededed] py-4">
      <div className="w-full max-w-[1200px]">
        <div className="flex justify-between bg-white rounded-2xl px-4 py-4 shadow-sm">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center gap-1 min-w-[90px] cursor-pointer group transition
                  ${isActive ? "text-blue-700 font-semibold" : "text-gray-800 font-medium hover:text-blue-700"}
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={isActive ? "text-blue-700" : ""}>{item.icon}</span>
                <span
                  className={`mt-1 text-base ${
                    isActive ? "text-blue-700 font-semibold" : "group-hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default FacultyNavbar;