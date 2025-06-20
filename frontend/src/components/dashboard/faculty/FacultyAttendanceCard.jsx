
import { useState } from "react";
const subjects = ["Data Structures", "Algorithms", "OS"];

export default function FacultyAttendanceCard() {
  const [selected, setSelected] = useState(subjects[0]);
  const [status, setStatus] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-800">Submit Attendance</h2>
        <button className="text-sm text-blue-600 hover:underline font-medium">View Details</button>
      </div>
      {/* Attendance Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center">
          <span className="text-2xl font-bold text-blue-600">69%</span>
          <span className="text-xs text-blue-800 mt-1">Present</span>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 flex flex-col items-center">
          <span className="text-2xl font-bold text-yellow-600">18%</span>
          <span className="text-xs text-yellow-800 mt-1">Late</span>
        </div>
        <div className="bg-red-50 rounded-xl p-4 flex flex-col items-center">
          <span className="text-2xl font-bold text-red-500">13%</span>
          <span className="text-xs text-red-800 mt-1">Absent</span>
        </div>
      </div>
      {/* Subject Selector */}
      <div className="flex gap-3 flex-wrap">
        {subjects.map((s) => (
          <button
            key={s}
            className={`px-3 py-1 rounded-full text-xs font-medium border ${
              selected === s
                ? "bg-blue-100 border-blue-400 text-blue-700"
                : "bg-gray-100 border-gray-200 text-gray-700"
            }`}
            onClick={() => setSelected(s)}
          >
            {s}
          </button>
        ))}
      </div>
      {/* Status */}
      <div className="flex gap-6">
        {["Present", "Late", "Absent"].map((s) => (
          <label key={s} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="attendance-status"
              value={s}
              checked={status === s}
              onChange={() => setStatus(s)}
              className="accent-blue-600"
            />
            <span className="text-sm">{s}</span>
          </label>
        ))}
      </div>
    
      <div className="flex gap-3 mt-2">
        <button className="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 bg-gray-50 hover:bg-gray-100">Cancel</button>
        <button className="flex-1 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700">Submit Attendance</button>
      </div>
    </div>
  );
}
