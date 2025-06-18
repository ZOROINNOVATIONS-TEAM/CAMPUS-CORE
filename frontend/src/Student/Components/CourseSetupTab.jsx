import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { CalendarDays, Clock, Search, Plus } from "lucide-react";

const attendanceData = [
  { name: "Mon", Present: 85, Absent: 5, Late: 10 },
  { name: "Tue", Present: 80, Absent: 5, Late: 15 },
  { name: "Wed", Present: 90, Absent: 2, Late: 8 },
  { name: "Thu", Present: 87, Absent: 3, Late: 10 },
  { name: "Fri", Present: 88, Absent: 5, Late: 7 },
];

const resultData = [
  { name: "Week 1", score: 72 },
  { name: "Week 2", score: 78 },
  { name: "Week 3", score: 85 },
  { name: "Week 4", score: 88 },
  { name: "Week 5", score: 90 },
];

const courseList = [
  {
    title: "Advanced Mathematics",
    prof: "Dr. R.N. Verma",
    code: "MATH1021",
    schedule: "Tue, Thu 10:00 AM",
  },
  {
    title: "Intro to Computer Science",
    prof: "Dr. R.K. Sharma",
    code: "CSE1001",
    schedule: "Mon, Wed 12:00 PM",
  },
  {
    title: "Physics Laboratory",
    prof: "Dr. David Thompson",
    code: "PHYS1021",
    schedule: "Sat 2:00 PM",
  },
];

const CourseSetupTab = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = courseList.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Enrolled Courses Box */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Enrolled Courses</h2>

        {/* Search and Add Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition-all">
            <Plus size={18} /> Add Course
          </button>
        </div>

        {/* Course Cards */}
        <div className="space-y-6">
          {filteredCourses.map((course, idx) => (
            <div
              key={idx}
              className="border border-indigo-100 bg-indigo-50 p-5 rounded-lg shadow-md space-y-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-indigo-800">{course.title}</h3>
                  <p className="text-sm text-gray-600">
                    {course.prof} - {course.code}
                  </p>
                </div>
                <button className="px-4 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                  View Materials
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-100 text-blue-800 px-6 py-5 rounded-lg text-sm font-medium">
                  📄 <strong>Syllabus:</strong> Available
                </div>
                <div className="bg-green-100 text-green-800 px-6 py-5 rounded-lg text-sm font-medium">
                  📚 <strong>Resources:</strong> Available
                </div>
                <div className="bg-yellow-100 text-yellow-800 px-6 py-5 rounded-lg text-sm font-medium">
                  📝 <strong>Assignments:</strong> 1 Completed
                </div>
                <div className="bg-purple-100 text-purple-800 px-6 py-5 rounded-lg text-sm font-medium">
                  📅 <strong>Schedule:</strong> {course.schedule}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance & Results */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Attendance Summary</h2>
          <div className="flex justify-between mb-4">
            <div className="text-center">
              <p className="text-blue-600 text-2xl font-bold">85%</p>
              <p className="text-sm text-gray-500">Present</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-600 text-2xl font-bold">10%</p>
              <p className="text-sm text-gray-500">Late</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-2xl font-bold">5%</p>
              <p className="text-sm text-gray-500">Absent</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Present" fill="#4f46e5" />
              <Bar dataKey="Late" fill="#facc15" />
              <Bar dataKey="Absent" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Results</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={resultData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[60, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Schedule & Announcements */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
          <ul className="space-y-4">
            {[
              {
                title: "Intro to Computer Science",
                time: "10:00 AM - 11:00 AM",
                room: "Room 204",
              },
              {
                title: "Advanced Mathematics",
                time: "11:15 AM - 12:15 PM",
                room: "Block B - 2nd floor",
              },
              {
                title: "Physics Lab",
                time: "3:00 PM - 5:00 PM",
                room: "Lab 5, Science Block",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="bg-blue-50 p-4 rounded-xl shadow-sm flex gap-3 items-start"
              >
                <div className="bg-blue-200 text-white p-2 rounded-full">
                  <CalendarDays className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    <Clock className="inline w-4 h-4 mr-1" />
                    {item.time} | {item.room}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow space-y-3">
          <h2 className="text-lg font-semibold mb-4">Announcements</h2>
          {[
            {
              text: "📢 Campus Closed on 15th August for Independence Day celebrations.",
              color: "bg-red-100 text-red-800",
            },
            {
              text: "📝 Summer registration is open until July 10. Please complete it in the portal.",
              color: "bg-green-100 text-green-800",
            },
            {
              text: "📚 Library extended hours this week: 9 AM – 7 PM.",
              color: "bg-yellow-100 text-yellow-800",
            },
            {
              text: "⏳ Assignment for CSE1001 due on June 25th.",
              color: "bg-indigo-100 text-indigo-800",
            },
          ].map((item, i) => (
            <p
              key={i}
              className={`rounded-lg px-4 py-3 text-sm font-medium shadow ${item.color}`}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSetupTab;
