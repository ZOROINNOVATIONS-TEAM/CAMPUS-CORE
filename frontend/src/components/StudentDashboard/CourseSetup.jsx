import React, { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import logo from "../assets/images/logo.png"; // Replace with actual path

const CourseSetup = () => {
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);

  const handleAttendanceSubmit = () => {
    setAttendanceSubmitted(true);
  };

  const attendanceData = [
    { week: "Week 1", present: 70, late: 20, absent: 10 },
    { week: "Week 2", present: 65, late: 25, absent: 10 },
    { week: "Week 3", present: 85, late: 10, absent: 5 },
  ];

  const courses = [
    {
      title: "Advanced Mathematics",
      professor: "Prof. Sarah Wilson",
      code: "MATH301",
      syllabus: "Course outline and requirements",
      resources: "12 files available",
      assignments: "2 pending, 5 completed",
      schedule: "Mon, Wed 11:00 AM",
    },
    {
      title: "Introduction to Computer Science",
      professor: "Prof. Michael Chen",
      code: "CS101",
      syllabus: "Course outline and requirements",
      resources: "8 files available",
      assignments: "1 pending, 3 completed",
      schedule: "Tue, Thu 9:00 AM",
    },
    {
      title: "Physics Laboratory",
      professor: "Prof. David Thompson",
      code: "PHYS201",
      syllabus: "Course outline and requirements",
      resources: "15 files available",
      assignments: "3 pending, 2 completed",
      schedule: "Wed 2:00 PM",
    },
  ];

  const eventColors = {
    red: "border-red-500 bg-red-50",
    yellow: "border-yellow-500 bg-yellow-50",
    green: "border-green-500 bg-green-50",
    blue: "border-blue-500 bg-blue-50",
  };

  const statusColors = {
    green: "text-green-600 bg-green-50",
    blue: "text-blue-600 bg-blue-50",
    red: "text-red-600 bg-red-50",
    yellow: "text-yellow-600 bg-yellow-50",
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Courses Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Enrolled Courses</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none shadow-sm"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
            + Add Course
          </button>
        </div>
      </div>

      {courses.map((course, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
            <p className="text-sm text-gray-600">{course.professor} • {course.code}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              <div className="bg-gray-50 p-3 rounded-xl border text-center">
                <p className="text-sm font-medium text-purple-700">📘 Syllabus</p>
                <p className="text-xs text-gray-600">{course.syllabus}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border text-center">
                <p className="text-sm font-medium text-purple-700">📁 Resources</p>
                <p className="text-xs text-gray-600">{course.resources}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border text-center">
                <p className="text-sm font-medium text-purple-700">📝 Assignments</p>
                <p className="text-xs text-gray-600">{course.assignments}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border text-center">
                <p className="text-sm font-medium text-purple-700">🕒 Schedule</p>
                <p className="text-xs text-gray-600">{course.schedule}</p>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-sm">
            View Materials
          </button>
        </div>
      ))}

      {/* Attendance + Events + Schedule Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Attendance */}
        <div className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-lg p-6">
          {!attendanceSubmitted ? (
            <>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Submit Attendance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 text-center mb-6 gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-blue-700">65%</p>
                  <p className="text-sm text-gray-600">Student Present</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-yellow-700">21%</p>
                  <p className="text-sm text-gray-600">Student Late</p>
                </div>
                <div className="bg-red-100 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-red-700">9%</p>
                  <p className="text-sm text-gray-600">Student Absent</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <select className="border p-2 rounded text-sm focus:outline-none">
                  <option>Select Class</option>
                  <option>Dsa</option>
                  <option>Java</option>
                  <option>Python</option>
                </select>
                <select className="border p-2 rounded text-sm focus:outline-none">
                  <option>Status</option>
                  <option>Present</option>
                  <option>Absent</option>
                  <option>Late</option>
                </select>
                <div className="flex justify-end gap-3 mt-3">
                  <button className="px-4 py-2 border rounded text-sm hover:bg-gray-100 transition">Cancel</button>
                  <button
                    onClick={handleAttendanceSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">Attendance Summary</h3>
                <div className="flex items-center gap-3">
                  <img src={logo} alt="student" className="w-9 h-9 rounded-full" />
                  <span className="text-sm font-medium text-gray-800">Shubham Uprade</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-100 text-blue-700 rounded-xl p-4 text-center shadow">
                  <p className="text-xl font-bold">85%</p>
                  <p className="text-sm">Present</p>
                </div>
                <div className="bg-yellow-100 text-yellow-700 rounded-xl p-4 text-center shadow">
                  <p className="text-xl font-bold">10%</p>
                  <p className="text-sm">Late</p>
                </div>
                <div className="bg-red-100 text-red-700 rounded-xl p-4 text-center shadow">
                  <p className="text-xl font-bold">5%</p>
                  <p className="text-sm">Absent</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={attendanceData} barGap={3}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="present" stackId="a" fill="#3b82f6" />
                  <Bar dataKey="late" stackId="a" fill="#facc15" />
                  <Bar dataKey="absent" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold mb-4 text-base border-b pb-2">📅 Upcoming Events</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Applied Science Assignment", date: "Jun 14", color: "red" },
              { name: "Technology Exam", date: "Jun 15", color: "yellow" },
              { name: "AI Workshop", date: "Jun 16", color: "green" },
              { name: "UX Design Conference", date: "Jun 17", color: "blue" },
            ].map((event, idx) => (
              <li
                key={idx}
                className={`flex justify-between items-center p-3 rounded ${eventColors[event.color]}`}
              >
                <span>{event.name}</span>
                <span className="text-gray-600">{event.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Class Schedule and Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-1 md:col-span-3">
          <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-base">Today's Class Schedule</h3>
              <a href="#" className="text-sm text-blue-500 hover:underline">Full Schedule</a>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Intro to Computer Science", time: "09:00AM - 10:30AM • Room 101", status: "Completed", color: "green" },
                { name: "Advanced Mathematics", time: "11:00AM - 12:30PM • Room 203", status: "Upcoming", color: "blue" },
                { name: "Physics Lab", time: "02:00PM - 04:00PM • Lab B", status: "Upcoming", color: "blue" },
                { name: "English Literature", time: "04:30PM - 06:00PM • Room 305", status: "Upcoming", color: "blue" },
              ].map((cls, idx) => (
                <li key={idx} className={`flex justify-between items-center p-3 rounded ${statusColors[cls.color]}`}>
                  <div className="flex gap-2 items-center">
                    <span className={`text-${cls.color}-600`}>📘</span>
                    <div>
                      <p className="font-medium">{cls.name}</p>
                      <p className="text-xs text-gray-500">{cls.time}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium text-${cls.color}-600`}>{cls.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-base">Announcements</h3>
              <a href="#" className="text-sm text-blue-500 hover:underline">View All</a>
            </div>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-red-600 font-medium">
                  Campus Closure Notice <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded ml-2">Important</span>
                </p>
                <p className="text-gray-500 text-xs">Administration • June 10</p>
                <p className="text-gray-600 mt-1 text-xs">
                  Due to maintenance, the campus will be closed on Saturday. All classes will be online.
                </p>
                <a href="#" className="text-blue-500 text-xs hover:underline">Read More</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSetup;