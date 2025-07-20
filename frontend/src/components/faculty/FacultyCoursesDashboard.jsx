import React, { useState } from "react";
import {
  FaBook,
  FaClipboardList,
  FaUserFriends,
  FaFolderOpen,
  FaPlus,
  FaEllipsisV,
  FaRegCheckCircle,
  FaRegClock,
  FaRegFileAlt,
  FaTh,
  FaList,
  FaCog,
} from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { MdOutlineAssignment } from "react-icons/md";

const courseCards = [
  {
    title: "Introduction to Computer Science",
    code: "CS191",
    department: "Computer Science",
    schedule: "Mon, Wed, Fri · 10:00 AM - 11:30 AM",
    room: "Room 101",
    students: 42,
    active: true,
    materials: 12,
    assignments: 4,
    assignmentsLink: "#",
    materialsLink: "#",
    uploadLink: "#",
    createAssignmentLink: "#",
    submissionsLink: "#",
    attendanceLink: "#",
    settingsLink: "#",
    detailsLink: "#",
  },
  {
    title: "Advanced Mathematics",
    code: "MATH202",
    department: "Mathematics",
    schedule: "Tue, Thu · 11:30 AM - 1:00 PM",
    room: "Room 203",
    students: 28,
    active: true,
    materials: 8,
    assignments: 2,
    assignmentsLink: "#",
    materialsLink: "#",
    uploadLink: "#",
    createAssignmentLink: "#",
    submissionsLink: "#",
    attendanceLink: "#",
    settingsLink: "#",
    detailsLink: "#",
  },
  {
    title: "Physics Laboratory",
    code: "PHYS101L",
    department: "Physics",
    schedule: "Wed · 2:00 PM - 5:00 PM",
    room: "Lab Building 8",
    students: 18,
    active: true,
    materials: 6,
    assignments: 2,
    assignmentsLabel: "Lab Reports",
    assignmentsLink: "#",
    materialsLink: "#",
    uploadLink: "#",
    createAssignmentLink: "#",
    submissionsLink: "#",
    attendanceLink: "#",
    settingsLink: "#",
    detailsLink: "#",
    labEquipmentLink: "#",
  },
  {
    title: "English Literature",
    code: "ENG305",
    department: "English",
    schedule: "Tue, Thu · 3:30 PM - 5:00 PM",
    room: "Room 305",
    students: 35,
    active: true,
    materials: 10,
    assignments: 3,
    assignmentsLink: "#",
    materialsLink: "#",
    uploadLink: "#",
    createAssignmentLink: "#",
    submissionsLink: "#",
    attendanceLink: "#",
    settingsLink: "#",
    detailsLink: "#",
  },
];

const recentActivity = [
  {
    type: "New Assignment Created",
    icon: <FaClipboardList className="text-indigo-500" />,
    course: "Introduction to Computer Science",
    date: "June 15, 2025",
    status: "Published",
    action: "View",
    description: "Week #05 Project",
    statusColor: "text-green-600",
    statusBg: "bg-green-100",
  },
  {
    type: "Graded Assignments",
    icon: <FaBook className="text-green-600" />,
    course: "Advanced Mathematics",
    date: "June 14, 2025",
    status: "Completed",
    action: "View",
    description: "Quiz #2 Results",
    statusColor: "text-gray-600",
    statusBg: "bg-gray-100",
  },
  {
    type: "New Material Uploaded",
    icon: <FiUpload className="text-yellow-500" />,
    course: "Physics Laboratory",
    date: "June 13, 2025",
    status: "Published",
    action: "View",
    description: "Chapter 8 Slides",
    statusColor: "text-green-600",
    statusBg: "bg-green-100",
  },
];

export default function FacultyCoursesDashboard() {
  const [semester, setSemester] = useState("Spring Semester 2025");
  const [department, setDepartment] = useState("All Departments");
  const [viewType, setViewType] = useState("grid");

  // For demo, Add New Course opens alert
  const handleAddCourse = () => alert("Add New Course functionality coming soon!");

  // For demo, List view simply shows the same as Grid view
  const renderCourses = () => {
    if (viewType === "grid") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
          {courseCards.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-2 relative"
            >
              {/* Header Row */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-base text-gray-900">
                    {course.title}
                  </div>
                  <div className="text-xs text-gray-400">{course.code} &nbsp; {course.department}</div>
                </div>
                <div className="flex items-center gap-2">
                  {course.active && (
                    <span className="bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                      ACTIVE
                    </span>
                  )}
                  <button>
                    <FaEllipsisV className="text-gray-400" />
                  </button>
                </div>
              </div>
              {/* Details Row */}
              <div className="flex items-center flex-wrap gap-3 text-xs text-gray-500 mt-1">
                <FaRegClock className="mr-1" />
                {course.schedule}
                <FaFolderOpen className="ml-2 mr-1" />
                {course.room}
                <FaUserFriends className="ml-2 mr-1" />
                {course.students} Students Enrolled
              </div>
              {/* Materials & Assignments Row */}
              <div className="flex flex-wrap gap-8 mt-2">
                <div>
                  <div className="font-semibold text-xs text-gray-500">
                    Course Materials
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-sm">{course.materials} files</span>
                    <a href={course.uploadLink} className="text-xs text-blue-600 hover:underline font-medium">
                      Upload New
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-gray-500">
                    {course.assignmentsLabel || "Assignments"}
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-sm">{course.assignments} active</span>
                    <a href={course.createAssignmentLink} className="text-xs text-blue-600 hover:underline font-medium">
                      Create New
                    </a>
                  </div>
                </div>
              </div>
              {/* Actions Row */}
              <div className="flex flex-wrap items-center gap-6 mt-3 border-t pt-2 text-gray-500 text-xs">
                <a href={course.detailsLink} className="flex items-center gap-1 hover:text-blue-600">
                  <FaRegFileAlt className="text-base" />
                  View Details
                </a>
                <a href={course.attendanceLink} className="flex items-center gap-1 hover:text-blue-600">
                  <FaClipboardList className="text-base" />
                  Attendance
                </a>
                {course.labEquipmentLink && (
                  <a href={course.labEquipmentLink} className="flex items-center gap-1 hover:text-blue-600">
                    <FaCog className="text-base" />
                    Lab Equipment
                  </a>
                )}
                <a href={course.submissionsLink} className="flex items-center gap-1 hover:text-blue-600">
                  <MdOutlineAssignment className="text-base" />
                  Submissions
                </a>
                <a href={course.settingsLink} className="flex items-center gap-1 hover:text-blue-600">
                  <FaCog className="text-base" />
                  Settings
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      // List View: Render as a list
      return (
        <div className="mb-7 flex flex-col gap-4">
          {courseCards.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1 min-w-[200px]">
                <div className="font-semibold text-base text-gray-900">
                  {course.title}{" "}
                  {course.active && (
                    <span className="bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full ml-2">
                      ACTIVE
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400 mb-1">{course.code} &nbsp; {course.department}</div>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {course.schedule}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaFolderOpen /> {course.room}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUserFriends /> {course.students}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col sm:flex-row gap-3">
                <div>
                  <div className="font-semibold text-xs text-gray-500">
                    Course Materials
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-sm">{course.materials} files</span>
                    <a href={course.uploadLink} className="text-xs text-blue-600 hover:underline font-medium">
                      Upload New
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-gray-500">
                    {course.assignmentsLabel || "Assignments"}
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-sm">{course.assignments} active</span>
                    <a href={course.createAssignmentLink} className="text-xs text-blue-600 hover:underline font-medium">
                      Create New
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-6 border-t sm:border-t-0 sm:border-l pt-2 sm:pt-0 sm:pl-4 text-gray-500 text-xs">
                <a href={course.detailsLink} className="flex items-center gap-1 hover:text-blue-600">
                  <FaRegFileAlt className="text-base" />
                  View Details
                </a>
                <a href={course.attendanceLink} className="flex items-center gap-1 hover:text-blue-600">
                  <FaClipboardList className="text-base" />
                  Attendance
                </a>
                {course.labEquipmentLink && (
                  <a href={course.labEquipmentLink} className="flex items-center gap-1 hover:text-blue-600">
                    <FaCog className="text-base" />
                    Lab Equipment
                  </a>
                )}
                <a href={course.submissionsLink} className="flex items-center gap-1 hover:text-blue-600">
                  <MdOutlineAssignment className="text-base" />
                  Submissions
                </a>
                <a href={course.settingsLink} className="flex items-center gap-1 hover:text-blue-600">
                  <FaCog className="text-base" />
                  Settings
                </a>
              </div>
              <button className="ml-2">
                <FaEllipsisV className="text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex flex-col justify-between">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8 flex-1">
        {/* Courses Cards View */}
        {renderCourses()}

        {/* Filters and Actions */}
        <div className="flex flex-wrap gap-4 items-center mb-3">
          <select
            className="rounded-md px-3 py-1.5 border text-sm font-medium text-gray-700 bg-white shadow-sm"
            value={semester}
            onChange={e => setSemester(e.target.value)}
          >
            <option>Spring Semester 2025</option>
            <option>Fall Semester 2025</option>
          </select>
          <select
            className="rounded-md px-3 py-1.5 border text-sm font-medium text-gray-700 bg-white shadow-sm"
            value={department}
            onChange={e => setDepartment(e.target.value)}
          >
            <option>All Departments</option>
            <option>Computer Science</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>English</option>
          </select>
          <div className="flex-1" />
          <button
            className={`p-2 rounded-md hover:bg-blue-100 ${viewType === "grid" ? "bg-blue-50" : ""}`}
            onClick={() => setViewType("grid")}
            title="Grid View"
          >
            <FaTh className={`text-xl ${viewType === "grid" ? "text-blue-600" : "text-gray-400"}`} />
          </button>
          <button
            className={`p-2 rounded-md hover:bg-blue-100 ${viewType === "list" ? "bg-blue-50" : ""}`}
            onClick={() => setViewType("list")}
            title="List View"
          >
            <FaList className={`text-xl ${viewType === "list" ? "text-blue-600" : "text-gray-400"}`} />
          </button>
          <button
            className="flex items-center gap-2 bg-[#3666F6] text-white text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
            onClick={handleAddCourse}
          >
            <FaPlus />
            Add New Course
          </button>
        </div>
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-5 mt-4">
          <div className="flex items-center justify-between pb-4">
            <div className="font-semibold text-lg">Recent Activity</div>
            <a href="#" className="text-blue-600 text-sm hover:underline font-medium">View All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 font-semibold border-b">
                  <th className="py-2 px-2 text-left">ACTIVITY</th>
                  <th className="py-2 px-2 text-left">COURSE</th>
                  <th className="py-2 px-2 text-left">DATE</th>
                  <th className="py-2 px-2 text-left">STATUS</th>
                  <th className="py-2 px-2 text-left">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((item, idx) => (
                  <tr key={idx} className="border-b hover:bg-blue-50 transition">
                    <td className="py-2 px-2 flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100`}>
                        {item.icon}
                      </span>
                      <span>
                        <div className="font-medium">{item.type}</div>
                        <div className="text-xs text-gray-400">{item.description}</div>
                      </span>
                    </td>
                    <td className="py-2 px-2">{item.course}</td>
                    <td className="py-2 px-2">{item.date}</td>
                    <td className="py-2 px-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.statusBg} ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <a href="#" className="text-blue-600 font-semibold hover:underline">{item.action}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
     
    </div>
  );
}