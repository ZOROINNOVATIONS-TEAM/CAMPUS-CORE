// src/components/faculty/SubmitAttendanceCard.jsx (assumed path)
import React, { useState } from "react";

const SubmitAttendanceCard = () => {
  const [selectedClass, setSelectedClass] = useState("Math");
  const attendanceData = {
    present: 65,
    late: 21,
    absent: 9,
  };

  return (
    <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">Submit Attendance</h2>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard label="Students Present" value={`${attendanceData.present}%`} lightBg="bg-green-100" darkBg="bg-green-900" />
        <StatCard label="Student Late" value={`${attendanceData.late}%`} lightBg="bg-yellow-100" darkBg="bg-yellow-800" />
        <StatCard label="Student Absent" value={`${attendanceData.absent}%`} lightBg="bg-red-200" darkBg="bg-red-900" />
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Class</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Math</option>
            <option>English</option>
            <option>Science</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
          <select className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Present</option>
            <option>Absent</option>
            <option>Late</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <button type="button" className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-800">
            Submit Attendance
          </button>
        </div>
      </form>
    </section>
  );
};

const StatCard = ({ label, value, lightBg, darkBg }) => (
  <div className={`${lightBg} dark:${darkBg} p-4 rounded text-center`}>
    <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{value}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
  </div>
);

export default SubmitAttendanceCard;
