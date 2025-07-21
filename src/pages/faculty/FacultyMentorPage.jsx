// src/pages/faculty/FacultyMentorPage.jsx
import React from "react";
import FacultyHeader from "@/components/dashboard/faculty/FacultyHeader"; // Adjust path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faPlus, faEdit, faTrash, faCheckCircle, faExclamationCircle, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

// Updated sample mentee data with more students
const mentees = [
  {
    id: 1,
    name: "Alice Johnson",
    studentId: "ST12345",
    course: "CS101",
    department: "Computer Science",
    progress: "Good",
    lastMeeting: "July 15, 2025",
    issues: 0,
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    studentId: "ST67890",
    course: "MATH301",
    department: "Mathematics",
    progress: "Needs Improvement",
    lastMeeting: "July 10, 2025",
    issues: 2,
    status: "At Risk",
  },
  {
    id: 3,
    name: "Carol Davis",
    studentId: "ST11223",
    course: "PHY201",
    department: "Physics",
    progress: "Excellent",
    lastMeeting: "July 20, 2025",
    issues: 0,
    status: "Active",
  },
  {
    id: 4,
    name: "David Wilson",
    studentId: "ST33445",
    course: "CS101",
    department: "Computer Science",
    progress: "Satisfactory",
    lastMeeting: "July 18, 2025",
    issues: 1,
    status: "Active",
  },
  {
    id: 5,
    name: "Emily Clark",
    studentId: "ST55667",
    course: "MATH301",
    department: "Mathematics",
    progress: "Good",
    lastMeeting: "July 19, 2025",
    issues: 0,
    status: "Active",
  },
  {
    id: 6,
    name: "Frank Harris",
    studentId: "ST77889",
    course: "BIO101",
    department: "Biology",
    progress: "Needs Attention",
    lastMeeting: "July 16, 2025",
    issues: 3,
    status: "At Risk",
  },
  {
    id: 7,
    name: "Grace Lee",
    studentId: "ST99000",
    course: "ENG201",
    department: "English",
    progress: "Excellent",
    lastMeeting: "July 20, 2025",
    issues: 0,
    status: "Active",
  },
];

// MentorSummary (inline component for summary cards)
const MentorSummary = ({ mentees }) => {
  const totalMentees = mentees.length;
  const active = mentees.filter(m => m.status === "Active").length;
  const atRisk = mentees.filter(m => m.status === "At Risk").length;
  const totalIssues = mentees.reduce((sum, mentee) => sum + mentee.issues, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <FontAwesomeIcon icon={faUserFriends} className="text-blue-500 dark:text-blue-400 text-2xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Total Mentees</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{totalMentees}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 dark:text-green-400 text-2xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Active</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{active}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-500 dark:text-yellow-400 text-2xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">At Risk</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{atRisk}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <FontAwesomeIcon icon={faUserGraduate} className="text-purple-500 dark:text-purple-400 text-2xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Total Issues</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{totalIssues}</p>
      </div>
    </div>
  );
};

// MentorList (inline component for mentees table)
const MentorList = ({ mentees }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Student ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Course/Department</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Progress</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Last Meeting</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Issues</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {mentees.map((mentee) => (
            <tr key={mentee.id}>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{mentee.name}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{mentee.studentId}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                {mentee.course} ({mentee.department})
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{mentee.progress}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{mentee.lastMeeting}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{mentee.issues}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  mentee.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200" :
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
                }`}>
                  {mentee.status}
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
  );
};

// Main FacultyMentorPage Component
const FacultyMentorPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-slate-500 text-gray-900 dark:text-gray-100 p-10">
      {/* Faculty Header */}
      <FacultyHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title and Actions */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Mentor</h1>
          <button className="flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800">
            <FontAwesomeIcon icon={faPlus} />
            Add New Mentee
          </button>
        </div>

        {/* Mentor Summary */}
        <MentorSummary mentees={mentees} />

        {/* Mentor List */}
        <MentorList mentees={mentees} />
      </main>
    </div>
  );
};

export default FacultyMentorPage;
