import { useState } from "react";

const subjects = ["Data Structures", "Algorithms", "OS"];

export default function FacultyAttendanceCard() {
  const [selected, setSelected] = useState(subjects[0]);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!status) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    // You can also send data to API here
  }

  return (
    <div className="bg-white dark:bg-[#121212] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Submit Attendance
        </h2>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
          View Details
        </button>
      </div>

      {/* Attendance Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-4 flex flex-col items-center">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">69%</span>
          <span className="text-xs text-blue-800 dark:text-blue-200 mt-1">Present</span>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900 rounded-xl p-4 flex flex-col items-center">
          <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">18%</span>
          <span className="text-xs text-yellow-800 dark:text-yellow-100 mt-1">Late</span>
        </div>
        <div className="bg-red-50 dark:bg-red-900 rounded-xl p-4 flex flex-col items-center">
          <span className="text-2xl font-bold text-red-500 dark:text-red-300">13%</span>
          <span className="text-xs text-red-800 dark:text-red-100 mt-1">Absent</span>
        </div>
      </div>

      {/* Subject Selector */}
      <div className="flex gap-3 flex-wrap">
        {subjects.map((s) => (
          <button
            key={s}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
              selected === s
                ? "bg-blue-100 dark:bg-blue-800 border-blue-400 dark:border-blue-600 text-blue-700 dark:text-blue-100"
                : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setSelected(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Attendance Status Radio */}
      <div className="flex gap-6">
        {["Present", "Late", "Absent"].map((s) => (
          <label
            key={s}
            className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200"
          >
            <input
              type="radio"
              name="attendance-status"
              value={s}
              checked={status === s}
              onChange={() => setStatus(s)}
              className="accent-blue-600 dark:accent-blue-400"
            />
            <span className="text-sm">{s}</span>
          </label>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={() => setStatus("")}
          className="flex-1 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          Cancel
        </button>
        <button
          disabled={!status}
          onClick={handleSubmit}
          className={`flex-1 py-2 rounded-xl font-medium transition ${
            !status
              ? "bg-blue-300 dark:bg-blue-700 text-white cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Submit Attendance
        </button>
      </div>

      {/* Success message */}
      {submitted && (
        <div className="text-green-600 dark:text-green-400 text-sm text-center mt-2">
          ✅ Attendance submitted for <b>{selected}</b> as <b>{status}</b>!
        </div>
      )}
    </div>
  );
}
