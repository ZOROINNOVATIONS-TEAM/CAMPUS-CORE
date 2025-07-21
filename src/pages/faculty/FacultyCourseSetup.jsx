// src/pages/faculty/FacultyCourseSetup.jsx
import React from "react";
import FacultyHeader from "../../components/dashboard/faculty/FacultyHeader"; // Import FacultyHeader
import CourseCard from "../../components/dashboard/faculty/CourseCard"; // Single course card component
import RecentActivity from "../../components/dashboard/faculty/RecentActivity";

const FacultyCourseSetup = () => {
  const courses = [
    {
      name: "Introduction to Computer Science",
      code: "CS101",
      department: "Computer Science",
      schedule: "Mon, Wed, Fri • 10:00 AM - 11:30 AM",
      room: "Room 101",
      enrolledStudents: 42,
      materialsCount: 12,
      assignmentsCount: 4,
    },
    {
      name: "Advanced Mathematics",
      code: "MATH302",
      department: "Mathematics",
      schedule: "Tue, Thu • 11:30 AM - 1:30 PM",
      room: "Room 203",
      enrolledStudents: 28,
      materialsCount: 8,
      assignmentsCount: 3,
    },
    {
      name: "Physics Laboratory",
      code: "PHYS201",
      department: "Physics",
      schedule: "Wed • 2:00 PM - 5:00 PM",
      room: "Lab Building B",
      enrolledStudents: 18,
      materialsCount: 6,
      assignmentsCount: 2,
    },
    {
      name: "English Literature",
      code: "ENG205",
      department: "English",
      schedule: "Tue, Thu • 3:30 PM - 5:00 PM",
      room: "Room 305",
      enrolledStudents: 35,
      materialsCount: 10,
      assignmentsCount: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-slate-500 p-10">
      {/* Faculty Header */}
      <FacultyHeader />

      {/* Filters and Add Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-8">
          <select className="border border-gray-300 rounded-lg mt-16 px-4 py-3">
            <option>Spring Semester 2025</option>
            <option>Fall Semester 2025</option>
          </select>
          <select className="border border-gray-300 rounded-lg mt-16 px-3 py-2">
            <option>All Departments</option>
            <option>Computer Science</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>English</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
          + Add New Course
        </button>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mb-10">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Recent Activity Section */}
      <RecentActivity />
    </div>
  );
};

export default FacultyCourseSetup;