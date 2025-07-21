// src/pages/faculty/FacultyDutiesPage.jsx
import React from "react";
import FacultyHeader from "@/components/dashboard/faculty/FacultyHeader"; // Adjust path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faCheckCircle, faHourglassHalf, faClock, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// Sample duties data (replace with API fetch)
const duties = [
  {
    id: 1,
    type: "Teaching",
    description: "Conduct lectures for CS101",
    dueDate: "Ongoing",
    status: "Active",
    hours: 10,
  },
  {
    id: 2,
    type: "Advising",
    description: "Student mentoring session",
    dueDate: "July 20, 2025",
    status: "Pending",
    hours: 5,
  },
  {
    id: 3,
    type: "Committee",
    description: "Curriculum review meeting",
    dueDate: "July 25, 2025",
    status: "Completed",
    hours: 3,
  },
  {
    id: 4,
    type: "Research",
    description: "Submit paper on AI algorithms",
    dueDate: "August 1, 2025",
    status: "Ongoing",
    hours: 15,
  },
  // Add more as needed
];

// DutiesSummary (inline component for summary cards)
const DutiesSummary = ({ duties }) => {
  const totalDuties = duties.length;
  const completed = duties.filter(d => d.status === "Completed").length;
  const pending = duties.filter(d => d.status === "Pending").length;
  const ongoing = duties.filter(d => d.status === "Active" || d.status === "Ongoing").length;
  const totalHours = duties.reduce((sum, duty) => sum + duty.hours, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <FontAwesomeIcon icon={faTasks} className="text-blue-500 dark:text-blue-400 text-2xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Total Duties</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{totalDuties}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 dark:text-green-400 text-2xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Completed</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{completed}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <FontAwesomeIcon icon={faHourglassHalf} className="text-yellow-500 dark:text-yellow-400 text-2xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Ongoing/Pending</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{ongoing + pending}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <FontAwesomeIcon icon={faClock} className="text-purple-500 dark:text-purple-400 text-2xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Total Hours</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{totalHours}</p>
      </div>
    </div>
  );
};

// DutiesList (inline component for duties table)
const DutiesList = ({ duties }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-600">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Type</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Description</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Due Date</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Hours</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-500">
          {duties.map((duty) => (
            <tr key={duty.id}>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{duty.type}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{duty.description}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{duty.dueDate}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  duty.status === "Active" ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200" :
                  duty.status === "Pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200" :
                  "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                }`}>
                  {duty.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{duty.hours}</td>
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

// Main FacultyDutiesPage Component
const FacultyDutiesPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-slate-500 text-gray-900 dark:text-gray-100 p-10">
      {/* Faculty Header */}
      <FacultyHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title and Actions */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Duties</h1>
          <button className="flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800">
            <FontAwesomeIcon icon={faTasks} />
            Add New Duty
          </button>
        </div>

        {/* Duties Summary */}
        <DutiesSummary duties={duties} />

        {/* Duties List */}
        <DutiesList duties={duties} />
      </main>
    </div>
  );
};

export default FacultyDutiesPage;
