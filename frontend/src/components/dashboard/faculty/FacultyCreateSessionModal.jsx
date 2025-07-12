import { useState } from "react";
import { X } from "lucide-react";
import StudentMultiSelect from "./StudentMultiSelect";

export default function FacultyCreateSessionModal({ open, onClose, students, onCreate }) {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic || !date || !time || selectedStudentIds.length === 0) return;
    onCreate({ topic, date, time, studentIds: selectedStudentIds });
    setTopic("");
    setDate("");
    setTime("");
    setSelectedStudentIds([]);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 px-7 py-7 rounded-2xl shadow-2xl w-full max-w-md mx-auto relative transition-all">
        {/* Close button */}
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold mb-6 text-center">Create New Session</h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Topic input */}
          <input
            type="text"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-gray-50 dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Session Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />

          {/* Date and Time inputs */}
          <div className="flex gap-2">
            <input
              type="date"
              className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-gray-50 dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="time"
              className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-gray-50 dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          {/* Student multi-select */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Add Students to Session
            </label>
            <StudentMultiSelect
              students={students}
              selectedIds={selectedStudentIds}
              setSelectedIds={setSelectedStudentIds}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition text-lg shadow"
          >
            Create Session
          </button>
        </form>
      </div>
    </div>
  );
}
