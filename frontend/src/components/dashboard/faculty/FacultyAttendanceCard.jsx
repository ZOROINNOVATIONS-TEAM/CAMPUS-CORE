import { useState, useEffect } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { studentAttendanceData } from "./DummyAttendance.js";


const classes = ["CSE A", "CSE B"];
const subjects = ["Data Structures", "Algorithms", "OS"];

const dummyData = {
  "2025-07-15": {
    "CSE A": {
      "Data Structures": { present: 75, late: 15, absent: 10 },
      Algorithms: { present: 68, late: 20, absent: 12 },
      OS: { present: 82, late: 8, absent: 10 },
    },
    "CSE B": {
      "Data Structures": { present: 70, late: 20, absent: 10 },
      Algorithms: { present: 65, late: 25, absent: 10 },
      OS: { present: 78, late: 10, absent: 12 },
    },
  },
  "2025-07-14": {
    "CSE A": {
      "Data Structures": { present: 80, late: 10, absent: 10 },
      Algorithms: { present: 70, late: 15, absent: 15 },
      OS: { present: 90, late: 5, absent: 5 },
    },
    "CSE B": {
      "Data Structures": { present: 75, late: 15, absent: 10 },
      Algorithms: { present: 60, late: 20, absent: 20 },
      OS: { present: 85, late: 10, absent: 5 },
    },
  },
};

export default function FacultyAttendanceCard({ onViewDetails }) {
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [selectedDate, setSelectedDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [analytics, setAnalytics] = useState({ present: 0, late: 0, absent: 0 });

  useEffect(() => {
    const stats = dummyData[selectedDate]?.[selectedClass]?.[selectedSubject];
    if (stats) {
      setAnalytics(stats);
    } else {
      setAnalytics({ present: 0, late: 0, absent: 0 });
    }
  }, [selectedClass, selectedSubject, selectedDate]);

  return (
    <div className="bg-white dark:bg-[#121212] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-5 w-full flex flex-col gap-6 transition-all">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
          Attendance Overview
        </h2>
        <button
          onClick={() => {
  onViewDetails({
  class: selectedClass,
  subject: selectedSubject,
  date: selectedDate,
  analytics: {
    ...analytics,
    students:
      studentAttendanceData[selectedDate]?.[selectedClass]?.[selectedSubject] || [],
  },
});

}}


          className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Class & Subject Selectors */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
        >
          {classes.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Analytics Summary */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-2 text-center text-sm sm:text-base">
        <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-4 flex flex-col items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-300">
            {analytics.present}%
          </span>
          <span className="mt-1 text-blue-800 dark:text-blue-200">Present</span>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900 rounded-xl p-4 flex flex-col items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-300">
            {analytics.late}%
          </span>
          <span className="mt-1 text-yellow-800 dark:text-yellow-100">Late</span>
        </div>
        <div className="bg-red-50 dark:bg-red-900 rounded-xl p-4 flex flex-col items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-red-500 dark:text-red-300">
            {analytics.absent}%
          </span>
          <span className="mt-1 text-red-800 dark:text-red-100">Absent</span>
        </div>
      </div>

      {/* Date Selector (moved below analytics) */}
      <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-700 dark:text-gray-300 items-start sm:items-center mt-2">
        <label className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          <span>Date:</span>
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
}
