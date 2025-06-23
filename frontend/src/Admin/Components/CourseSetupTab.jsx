import React, { useState } from "react";
import {
  Plus, Edit3, UserCheck, BookOpenCheck, Search, MoreVertical,
} from "lucide-react";

const courseData = [
  {
    id: 1,
    code: "CST101",
    title: "Introduction to Computer Science",
    department: "Computer Science",
    credits: 4,
    students: 42,
    professor: "Dr. Robert Chen",
    status: "Active",
    role: "Professor"
  },
  {
    id: 2,
    code: "MAT102",
    title: "Advanced Mathematics",
    department: "Mathematics",
    credits: 3,
    students: 28,
    professor: "Dr. Emily Wilson",
    status: "Active",
    role: "Associate Professor"
  },
  {
    id: 3,
    code: "PHY203",
    title: "Physics Laboratory",
    department: "Physics",
    credits: 3,
    students: 35,
    professor: "Dr. Michael Thompson",
    status: "Active",
    role: "Professor"
  },
  {
    id: 4,
    code: "ENG201",
    title: "English Literature",
    department: "Literature",
    credits: 3,
    students: 31,
    professor: "Dr. Sarah Johnson",
    status: "Active",
    role: "Associate Professor"
  },
  {
    id: 5,
    code: "BUS201",
    title: "Business Economics",
    department: "Business",
    credits: 3,
    students: 0,
    professor: null,
    status: "Pending",
    role: null
  },
  {
    id: 6,
    code: "CSE303",
    title: "Database Systems",
    department: "Computer Science",
    credits: 4,
    students: 0,
    professor: "Dr. James Anderson",
    status: "Inactive",
    role: "Professor"
  },
];

const getStatusBadge = (status) => {
  const styles = {
    Active: "bg-blue-100 text-blue-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Inactive: "bg-red-100 text-red-600",
  };
  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${styles[status] || ""}`}>
      {status}
    </span>
  );
};

const CourseSetupTab = () => {
  const [searchText, setSearchText] = useState("");

  const filteredCourses = courseData.filter((course) =>
    `${course.title} ${course.code} ${course.department}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Course Management</h1>
          <p className="text-sm text-gray-500">Manage all courses for Summer Semester 2025</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 text-sm">
          <Plus size={16} /> Add New Course
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Courses", value: 48, color: "bg-blue-100 text-blue-600" },
          { label: "Departments", value: 12, color: "bg-pink-100 text-pink-600" },
          { label: "Active Faculty", value: 36, color: "bg-purple-100 text-purple-600" },
          { label: "Total Students", value: 1248, color: "bg-yellow-100 text-yellow-600" },
        ].map((card, i) => (
          <div key={i} className="p-4 rounded-xl shadow-sm bg-white flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{card.label}</p>
              <p className="text-xl font-bold">{card.value}</p>
            </div>
            <div className={`p-2 rounded-full ${card.color}`}>
              <BookOpenCheck className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center justify-between bg-white p-4 rounded-xl shadow-sm mb-4">
        <div className="flex gap-3 flex-wrap">
          <select className="px-3 py-2 text-sm border rounded-lg">
            <option>All Departments</option>
          </select>
          <select className="px-3 py-2 text-sm border rounded-lg">
            <option>Summer 2025</option>
          </select>
          <select className="px-3 py-2 text-sm border rounded-lg">
            <option>All Status</option>
          </select>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="border text-sm pl-10 pr-3 py-2 rounded-lg w-56"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Courses */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-start mb-1">
                <div className="text-sm font-semibold">{course.title}</div>
                {getStatusBadge(course.status)}
              </div>
              <p className="text-xs text-gray-500 mb-2">{course.code}</p>

              <div className="text-xs text-gray-600 mb-2">
                <p><strong>Department:</strong> {course.department}</p>
                <p><strong>Credits:</strong> {course.credits}</p>
                <p><strong>Students:</strong> {course.students}</p>
              </div>

              <div className="text-sm text-gray-800 mb-3">
                {course.professor ? (
                  <>
                    <p className="font-medium">{course.professor}</p>
                    <p className="text-xs text-gray-500">{course.role}</p>
                  </>
                ) : (
                  <p className="text-xs text-red-400 italic">Not Assigned</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded flex items-center gap-1">
                    <Edit3 size={14} /> Edit
                  </button>
                  <button className={`px-3 py-1 text-xs rounded flex items-center gap-1 ${
                    course.professor
                      ? "bg-gray-100 hover:bg-gray-200"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}>
                    <UserCheck size={14} /> Assign
                  </button>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No courses found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <p>Showing {filteredCourses.length} of {courseData.length} courses</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-full ${
                page === 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSetupTab;
