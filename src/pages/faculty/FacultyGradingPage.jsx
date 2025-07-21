// src/pages/faculty/FacultyGradingPage.jsx
import React from "react";
import FacultyHeader from "@/components/dashboard/faculty/FacultyHeader"; // Adjust path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faEdit, faTrash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Sample grading data for completed exams (replace with API fetch)
const exams = [
  {
    id: 1,
    title: "Midterm Exam - Loops and Arrays",
    course: "CS101 - Introduction to Computer Science",
    department: "Computer Science",
    examDate: "July 10, 2025",
    totalStudents: 50,
    passed: 40,
    failed: 10,
    averageScore: 78,
    status: "Graded",
  },
  {
    id: 2,
    title: "Final Quiz - Derivatives",
    course: "MATH301 - Advanced Mathematics",
    department: "Mathematics",
    examDate: "July 18, 2025",
    totalStudents: 30,
    passed: 25,
    failed: 5,
    averageScore: 82,
    status: "Graded",
  },
  {
    id: 3,
    title: "Lab Exam - Circuits",
    course: "PHY201 - Physics Laboratory",
    department: "Physics",
    examDate: "July 25, 2025",
    totalStudents: 35,
    passed: 28,
    failed: 7,
    averageScore: 75,
    status: "Graded",
  },
  // Add more as needed
];

const FacultyGradingPage = () => {
  // Sample chart data for overall pass/fail
  const passFailData = {
    labels: ["Passed", "Failed"],
    datasets: [
      {
        data: [exams.reduce((sum, exam) => sum + exam.passed, 0), exams.reduce((sum, exam) => sum + exam.failed, 0)],
        backgroundColor: ["#10B981", "#EF4444"],
      },
    ],
  };

  // Sample bar chart data for average scores per exam
  const averageScoresData = {
    labels: exams.map(exam => exam.title),
    datasets: [
      {
        label: "Average Score",
        data: exams.map(exam => exam.averageScore),
        backgroundColor: "#3B82F6",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-slate-500 text-gray-900 dark:text-gray-100 p-10">
      {/* Faculty Header */}
      <FacultyHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title and Actions */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Grading - Completed Exams</h1>
          <button className="flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800">
            <FontAwesomeIcon icon={faClipboardCheck} />
            View All Grades
          </button>
        </div>

        {/* Exams List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Course/Department</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Exam Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Total Students</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Passed</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Failed</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Average Score</th>
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
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{exam.examDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{exam.totalStudents}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                    {exam.passed} Passed
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                   {exam.failed} Failed
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{exam.averageScore}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mr-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 ml-2">
                      <FontAwesomeIcon icon={faCheck} /> Regrade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pass/Fail Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-200">Overall Pass/Fail Distribution</h2>
            <Pie data={passFailData} options={{ responsive: true }} />
          </div>

          {/* Average Scores Bar Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-200">Average Scores per Exam</h2>
            <Bar data={averageScoresData} options={{ responsive: true }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacultyGradingPage;
