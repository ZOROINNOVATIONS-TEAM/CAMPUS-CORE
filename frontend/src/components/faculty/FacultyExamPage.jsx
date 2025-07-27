import React, { useState } from "react";
import {
  FaClipboardList,
  FaRegCalendarAlt,
  FaRegClock,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaPlus,
  FaSearch,
} from "react-icons/fa";

const initialExams = [
  {
    id: 1,
    title: "Mid-term Mathematics",
    course: "MATH301",
    type: "Written",
    date: "2025-08-10",
    time: "10:00 AM - 12:00 PM",
    venue: "Room 203",
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Physics Lab Practical",
    course: "PHYS201",
    type: "Lab",
    date: "2025-08-15",
    time: "2:00 PM - 4:00 PM",
    venue: "Lab 8",
    status: "Scheduled",
  },
  {
    id: 3,
    title: "Computer Science Quiz",
    course: "CST01",
    type: "Online",
    date: "2025-09-01",
    time: "9:00 AM - 9:30 AM",
    venue: "Online",
    status: "Draft",
  },
  {
    id: 4,
    title: "Mathematics Final Exam",
    course: "MATH301",
    type: "Written",
    date: "2025-12-20",
    time: "10:00 AM - 1:00 PM",
    venue: "Main Hall",
    status: "Draft",
  },
];

const examTypes = ["Written", "Lab", "Online"];

export default function FacultyExamPage() {
  const [exams, setExams] = useState(initialExams);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newExam, setNewExam] = useState({
    title: "",
    course: "",
    type: "Written",
    date: "",
    time: "",
    venue: "",
    status: "Draft",
  });

  // Filter exams by search string
  const filteredExams = exams.filter(
    (exam) =>
      exam.title.toLowerCase().includes(search.toLowerCase()) ||
      exam.course.toLowerCase().includes(search.toLowerCase()) ||
      exam.type.toLowerCase().includes(search.toLowerCase())
  );

  // Handle add exam
  function handleAddExam(e) {
    e.preventDefault();
    if (
      newExam.title &&
      newExam.course &&
      newExam.date &&
      newExam.time &&
      newExam.venue
    ) {
      setExams([
        ...exams,
        {
          ...newExam,
          id: exams.length + 1,
        },
      ]);
      setShowAdd(false);
      setNewExam({
        title: "",
        course: "",
        type: "Written",
        date: "",
        time: "",
        venue: "",
        status: "Draft",
      });
    } else {
      alert("Please fill all fields!");
    }
  }

  // Toggle status between Scheduled/Draft
  function toggleStatus(id) {
    setExams((prev) =>
      prev.map((exam) =>
        exam.id === id
          ? {
              ...exam,
              status: exam.status === "Scheduled" ? "Draft" : "Scheduled",
            }
          : exam
      )
    );
  }

  // Handle edit (for demo, just toggles status)
  function handleEdit(id) {
    toggleStatus(id);
  }

  return (
    <div className="min-h-screen bg-[#ededed] p-0 flex flex-col">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <FaClipboardList className="text-[#3666F6] text-2xl" />
              <span className="font-bold text-2xl">Exam Management</span>
            </div>
            <button
              className="flex items-center gap-2 bg-[#3666F6] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
              onClick={() => setShowAdd(true)}
            >
              <FaPlus /> Add Exam
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div className="relative w-full max-w-xs">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-md border border-gray-200 w-full text-sm focus:ring-[#3666F6] focus:border-[#3666F6]"
                placeholder="Search by exam title, course, or type..."
              />
            </div>
          </div>
          {/* Exam Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="bg-[#eef4fe] text-[#3666F6]">
                  <th className="py-2 px-2">Title</th>
                  <th className="py-2 px-2">Course</th>
                  <th className="py-2 px-2">Type</th>
                  <th className="py-2 px-2">Date</th>
                  <th className="py-2 px-2">Time</th>
                  <th className="py-2 px-2">Venue</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredExams.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center py-6 text-gray-400">
                      No exams found.
                    </td>
                  </tr>
                )}
                {filteredExams.map((exam) => (
                  <tr key={exam.id} className="border-b last:border-b-0">
                    <td className="py-2 px-2 font-semibold">{exam.title}</td>
                    <td className="py-2 px-2">{exam.course}</td>
                    <td className="py-2 px-2">{exam.type}</td>
                    <td className="py-2 px-2">
                      <span className="flex items-center gap-2">
                        <FaRegCalendarAlt /> {exam.date}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <span className="flex items-center gap-2">
                        <FaRegClock /> {exam.time}
                      </span>
                    </td>
                    <td className="py-2 px-2">{exam.venue}</td>
                    <td className="py-2 px-2">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                          exam.status === "Scheduled"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {exam.status === "Scheduled" ? (
                          <FaCheckCircle />
                        ) : (
                          <FaTimesCircle />
                        )}
                        {exam.status}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <button
                        className="flex items-center gap-1 text-[#3666F6] hover:underline"
                        onClick={() => handleEdit(exam.id)}
                        title="Toggle Scheduled/Draft"
                      >
                        <FaEdit /> Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Exam Modal */}
        {showAdd && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
            <form
              onSubmit={handleAddExam}
              className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 flex flex-col gap-4 animate-fadein-up"
            >
              <div className="font-bold text-xl mb-1 text-[#3666F6] flex items-center gap-2">
                <FaPlus /> Add New Exam
              </div>
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Exam Title"
                value={newExam.title}
                onChange={(e) => setNewExam({ ...newExam, title: e.target.value })}
                required
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Course Code (e.g., MATH301)"
                value={newExam.course}
                onChange={(e) => setNewExam({ ...newExam, course: e.target.value })}
                required
              />
              <select
                className="border p-2 rounded"
                value={newExam.type}
                onChange={(e) => setNewExam({ ...newExam, type: e.target.value })}
              >
                {examTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <input
                type="date"
                className="border p-2 rounded"
                value={newExam.date}
                onChange={(e) => setNewExam({ ...newExam, date: e.target.value })}
                required
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Time (e.g., 10:00 AM - 12:00 PM)"
                value={newExam.time}
                onChange={(e) => setNewExam({ ...newExam, time: e.target.value })}
                required
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Venue"
                value={newExam.venue}
                onChange={(e) => setNewExam({ ...newExam, venue: e.target.value })}
                required
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-[#3666F6] text-white px-5 py-2 rounded font-semibold hover:bg-blue-700 transition"
                >
                  Add Exam
                </button>
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 px-5 py-2 rounded font-semibold hover:bg-gray-300 transition"
                  onClick={() => setShowAdd(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
            <style>{`
              .animate-fadein-up {
                animation: fadeinUp 0.5s;
              }
              @keyframes fadeinUp {
                from { opacity: 0; transform: translateY(40px);}
                to { opacity: 1; transform: translateY(0);}
              }
            `}</style>
          </div>
        )}
      </main>
    </div>
  );
}