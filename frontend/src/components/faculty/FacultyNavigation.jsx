import React, { useState } from "react";
import {
  FaHome,
  FaRegClipboard,
  FaBriefcase,
  FaUserFriends,
  FaBook,
} from "react-icons/fa";
import { PiExam, PiChartLine } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";

// Custom icon for "A+" (Exam) since react-icons does not have A+ icon
function APlusIcon({ className }) {
  return (
    <span className={className}>
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
        stroke="currentColor"
        className="inline-block"
      >
        <rect
          x="3"
          y="5"
          width="22"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="7.5"
          y="19"
          fontSize="10"
          fontFamily="Arial"
          fontWeight="bold"
          fill="currentColor"
        >
          A+
        </text>
      </svg>
    </span>
  );
}

const navItems = [
  {
    label: "Home",
    icon: <FaHome className="text-2xl" />,
    activeIcon: <FaHome className="text-2xl text-blue-700" />,
    href: "#",
  },
  {
    label: "Exam",
    icon: <APlusIcon className="text-2xl" />,
    activeIcon: <APlusIcon className="text-2xl text-blue-700" />,
    href: "#",
  },
  {
    label: "Course Setup",
    icon: <FaBook className="text-2xl" />,
    activeIcon: <FaBook className="text-2xl text-blue-700" />,
    href: "#",
  },
  {
    label: "Grading",
    icon: (
      <PiChartLine
        className="text-2xl"
        style={{ fontWeight: "bold" }}
      />
    ),
    activeIcon: (
      <PiChartLine
        className="text-2xl text-blue-700"
        style={{ fontWeight: "bold" }}
      />
    ),
    href: "#",
  },
  {
    label: "Assignment",
    icon: <FaRegClipboard className="text-2xl" />,
    activeIcon: <FaRegClipboard className="text-2xl text-blue-700" />,
    href: "#",
  },
  {
    label: "Duties",
    icon: <FaBriefcase className="text-2xl" />,
    activeIcon: <FaBriefcase className="text-2xl text-blue-700" />,
    href: "#",
  },
  {
    label: "Mentor",
    icon: <FaUserFriends className="text-2xl" />,
    activeIcon: <FaUserFriends className="text-2xl text-blue-700" />,
    href: "#",
  },
];

export default function FacultyNavBar() {
  const [active, setActive] = useState("Home");

  return (
    <div className="w-full flex justify-center bg-[#ededed] py-6">
      <nav className="w-full max-w-[1200px]">
        <div className="flex justify-between bg-white rounded-2xl px-6 py-5 shadow-sm">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className={`flex flex-col items-center gap-1 cursor-pointer group transition min-w-[105px] ${
                active === item.label ? "" : "hover:text-blue-700"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActive(item.label);
              }}
              aria-current={active === item.label ? "page" : undefined}
            >
              <span>
                {active === item.label ? item.activeIcon : item.icon}
              </span>
              <span
                className={`mt-1 text-base font-semibold ${
                  active === item.label
                    ? "text-blue-700"
                    : "text-gray-800 group-hover:text-blue-700"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}