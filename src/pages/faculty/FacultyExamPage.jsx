// src/pages/faculty/FacultyExamPage.jsx
import React from "react";
import FacultyHeader from "@/components/dashboard/faculty/FacultyHeader"; // Adjust path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClipboardList, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// Sample exam data (replace with API fetch for real data, integrating course/department info from memory[1])
const exams = [
  {
    id: 1,
    title: "Midterm Exam - Introduction to Computer Science",
    course: "CS101",
    department: "Computer Science",
    date: "July 15, 2025",
    time: "10:00 AM - 12:00 PM",
    type: "Midterm",
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Quiz 3 - Advanced Mathematics",
    course: "MATH301",
    department: "Mathematics",
    date: "July 20, 2025",
    time: "2:00 PM - 3:00 PM",
    type: "Quiz",
    status: "Pending Grading",
  },
  {
    id: 3,
    title: "Final Exam - Physics Laboratory",
    course: "PHY201",
    department: "Physics",
    date: "August 5, 2025",
    time: "9:00 AM - 11:00 AM",
    type: "Final",
    status: "Completed",
  },
  // Add more as needed
];

const FacultyExamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Faculty Header */}
      <FacultyHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title and Actions */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Exams & Tests</h1>
          <button className="flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800">
            <FontAwesomeIcon icon={faPlus} />
            Create New Exam/Test
          </button>
        </div>

        {/* Exam List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Course/Department</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Date & Time</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {exams.map((exam) => (
                <tr key={exam.id}>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{exam.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                    {exam.course} ({exam.department})
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-gray-500 dark:text-gray-400" />
                    {exam.date} at {exam.time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                    <FontAwesomeIcon icon={faClipboardList} className="mr-1 text-gray-500 dark:text-gray-400" />
                    {exam.type}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      exam.status === "Scheduled" ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200" :
                      exam.status === "Pending Grading" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200" :
                      "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                    }`}>
                      {exam.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mr-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
                      <FontAwesomeIcon icon={faTrash} />
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

export default FacultyExamPage;
