import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
} from "recharts";
import { Bell, User } from "lucide-react";
import logo from "../assets/logo.png"; // Update path as needed

const attendanceData = [
  { week: "Week 1", Present: 85, Late: 10, Absent: 5 },
  { week: "Week 2", Present: 80, Late: 12, Absent: 8 },
  { week: "Week 3", Present: 82, Late: 11, Absent: 7 },
  { week: "Week 4", Present: 84, Late: 10, Absent: 6 },
  { week: "Week 5", Present: 85, Late: 10, Absent: 5 },
  { week: "Week 6", Present: 83, Late: 9, Absent: 8 },
  { week: "Week 7", Present: 86, Late: 8, Absent: 6 },
  { week: "Week 8", Present: 85, Late: 10, Absent: 5 },
];

const performanceData = [
  { subject: "CS", score: 92 },
  { subject: "Math", score: 85 },
  { subject: "Physics", score: 88 },
];

// const courses = [
//   {
//     name: "Advanced Mathematics",
//     modules: 8,
//     resources: 5,
//     assignments: 2,
//     schedule: "Mon, Wed",
//   },
//   {
//     name: "Introduction to Computer Science",
//     modules: 6,
//     resources: 4,
//     assignments: 3,
//     schedule: "Tue, Thu",
//   },
//   {
//     name: "Physics Laboratory",
//     modules: 5,
//     resources: 3,
//     assignments: 1,
//     schedule: "Fri",
//   },
// ];
const courses = [
  {
    name: "Advanced Mathematics",
    professor: "Prof. Sarah Wilson",
    code: "MATH301",
    resources: 12,
    assignments: "2 pending, 5 completed",
    schedule: "Mon, Wed 11:00 AM",
  },
  {
    name: "Introduction to Computer Science",
    professor: "Prof. Michael Chen",
    code: "CS101",
    resources: 8,
    assignments: "1 pending, 3 completed",
    schedule: "Tue, Thu 9:00 AM",
  },
  {
    name: "Physics Laboratory",
    professor: "Prof. David Thompson",
    code: "PHYS201",
    resources: 15,
    assignments: "3 pending, 2 completed",
    schedule: "Wed 2:00 PM",
  },
];

export default function CourseSetupStudent() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      {/* <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Campus Core" className="h-8" />
          <span className="font-bold text-lg">CAMPUS CORE</span>
        </div>
        <div className="flex items-center gap-4">
          <Bell size={20} />
          <User size={20} />
          <span className="font-semibold">DEVANSH</span>
        </div>
      </header> */}

      {/* Welcome Card
      <div className="mx-8 mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Dev!</h1>
          <p>Wednesday, June 11, 2025 | Spring Semester 2025</p>
          <p className="text-sm">Student ID: 670234585</p>
        </div>
        <div className="bg-indigo-300 bg-opacity-10 rounded-xl px-6 py-4">
          <p className="text-sm">Next Class</p>
          <p className="text-lg font-bold">Advanced Mathematics in 45 minutes</p>
        </div>
      </div> */}

      {/* Enrolled Courses */}
      {/* <section className="mx-8 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Enrolled Courses</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Course</button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-bold text-blue-700">{course.name}</h3>
              <p className="text-sm text-gray-600">Modules: {course.modules}</p>
              <p className="text-sm text-gray-600">Resources: {course.resources}</p>
              <p className="text-sm text-gray-600">Assignments: {course.assignments}</p>
              <p className="text-sm text-gray-600">Schedule: {course.schedule}</p>
              <button className="mt-2 text-blue-600 text-sm font-semibold hover:underline">View Materials</button>
            </div>
          ))}
        </div>
      </section> */}
<section className="mx-8 mt-8">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold">Enrolled Courses</h2>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search courses..."
        className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-yellow-50"
      />
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
        + Add Course
      </button>
    </div>
  </div>

  <div className="space-y-6">
    {courses.map((course, idx) => (
      <div key={idx} className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
            <p className="text-sm text-gray-500">
              <span className="inline-block mr-2">👨‍🏫 {course.professor}</span>
              <span className="inline-block text-gray-400">●</span>
              <span className="inline-block ml-2">{course.code}</span>
            </p>
          </div>
          <button className="border border-purple-600 text-purple-600 text-sm px-4 py-1 rounded-md hover:bg-purple-50">
            View Materials
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="p-3 rounded-md bg-gray-50 border">
            <p className="font-medium text-gray-700 flex items-center gap-2">
              📄 Syllabus
            </p>
            <p className="text-xs text-gray-500">Course outline and requirements</p>
          </div>
          <div className="p-3 rounded-md bg-gray-50 border">
            <p className="font-medium text-gray-700 flex items-center gap-2">
              📁 Resources
            </p>
            <p className="text-xs text-gray-500">{course.resources} files available</p>
          </div>
          <div className="p-3 rounded-md bg-gray-50 border">
            <p className="font-medium text-gray-700 flex items-center gap-2">
              📝 Assignments
            </p>
            <p className="text-xs text-gray-500">{course.assignments}</p>
          </div>
          <div className="p-3 rounded-md bg-gray-50 border">
            <p className="font-medium text-gray-700 flex items-center gap-2">
              📅 Schedule
            </p>
            <p className="text-xs text-gray-500">{course.schedule}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Attendance + Performance */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-8 mt-10">
        {/* Attendance Summary */}
        <section className="bg-white rounded-xl shadow p-6 col-span-2">
          <div className="flex gap-6 mb-4">
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold text-blue-500">85%</div>
              <div>Present</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold text-yellow-500">10%</div>
              <div>Late</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold text-red-500">5%</div>
              <div>Absent</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={attendanceData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Present" fill="#3b82f6" />
              <Bar dataKey="Late" fill="#facc15" />
              <Bar dataKey="Absent" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Recent Results */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-2">Recent Results</h2>
          <ul className="text-sm space-y-2 mb-4">
            <li>Computer Science - May 28, 2025 - <span className="text-green-600 font-semibold">92/100 A</span></li>
            <li>Advanced Math - June 2, 2025 - <span className="text-blue-600 font-semibold">85/100 B+</span></li>
            <li>Physics - June 5, 2025 - <span className="text-green-600 font-semibold">88/100 A-</span></li>
          </ul>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={performanceData}>
              <XAxis dataKey="subject" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </main>

      {/* Schedule + Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-8 mt-6 mb-10">
        {/* Today's Schedule */}
        <section className="bg-white rounded-xl shadow p-6 col-span-2">
          <h2 className="font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-3">
            <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
              <span>09:00AM | Introduction to CS | Room 101</span>
              <span className="text-green-600 font-semibold">Completed</span>
            </div>
            <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
              <span>11:00AM | Advanced Math | Room 203</span>
              <span className="text-blue-600 font-semibold">Upcoming</span>
            </div>
            <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
              <span>02:00PM | Physics Lab | Lab B</span>
              <span className="text-blue-600 font-semibold">Upcoming</span>
            </div>
            <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
              <span>04:30PM | English Lit. | Room 305</span>
              <span className="text-blue-600 font-semibold">Upcoming</span>
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-2">Announcements</h2>
          <div className="mb-3">
            <div className="text-red-500 font-bold">Campus Closure Notice</div>
            <div className="text-sm">Campus closed on Sat, June 14. Weekend classes online.</div>
          </div>
          <div className="mb-3">
            <div className="text-blue-500 font-bold">Summer Registration</div>
            <div className="text-sm">Register for summer courses before June 20.</div>
          </div>
        </section>
      </div>
    </div>
  );
}
