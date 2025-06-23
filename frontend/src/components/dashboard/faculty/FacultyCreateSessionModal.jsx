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
      <div className="bg-white px-7 py-7 rounded-2xl shadow-2xl w-full max-w-md mx-auto relative transition-all">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-xl font-bold mb-6 text-center">Create New Session</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            placeholder="Session Topic"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            required
          />
          <div className="flex gap-2">
            <input
              type="date"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
            <input
              type="time"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
            />
          </div>
          {/* Modern multi-select for students */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Add Students to Session
            </label>
            <StudentMultiSelect
              students={students}
              selectedIds={selectedStudentIds}
              setSelectedIds={setSelectedStudentIds}
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-lg shadow"
          >
            Create Session
          </button>
        </form>
      </div>
    </div>
  );
}
