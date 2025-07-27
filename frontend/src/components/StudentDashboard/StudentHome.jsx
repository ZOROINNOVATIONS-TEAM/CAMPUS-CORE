import React, { useState } from "react";
import {
  FaBookOpen,
  FaRegCalendarAlt,
  FaRegClock,
} from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { MdOutlineAnnouncement } from "react-icons/md";
import {
  Line,
  Bar,
} from "react-chartjs-2";
import { Chart, BarElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

// Register chart.js components
Chart.register(BarElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const initialAttendance = {
  present: 85,
  late: 10,
  absent: 5,
  chart: [85, 80, 83, 88, 87, 84, 86, 85],
};

const initialRecentResults = [
  {
    subject: "Computer Science",
    type: "Mid-term Exam",
    date: "May 26, 2025",
    grade: "A",
    color: "bg-green-100 text-green-600",
    value: 91,
  },
  {
    subject: "Advanced Mathematics",
    type: "Assignment",
    date: "June 2, 2025",
    grade: "B+",
    color: "bg-blue-100 text-blue-600",
    value: 82,
  },
  {
    subject: "Physics",
    type: "Quiz",
    date: "June 5, 2025",
    grade: "B",
    color: "bg-yellow-100 text-yellow-600",
    value: 78,
  },
];

const initialSchedule = [
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

const initialAnnouncements = [
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

export default function StudentHome() {
  // State for dynamic/interactive functionality
  const [attendance, setAttendance] = useState(initialAttendance);
  const [recentResults, setRecentResults] = useState(initialRecentResults);
  const [schedule, setSchedule] = useState(initialSchedule);
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [showAllResults, setShowAllResults] = useState(false);
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  // Attendance chart data
  const attendanceBarData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
    datasets: [
      {
        label: "Present",
        backgroundColor: "#5B8DF6",
        data: attendance.chart,
        borderRadius: 5,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
      {
        label: "Late",
        backgroundColor: "#FDE68A",
        data: attendance.chart.map(v => Math.round(v * 0.1)),
        borderRadius: 5,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
      {
        label: "Absent",
        backgroundColor: "#FCA5A5",
        data: attendance.chart.map(v => Math.round(v * 0.05)),
        borderRadius: 5,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
    ],
  };

  const attendanceBarOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: { stepSize: 10, color: "#64748b" },
        grid: { color: "#e5e7eb" },
      },
      x: {
        ticks: { color: "#64748b" },
        grid: { color: "#e5e7eb" },
      },
    },
  };

  // Results chart data
  const resultLineData = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5"],
    datasets: [
      {
        label: "Current Semester",
        data: [90, 85, 88, 92, 91],
        fill: false,
        borderColor: "#5B8DF6",
        tension: 0.4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#5B8DF6",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: "Previous Semester",
        data: [81, 80, 86, 88, 90],
        fill: false,
        borderColor: "#e5e7eb",
        borderDash: [5, 5],
        tension: 0.4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#e5e7eb",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const resultLineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#64748b" },
      },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        min: 60,
        max: 100,
        ticks: { stepSize: 5, color: "#64748b" },
        grid: { color: "#e5e7eb" },
      },
      x: {
        ticks: { color: "#64748b" },
        grid: { color: "#e5e7eb" },
      },
    },
  };

  // Show all results (demo: show more dummy results)
  const allResults = [
    ...recentResults,
    {
      subject: "Chemistry",
      type: "Assignment",
      date: "June 8, 2025",
      grade: "A-",
      color: "bg-purple-100 text-purple-600",
      value: 87,
    },
    {
      subject: "English Literature",
      type: "Quiz",
      date: "June 10, 2025",
      grade: "B",
      color: "bg-pink-100 text-pink-600",
      value: 75,
    },
  ];

  // Full schedule (demo: show more dummy schedule)
  const allSchedule = [
    ...schedule,
    {
      subject: "World History",
      time: "5:00PM-6:00PM",
      room: "Room 302",
      status: "Upcoming",
      icon: <FaBookOpen className="text-gray-600" />,
    },
    {
      subject: "Biology",
      time: "7:00AM-8:00AM",
      room: "Room 201",
      status: "Upcoming",
      icon: <FaBookOpen className="text-gray-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-0 flex flex-col justify-between">
      <main className="w-full max-w-[1400px] mx-auto px-4 py-8 flex-1">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Attendance Summary */}
          <div className="bg-white rounded-xl shadow p-6 flex-1 col-span-2">
            <div className="flex items-center justify-between mb-5">
              <span className="font-semibold text-xl">Attendance Summary</span>
              <a href="#" className="text-[#3666F6] text-sm font-medium hover:underline">
                View Details
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 mb-6">
              <div className="flex flex-col items-center gap-1">
                <span className="bg-blue-100 text-blue-600 px-5 py-3 rounded-full text-2xl font-bold">
                  {attendance.present}%
                </span>
                <span className="text-sm text-gray-500">Present</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="bg-yellow-100 text-yellow-600 px-5 py-3 rounded-full text-2xl font-bold">
                  {attendance.late}%
                </span>
                <span className="text-sm text-gray-500">Late</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="bg-red-100 text-red-600 px-5 py-3 rounded-full text-2xl font-bold">
                  {attendance.absent}%
                </span>
                <span className="text-sm text-gray-500">Absent</span>
              </div>
            </div>
            {/* Attendance Chart */}
            <div className="w-full h-[260px] px-2 flex items-end">
              <Bar data={attendanceBarData} options={attendanceBarOptions} />
            </div>
          </div>
          {/* Recent Results */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <div className="flex items-center justify-between mb-5">
              <span className="font-semibold text-xl">Recent Results</span>
              <button
                onClick={() => setShowAllResults(r => !r)}
                className="text-[#3666F6] text-sm font-medium hover:underline"
              >
                {showAllResults ? "Show Less" : "All Results"}
              </button>
            </div>
            <ul className="flex flex-col gap-3 mb-4">
              {(showAllResults ? allResults : recentResults).map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className={`${item.color} px-3 py-2 rounded-lg font-bold w-12 text-center text-lg`}>
                    {item.grade}
                  </div>
                  <div>
                    <div className="text-base font-medium">{item.subject}</div>
                    <div className="text-xs text-gray-400">
                      {item.type} · {item.date}
                    </div>
                  </div>
                  <div className="ml-auto text-right text-gray-500 font-semibold text-base">
                    {item.value ? `${item.value}%` : ""}
                  </div>
                </li>
              ))}
            </ul>
            {/* Line chart for results */}
            <div className="w-full h-[170px]">
              <Line data={resultLineData} options={resultLineOptions} />
            </div>
          </div>
        </div>

        {/* Schedule and Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Schedule */}
          <div className="bg-white rounded-xl shadow p-6 flex-1 col-span-2">
            <div className="flex items-center justify-between mb-5">
              <span className="font-semibold text-xl">Today's Schedule</span>
              <button
                onClick={() => setShowFullSchedule(s => !s)}
                className="text-[#3666F6] text-sm font-medium hover:underline"
              >
                {showFullSchedule ? "Show Less" : "Full Schedule"}
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {(showFullSchedule ? allSchedule : schedule).map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-4 px-5 py-4 rounded-lg text-lg
                    ${
                      item.status === "Completed"
                        ? "bg-gray-50 border-l-4 border-green-400"
                        : "bg-blue-50 border-l-4 border-blue-400"
                    }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-base">{item.subject}</div>
                    <div className="text-xs text-gray-500">
                      {item.time} · {item.room}
                    </div>
                  </div>
                  <div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
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
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <div className="flex items-center justify-between mb-5">
              <span className="font-semibold text-xl">Announcements</span>
              <a href="#" className="text-[#3666F6] text-sm font-medium hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-4">
              {announcements.map((item, idx) => (
                <li
                  key={idx}
                  className={`rounded-lg px-4 py-4 border-l-4
                  ${item.tagColor === "bg-red-100 text-red-600"
                      ? "border-red-400"
                      : item.tagColor === "bg-green-100 text-green-600"
                      ? "border-green-400"
                      : "border-blue-400"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MdOutlineAnnouncement className="text-gray-400" />
                    <span className="font-semibold text-base">{item.title}</span>
                    {item.type && (
                      <span className="ml-2 px-2 py-1 rounded bg-red-100 text-red-600 text-xs font-semibold">
                        {item.type}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    {item.author} · {item.date}
                  </div>
                  <div className="text-sm text-gray-700 mb-1">{item.description}</div>
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