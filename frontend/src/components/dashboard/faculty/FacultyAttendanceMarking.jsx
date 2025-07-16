import { useState } from "react";
import { CalendarDays, RefreshCcw, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const classes = ["CSE A", "CSE B"];
const subjects = ["Data Structures", "OS", "DBMS"];
const lectures = ["Lecture 1", "Lecture 2", "Lecture 3"];

const mockStudents = [
  { roll: "001", name: "Aman Sharma" },
  { roll: "002", name: "Riya Mehra" },
  { roll: "003", name: "Kabir Khan" },
  { roll: "004", name: "Sneha Patel" },
];

export default function AttendanceMarkingPage() {
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedLecture, setSelectedLecture] = useState(lectures[0]);
  const [showSuccess, setShowSuccess] = useState(false);

  const [attendance, setAttendance] = useState(() => {
    const initial = {};
    mockStudents.forEach((s) => (initial[s.roll] = "Present"));
    return initial;
  });

  const handleChange = (roll, status) => {
    setAttendance((prev) => ({ ...prev, [roll]: status }));
  };

  const handleSubmit = () => {
    console.log("Submitting Attendance:", {
      class: selectedClass,
      subject: selectedSubject,
      date: selectedDate,
      lecture: selectedLecture,
      attendance,
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleReset = () => {
    const reset = {};
    mockStudents.forEach((s) => (reset[s.roll] = "Present"));
    setAttendance(reset);
  };

  return (
    <div className="bg-white dark:bg-[#121212] p-4 sm:p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-800 max-w-5xl mx-auto space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Mark Attendance
        </h2>
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-green-700 bg-green-100 dark:bg-green-800 dark:text-green-100 px-4 py-2 rounded-lg text-sm"
            >
              <CheckCircle className="w-4 h-4" />
              Attendance submitted successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          {classes.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          value={selectedLecture}
          onChange={(e) => setSelectedLecture(e.target.value)}
          className="px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          {lectures.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gray-500 dark:text-gray-300" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-3 py-2 rounded border dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <RefreshCcw className="w-4 h-4" /> Reset
        </button>
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
              <th className="p-3 text-gray-700 dark:text-gray-200">Roll No</th>
              <th className="p-3 text-gray-700 dark:text-gray-200">Name</th>
              <th className="p-3 text-gray-700 dark:text-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student) => (
              <tr
                key={student.roll}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="p-3">{student.roll}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">
                  <div className="flex gap-4">
                    {["Present", "Late", "Absent"].map((status) => (
                      <label key={status} className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={`attendance-${student.roll}`}
                          value={status}
                          checked={attendance[student.roll] === status}
                          onChange={() => handleChange(student.roll, status)}
                          className="accent-blue-600"
                        />
                        <span>{status}</span>
                      </label>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm transition"
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
}
