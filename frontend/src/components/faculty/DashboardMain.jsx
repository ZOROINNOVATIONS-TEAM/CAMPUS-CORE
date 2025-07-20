import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaBookOpen,
  FaMapMarkerAlt,
  FaClipboardList,
} from "react-icons/fa";

const classOptions = ["Math", "English", "Science"];
const statusOptions = ["Present", "Absent", "Late"];

const attendanceStats = [
  {
    label: "Student Present",
    percent: 65,
    color: "bg-blue-100",
    textColor: "text-blue-700",
    icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
  },
  {
    label: "Student Late",
    percent: 21,
    color: "bg-yellow-100",
    textColor: "text-yellow-700",
    icon: <FaExclamationCircle className="text-yellow-400 text-2xl" />,
  },
  {
    label: "Student Absent",
    percent: 9,
    color: "bg-red-100",
    textColor: "text-red-700",
    icon: <FaTimesCircle className="text-red-400 text-2xl" />,
  },
];

const upcomingEvents = [
  {
    color: "border-red-500",
    title: "Applied Science Assignment",
    date: "19th June - Friday",
    time: "11:30 - 12:20",
  },
  {
    color: "border-yellow-400",
    title: "Technology Exam",
    date: "20th June - Sunday",
    time: "01:30 - 2:30",
  },
  {
    color: "border-yellow-400",
    title: "Technology Exam",
    date: "20th June - Sunday",
    time: "01:30 - 2:30",
  },
  {
    color: "border-green-400",
    title: "Artificial Intelligence Workshop",
    date: "21st June - Tuesday",
    time: "09:00 - 12:00",
  },
  {
    color: "border-blue-400",
    title: "UX Design Conference",
    date: "21st June - Monday",
    time: "10:00 - 10:50",
  },
  {
    color: "border-blue-400",
    title: "UX Design Conference",
    date: "22th June - Tuesday",
    time: "10:00 - 10:50",
  },
];

const todaySchedule = [
  {
    subject: "Introduction to Computer Science",
    time: "09:00AM~10:30AM",
    room: "Room 101",
    completed: true,
  },
  {
    subject: "Advanced Mathematics",
    time: "11:00AM~12:30 PM",
    room: "Room 203",
    completed: false,
  },
  {
    subject: "Physics Laboratory",
    time: "02:00 PM~04:00 PM",
    room: "Lab Building 8",
    completed: false,
  },
  {
    subject: "English Literature",
    time: "04:30 PM~06:00 PM",
    room: "Room 305",
    completed: false,
  },
];

const announcements = [
  {
    title: "Campus Closure Notice",
    tag: "Important",
    date: "Administration · June 10, 2025",
    desc: "Due to scheduled maintenance, the campus will be closed on Saturday, June 14. All weekend classes will be conducted online.",
    link: "#",
  },
  {
    title: "Summer Registration Open",
    tag: "",
    date: "Registrar Office · June 8, 2025",
    desc: "Registration for summer courses is now open. Please complete your registration by June 20 to secure your spot.",
    link: "#",
  },
  {
    title: "Library Extended Hours",
    tag: "",
    date: "Library Services · June 5, 2025",
    desc: "The main library will extend its operating hours during finals week. New hours: 7 AM - 2 AM from June 20-30.",
    link: "#",
  },
];

export default function DashboardMain() {
  const [selectedClass, setSelectedClass] = useState("Math");
  const [status, setStatus] = useState("Present");

  function handleAttendanceSubmit(e) {
    e.preventDefault();
    alert(
      `Attendance submitted: ${selectedClass} - ${status}`
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex flex-col items-center py-10">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Left: Submit Attendance */}
          <div className="flex-1 bg-white rounded-2xl shadow p-6 min-w-[350px]">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-lg">Submit Attendance</div>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                View Details
              </a>
            </div>
            <div className="flex gap-4 mb-2">
              {attendanceStats.map((stat) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center p-4 rounded-lg ${stat.color} flex-1`}
                >
                  <div>{stat.icon}</div>
                  <div className={`font-bold text-2xl my-2 ${stat.textColor}`}>{stat.percent}%</div>
                  <div className={`text-sm ${stat.textColor}`}>{stat.label}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleAttendanceSubmit} className="mt-5 flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-8 mb-2">
                {/* Select Class */}
                <div>
                  <div className="font-medium text-base mb-2">Select Class</div>
                  <div className="flex gap-2">
                    {classOptions.map((cls) => (
                      <button
                        key={cls}
                        type="button"
                        onClick={() => setSelectedClass(cls)}
                        className={`px-4 py-1 rounded-full border text-sm font-semibold
                          ${
                            selectedClass === cls
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white border-gray-300 text-gray-700 hover:bg-blue-50"
                          }
                        `}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                  <div className="text-xs mt-2 text-gray-400">
                    Select the subject you are attending.
                  </div>
                </div>
                {/* Status */}
                <div>
                  <div className="font-medium text-base mb-2">Status</div>
                  <div className="flex gap-2">
                    {statusOptions.map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setStatus(st)}
                        className={`px-4 py-1 rounded-full border text-sm font-semibold
                          ${
                            status === st
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white border-gray-300 text-gray-700 hover:bg-blue-50"
                          }
                        `}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                  <div className="text-xs mt-2 text-gray-400">
                    Choose your attendance status.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedClass("Math");
                    setStatus("Present");
                  }}
                  className="flex-1 py-2 rounded-lg font-semibold text-base bg-gradient-to-r from-[#5b8df6] to-[#7f7fd5] text-white hover:opacity-90 transition"
                  style={{ opacity: 0.75 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-lg font-semibold text-base bg-gradient-to-r from-[#5b8df6] to-[#ffd86e] text-white hover:opacity-90 transition"
                >
                  Submit Attendance
                </button>
              </div>
            </form>
          </div>
          {/* Right: Upcoming Events */}
          <div className="w-full md:w-80 min-w-[300px] bg-white rounded-2xl shadow p-6">
            <div className="font-semibold text-lg mb-4">Upcoming Events</div>
            <div className="text-xs text-gray-400 mb-2">
              31st June Friday - 22th Tuesday Sunday
            </div>
            <ul className="flex flex-col gap-2">
              {upcomingEvents.map((evt, idx) => (
                <li
                  key={idx}
                  className={`border-l-4 ${evt.color} bg-white rounded-lg px-4 py-2 flex justify-between items-center`}
                >
                  <div>
                    <div className="font-semibold text-base">{evt.title}</div>
                    <div className="text-xs text-gray-500">{evt.date}</div>
                  </div>
                  <div className="text-xs text-gray-500">{evt.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Today's Schedule */}
          <div className="flex-1 bg-white rounded-2xl shadow p-6 min-w-[350px]">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-lg">Today'sClassSchedule</div>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Full Schedule
              </a>
            </div>
            <div>
              {todaySchedule.map((ts, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 mb-3 px-2 py-3 rounded-lg ${
                    ts.completed
                      ? "bg-gray-50"
                      : "bg-blue-50"
                  }`}
                >
                  <FaBookOpen className="text-2xl text-gray-400" />
                  <div className="flex-1">
                    <div className="font-semibold text-base text-gray-800">
                      {ts.subject}
                    </div>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {ts.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /> {ts.room}
                      </span>
                    </div>
                  </div>
                  <div>
                    {ts.completed ? (
                      <span className="text-xs text-gray-400 font-semibold bg-gray-100 rounded px-3 py-1">
                        Completed
                      </span>
                    ) : (
                      <span className="text-xs text-blue-600 font-semibold bg-blue-100 rounded px-3 py-1">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Announcements */}
          <div className="w-full md:w-80 min-w-[300px] bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-lg">Announcements</div>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-4">
              {announcements.map((ann, idx) => (
                <li key={idx} className="mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-base">{ann.title}</span>
                    {ann.tag && (
                      <span className="bg-red-100 text-red-500 text-xs font-bold px-2 py-0.5 rounded ml-2">
                        {ann.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{ann.date}</div>
                  <div className="text-xs text-gray-600 mb-1">{ann.desc}</div>
                  <a
                    href={ann.link}
                    className="text-blue-600 text-xs hover:underline"
                  >
                    Read More
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}