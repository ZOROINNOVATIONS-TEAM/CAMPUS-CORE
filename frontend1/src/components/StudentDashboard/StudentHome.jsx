import React from "react";
import {
  FaRegCheckCircle,
  FaBookOpen,
  FaRegCalendarAlt,
  FaRegClock,
} from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { MdOutlineAnnouncement } from "react-icons/md";

// Dummy chart data
const attendance = {
  present: 85,
  late: 10,
  absent: 5,
  chart: [85, 80, 83, 88, 87, 84, 86, 85],
};

const recentResults = [
  {
    subject: "Computer Science",
    type: "Mid-term Exam",
    date: "May 26, 2025",
    grade: "a",
    color: "bg-green-100 text-green-600",
  },
  {
    subject: "Advanced Mathematics",
    type: "Assignment",
    date: "June 2, 2025",
    grade: "be",
    color: "bg-blue-100 text-blue-600",
  },
  {
    subject: "Physics",
    type: "Quiz",
    date: "June 5, 2025",
    grade: "b+",
    color: "bg-yellow-100 text-yellow-600",
  },
];

const schedule = [
  {
    subject: "Introduction to Computer Science",
    time: "09:00AM-10:30AM",
    room: "Room 101",
    status: "Completed",
    icon: <FaBookOpen className="text-gray-600" />,
  },
  {
    subject: "Advanced Mathematics",
    time: "11:00AM-12:30PM",
    room: "Room 203",
    status: "Upcoming",
    icon: <FaBookOpen className="text-gray-600" />,
  },
  {
    subject: "Physics Laboratory",
    time: "2:00PM-4:00PM",
    room: "Lab Building 8",
    status: "Upcoming",
    icon: <FaBookOpen className="text-gray-600" />,
  },
  {
    subject: "English Literature",
    time: "3:30PM-5:00PM",
    room: "Room 305",
    status: "Upcoming",
    icon: <FaBookOpen className="text-gray-600" />,
  },
];

const announcements = [
  {
    title: "Campus Closure Notice",
    type: "Important",
    date: "June 18, 2025",
    author: "Administration",
    description:
      "Due to scheduled maintenance, the campus will be closed on Saturday, June 21. All weekend classes will be cancelled.",
    link: "#",
    tagColor: "bg-red-100 text-red-600",
  },
  {
    title: "Summer Registration Open",
    type: "",
    date: "June 5, 2025",
    author: "Registration Office",
    description:
      "Registration for summer courses is now open. Please complete your registration by June 20 to secure your spot.",
    link: "#",
    tagColor: "bg-green-100 text-green-600",
  },
  {
    title: "Library Extended Hours",
    type: "",
    date: "June 8, 2025",
    author: "Library Services",
    description:
      "The main library will extend its operating hours during finals week. New hours: 7 AM - 2 AM from June 20-30.",
    link: "#",
    tagColor: "bg-blue-100 text-blue-600",
  },
];

// Dummy chart for results
function ResultLineChart() {
  return (
    <svg viewBox="0 0 160 60" width="100%" height="38" className="mt-1">
      {/* Axis lines */}
      <line x1="18" y1="56" x2="150" y2="56" stroke="#e5e7eb" strokeWidth="2" />
      <line x1="18" y1="10" x2="18" y2="56" stroke="#e5e7eb" strokeWidth="2" />
      {/* Data path */}
      <polyline
        fill="none"
        stroke="#5B8DF6"
        strokeWidth="3"
        points="18,28 48,32 78,25 108,35 138,30"
      />
      {/* Points */}
      {[28, 32, 25, 35, 30].map((y, idx) => (
        <circle
          key={idx}
          cx={18 + idx * 30}
          cy={y}
          r="3"
          fill="#fff"
          stroke="#5B8DF6"
          strokeWidth="2"
        />
      ))}
      {/* Legend */}
      <rect x="25" y="47" width="10" height="4" fill="#5B8DF6" />
      <text x="37" y="54.5" fontSize="8" fill="#5B8DF6">
        Current Semester
      </text>
      <rect x="100" y="47" width="10" height="4" fill="#e5e7eb" />
      <text x="112" y="54.5" fontSize="8" fill="#6b7280">
        Previous Semester
      </text>
    </svg>
  );
}

export default function StudentHome() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-0 flex flex-col justify-between">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8 flex-1">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
          {/* Attendance Summary */}
          <div className="bg-white rounded-xl shadow p-5 flex-1 col-span-2">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Attendance Summary</span>
              <a href="#" className="text-[#3666F6] text-sm font-medium hover:underline">
                View Details
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="flex flex-col items-center gap-1">
                <span className="bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-lg font-bold">
                  {attendance.present}%
                </span>
                <span className="text-xs text-gray-500">Present</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-2 rounded-full text-lg font-bold">
                  {attendance.late}%
                </span>
                <span className="text-xs text-gray-500">Late</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="bg-red-100 text-red-600 px-3 py-2 rounded-full text-lg font-bold">
                  {attendance.absent}%
                </span>
                <span className="text-xs text-gray-500">Absent</span>
              </div>
            </div>
            {/* Attendance Chart */}
            <div className="w-full h-[120px] px-1 flex items-end">
              <svg width="100%" height="100%" viewBox="0 0 260 100">
                {/* Bars */}
                {[85, 80, 83, 88, 87, 84, 86, 85].map((val, idx) => (
                  <g key={idx}>
                    <rect
                      x={20 + idx * 30}
                      y={100 - val}
                      width="18"
                      height={val}
                      fill="#5B8DF6"
                      rx="3"
                    />
                    <rect
                      x={20 + idx * 30}
                      y={100 - val + (val * 0.1)}
                      width="18"
                      height="10"
                      fill="#FDE68A"
                      rx="2"
                    />
                    <rect
                      x={20 + idx * 30}
                      y={100 - val + (val * 0.1) + 10}
                      width="18"
                      height="5"
                      fill="#FCA5A5"
                      rx="2"
                    />
                  </g>
                ))}
                {/* Weeks */}
                {[...Array(8)].map((_, idx) => (
                  <text
                    key={idx}
                    x={29 + idx * 30}
                    y={115}
                    fontSize="10"
                    textAnchor="middle"
                    fill="#94a3b8"
                  >
                    Week {idx + 1}
                  </text>
                ))}
                {/* Legend */}
                <rect x="180" y="15" width="14" height="7" fill="#5B8DF6" rx="2" />
                <text x="197" y="21" fontSize="10" fill="#5B8DF6">
                  Present
                </text>
                <rect x="180" y="35" width="14" height="7" fill="#FDE68A" rx="2" />
                <text x="197" y="41" fontSize="10" fill="#FDE68A">
                  Late
                </text>
                <rect x="180" y="55" width="14" height="7" fill="#FCA5A5" rx="2" />
                <text x="197" y="61" fontSize="10" fill="#FCA5A5">
                  Absent
                </text>
              </svg>
            </div>
          </div>
          {/* Recent Results */}
          <div className="bg-white rounded-xl shadow p-5 flex-1">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Recent Results</span>
              <a href="#" className="text-[#3666F6] text-sm font-medium hover:underline">
                All Results
              </a>
            </div>
            <ul className="flex flex-col gap-2 mb-2">
              {recentResults.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className={`${item.color} px-2 py-1 rounded-lg font-bold w-8 text-center`}>
                    {item.grade}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.subject}</div>
                    <div className="text-xs text-gray-400">
                      {item.type} · {item.date}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* Dummy line chart */}
            <div className="w-full">
              <ResultLineChart />
            </div>
          </div>
        </div>

        {/* Schedule and Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Schedule */}
          <div className="bg-white rounded-xl shadow p-5 flex-1 col-span-2">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Today's Schedule</span>
              <a href="#" className="text-[#3666F6] text-sm font-medium hover:underline">
                Full Schedule
              </a>
            </div>
            <ul className="flex flex-col gap-3">
              {schedule.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                    item.status === "Completed"
                      ? "bg-gray-50 border-l-4 border-green-400"
                      : "bg-blue-50 border-l-4 border-blue-400"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.subject}</div>
                    <div className="text-xs text-gray-500">
                      {item.time} · {item.room}
                    </div>
                  </div>
                  <div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Announcements */}
          <div className="bg-white rounded-xl shadow p-5 flex-1">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Announcements</span>
              <a href="#" className="text-[#3666F6] text-sm font-medium hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-3">
              {announcements.map((item, idx) => (
                <li
                  key={idx}
                  className={`rounded-lg px-3 py-3 border-l-4
                  ${item.tagColor === "bg-red-100 text-red-600"
                      ? "border-red-400"
                      : item.tagColor === "bg-green-100 text-green-600"
                      ? "border-green-400"
                      : "border-blue-400"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MdOutlineAnnouncement className="text-gray-400" />
                    <span className="font-semibold text-sm">{item.title}</span>
                    {item.type && (
                      <span className="ml-2 px-2 py-1 rounded bg-red-100 text-red-600 text-xs font-semibold">
                        {item.type}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    {item.author} · {item.date}
                  </div>
                  <div className="text-xs text-gray-700 mb-1">{item.description}</div>
                  <a href={item.link} className="text-xs text-[#3666F6] hover:underline">
                    Read More
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
     
    </div>
  );
}