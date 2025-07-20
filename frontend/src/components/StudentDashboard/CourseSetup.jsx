import React, { useState } from "react";
import {
  FaRegCheckCircle,
  FaBookOpen,
  FaRegCalendarAlt,
  FaFileAlt,
  FaClipboardList,
  FaFolderOpen,
} from "react-icons/fa";
import { MdOutlineAnnouncement } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

// Dummy data for demonstration; replace with API calls for real functionality
const initialCourses = [
  {
    title: "Advanced Mathematics",
    prof: "Prof. Sarah Wilson",
    code: "MATH301",
    schedule: "Mon, Wed 11:00 AM",
    syllabus: "Course outline and requirements",
    resources: "12 files available",
    assignments: "2 pending, 5 completed",
    assignmentsStatus: { pending: 2, completed: 5 },
    resourcesStatus: { count: 12 },
    scheduleStatus: "Mon, Wed 11:00 AM",
  },
  {
    title: "Introduction to Computer Science",
    prof: "Prof. Michael Chen",
    code: "CST01",
    schedule: "Tue, Thu 9:00 AM",
    syllabus: "Course outline and requirements",
    resources: "8 files available",
    assignments: "1 pending, 3 completed",
    assignmentsStatus: { pending: 1, completed: 3 },
    resourcesStatus: { count: 8 },
    scheduleStatus: "Tue, Thu 9:00 AM",
  },
  {
    title: "Physics Laboratory",
    prof: "Prof. David Thompson",
    code: "PHYS201",
    schedule: "Wed 2:00 PM",
    syllabus: "Course outline and requirements",
    resources: "15 files available",
    assignments: "3 pending, 2 completed",
    assignmentsStatus: { pending: 3, completed: 2 },
    resourcesStatus: { count: 15 },
    scheduleStatus: "Wed 2:00 PM",
  },
];

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
    date: "May 28, 2025",
    grade: "A",
    color: "bg-green-100 text-green-600",
  },
  {
    subject: "Advanced Mathematics",
    type: "Assignment",
    date: "June 2, 2025",
    grade: "B+",
    color: "bg-blue-100 text-blue-600",
  },
  {
    subject: "Physics",
    type: "Quiz",
    date: "June 5, 2025",
    grade: "B-",
    color: "bg-yellow-100 text-yellow-600",
  },
];

const initialSchedule = [
  {
    subject: "Introduction to Computer Science",
    time: "09:00 AM - 10:30 AM",
    room: "Room 101",
    status: "Completed",
    icon: <FaBookOpen className="text-gray-600" />,
  },
  {
    subject: "Advanced Mathematics",
    time: "11:00 AM - 12:30 PM",
    room: "Room 203",
    status: "Upcoming",
    icon: <FaBookOpen className="text-gray-600" />,
  },
  {
    subject: "Physics Laboratory",
    time: "02:00 PM - 04:00 PM",
    room: "Lab Building 8",
    status: "Upcoming",
    icon: <FaBookOpen className="text-gray-600" />,
  },
  {
    subject: "English Literature",
    time: "03:30 PM - 05:00 PM",
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
      "Due to scheduled maintenance, the campus will be closed on Saturday, June 14. All weekend classes will be conducted online.",
    link: "#",
    tagColor: "bg-red-100 text-red-600",
  },
  {
    title: "Summer Registration Open",
    type: "",
    date: "June 5, 2025",
    author: "Registrar Office",
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
      <line x1="18" y1="56" x2="150" y2="56" stroke="#e5e7eb" strokeWidth="2" />
      <line x1="18" y1="10" x2="18" y2="56" stroke="#e5e7eb" strokeWidth="2" />
      <polyline
        fill="none"
        stroke="#5B8DF6"
        strokeWidth="3"
        points="18,28 48,32 78,25 108,35 138,30"
      />
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

export default function CourseSetup() {
  // State for search/filter/add functionality
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState("");
  const [schedule, setSchedule] = useState(initialSchedule);
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  // Add Course (dummy implementation)
  function handleAddCourse() {
    setCourses([
      ...courses,
      {
        title: "New Course",
        prof: "Prof. New",
        code: "NEW101",
        schedule: "Fri 10:00 AM",
        syllabus: "Course outline and requirements",
        resources: "0 files available",
        assignments: "0 pending, 0 completed",
        assignmentsStatus: { pending: 0, completed: 0 },
        resourcesStatus: { count: 0 },
        scheduleStatus: "Fri 10:00 AM",
      },
    ]);
  }

  // Search/filter courses
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-0 flex flex-col">
      {/* Enrolled Courses */}
      <section className="w-full max-w-[900px] mx-auto px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <span className="font-semibold text-base">Enrolled Courses</span>
            <div className="flex gap-3 items-center">
              <div className="relative">
                <FiSearch className="absolute left-3 top-2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-200 w-[200px] text-sm focus:ring-[#3666F6] focus:border-[#3666F6]"
                  placeholder="Search courses..."
                />
              </div>
              <button
                className="bg-[#5B8DF6] hover:bg-[#3666F6] text-white px-4 py-2 rounded-lg shadow font-medium transition"
                onClick={handleAddCourse}
              >
                + Add Course
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-[#fafafa] rounded-lg border border-gray-100 p-4 flex flex-col gap-2"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-600">
                      <FaRegCheckCircle className="inline text-gray-400 mr-1" />
                      {course.prof}
                    </span>
                    <span className="text-xs text-gray-400 font-bold">{course.code}</span>
                  </div>
                  <span className="text-xs text-gray-500">{course.schedule}</span>
                  <a
                    href="#"
                    className="bg-[#5B8DF6] text-white px-4 py-1 rounded-md text-xs font-semibold hover:bg-[#3666F6] transition"
                  >
                    View Materials
                  </a>
                </div>
                {/* Course Sections */}
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="#"
                    className="flex flex-col gap-1 bg-white rounded-lg px-3 py-2 border border-gray-100 min-w-[120px] shadow-sm"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold text-[#3666F6]">
                      <FaFileAlt />
                      Syllabus
                    </span>
                    <span className="text-xs text-gray-500">{course.syllabus}</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col gap-1 bg-white rounded-lg px-3 py-2 border border-gray-100 min-w-[120px] shadow-sm"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold text-green-600">
                      <FaFolderOpen />
                      Resources
                    </span>
                    <span className="text-xs text-gray-500">{course.resources}</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col gap-1 bg-white rounded-lg px-3 py-2 border border-gray-100 min-w-[120px] shadow-sm"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold text-yellow-600">
                      <FaClipboardList />
                      Assignments
                    </span>
                    <span className="text-xs text-gray-500">{course.assignments}</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col gap-1 bg-white rounded-lg px-3 py-2 border border-gray-100 min-w-[120px] shadow-sm"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold text-purple-600">
                      <FaRegCalendarAlt />
                      Schedule
                    </span>
                    <span className="text-xs text-gray-500">{course.schedule}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lower main grid */}
      <main className="w-full max-w-[1200px] mx-auto px-4 py-4 flex-1">
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