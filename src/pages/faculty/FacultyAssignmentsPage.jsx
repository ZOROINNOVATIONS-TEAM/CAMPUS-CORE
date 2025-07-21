// src/pages/faculty/FacultyAssignmentsPage.jsx
import React from "react";
import FacultyHeader from "@/components/dashboard/faculty/FacultyHeader"; // Adjust path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faEdit, faTrash, faPlus, faCheck, faTimes, faUsers } from "@fortawesome/free-solid-svg-icons";

// Sample assignment data with detailed types (replace with API fetch)
const assignments = [
  {
    id: 1,
    title: "Homework 1 - Loops and Arrays",
    type: "Written Assignment",
    course: "CS101 - Introduction to Computer Science",
    department: "Computer Science",
    dueDate: "July 10, 2025",
    totalStudents: 50,
    submitted: 45,
    notSubmitted: 5,
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Tutorial - Derivatives Practice",
    type: "Tutorial",
    course: "MATH301 - Advanced Mathematics",
    department: "Mathematics",
    dueDate: "July 18, 2025",
    totalStudents: 30,
    submitted: 28,
    notSubmitted: 2,
    status: "Completed",
  },
  {
    id: 3,
    title: "Group Presentation - Circuit Analysis",
    type: "Presentation",
    course: "PHY201 - Physics Laboratory",
    department: "Physics",
    dueDate: "July 25, 2025",
    totalStudents: 35,
    submitted: 35,
    notSubmitted: 0,
    status: "Pending Review",
  },
  // Add more as needed
];

const FacultyAssignmentsPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-slate-500 text-gray-900 dark:text-gray-100 p-10">
      {/* Faculty Header */}
      <FacultyHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title and Actions */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Assignments</h1>
          <button className="flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800">
            <FontAwesomeIcon icon={faPlus} />
            Create New Assignment
          </button>
        </div>

        {/* Assignments List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Course/Department</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Due Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Total Students</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Submitted/Not Submitted</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{assignment.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                    <FontAwesomeIcon icon={faClipboard} className="mr-1 text-gray-500 dark:text-gray-400" />
                    {assignment.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                    {assignment.course} ({assignment.department})
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{assignment.dueDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                    <FontAwesomeIcon icon={faUsers} className="mr-1 text-gray-500 dark:text-gray-400" />
                    {assignment.totalStudents}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                    {assignment.submitted} Submitted / {assignment.notSubmitted} Not Submitted
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assignment.status === "Ongoing" ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200" :
                      assignment.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200" :
                      "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
                    }`}>
                      {assignment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mr-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 ml-2">
                      <FontAwesomeIcon icon={faCheck} /> Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default FacultyAssignmentsPage;
