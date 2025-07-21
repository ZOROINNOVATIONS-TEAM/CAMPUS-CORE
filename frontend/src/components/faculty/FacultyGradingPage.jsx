import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaPen, FaSort, FaSearch } from "react-icons/fa";

const initialCourses = [
  {
    id: 1,
    code: "MATH301",
    title: "Advanced Mathematics",
    students: [
      { id: 1, name: "Alice Johnson", grade: 90, status: "Passed" },
      { id: 2, name: "Bob Smith", grade: 72, status: "Passed" },
      { id: 3, name: "Cathy Lee", grade: 58, status: "Failed" },
    ],
  },
  {
    id: 2,
    code: "CST01",
    title: "Introduction to Computer Science",
    students: [
      { id: 4, name: "David Brown", grade: 80, status: "Passed" },
      { id: 5, name: "Ella Stone", grade: 67, status: "Passed" },
      { id: 6, name: "Frank White", grade: 59, status: "Failed" },
    ],
  },
  {
    id: 3,
    code: "PHYS201",
    title: "Physics Laboratory",
    students: [
      { id: 7, name: "Grace Green", grade: 93, status: "Passed" },
      { id: 8, name: "Henry Black", grade: 75, status: "Passed" },
      { id: 9, name: "Ivy Wilson", grade: 61, status: "Passed" },
    ],
  },
];

export default function FacultyGradingPage() {
  const [courses, setCourses] = useState(initialCourses);
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourses[0].id);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [editStudent, setEditStudent] = useState(null);
  const [newGrade, setNewGrade] = useState("");

  const selectedCourse = courses.find((c) => c.id === selectedCourseId);

  // Filter students by search
  const filteredStudents = selectedCourse.students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort students by grade
  const sortedStudents = [...filteredStudents].sort((a, b) =>
    sortAsc ? a.grade - b.grade : b.grade - a.grade
  );

  // Open edit modal
  function handleEdit(student) {
    setEditStudent(student);
    setNewGrade(student.grade.toString());
  }

  // Save grade
  function handleSaveGrade() {
    if (!newGrade || isNaN(Number(newGrade))) {
      alert("Please enter a valid grade!");
      return;
    }
    const gradeVal = Math.max(0, Math.min(100, Number(newGrade)));
    setCourses((prev) =>
      prev.map((course) =>
        course.id === selectedCourseId
          ? {
              ...course,
              students: course.students.map((stu) =>
                stu.id === editStudent.id
                  ? {
                      ...stu,
                      grade: gradeVal,
                      status: gradeVal >= 60 ? "Passed" : "Failed",
                    }
                  : stu
              ),
            }
          : course
      )
    );
    setEditStudent(null);
    setNewGrade("");
  }

  return (
    <div className="min-h-screen bg-[#ededed] p-0 flex flex-col">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#3666F6] text-2xl" />
              <span className="font-bold text-2xl">Grading Management</span>
            </div>
            <div className="flex items-center gap-3">
              <label className="font-semibold text-gray-600 text-base">Select Course: </label>
              <select
                className="border border-gray-200 rounded px-3 py-2 text-sm"
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(Number(e.target.value))}
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.code})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div className="relative w-full max-w-xs">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-md border border-gray-200 w-full text-sm focus:ring-[#3666F6] focus:border-[#3666F6]"
                placeholder="Search by student name..."
              />
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-[#eef4fe] text-[#3666F6] text-sm rounded font-semibold hover:bg-blue-100 transition"
              onClick={() => setSortAsc((asc) => !asc)}
            >
              <FaSort /> Sort by Grade {sortAsc ? "↑" : "↓"}
            </button>
          </div>
          {/* Students Grading Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="bg-[#eef4fe] text-[#3666F6]">
                  <th className="py-2 px-2">Student Name</th>
                  <th className="py-2 px-2">Grade</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedStudents.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center py-6 text-gray-400">
                      No students found.
                    </td>
                  </tr>
                )}
                {sortedStudents.map((student) => (
                  <tr key={student.id} className="border-b last:border-b-0">
                    <td className="py-2 px-2 font-semibold">{student.name}</td>
                    <td className="py-2 px-2">{student.grade}</td>
                    <td className="py-2 px-2">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                          student.status === "Passed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {student.status === "Passed" ? (
                          <FaCheckCircle />
                        ) : (
                          <FaTimesCircle />
                        )}
                        {student.status}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <button
                        className="flex items-center gap-1 text-[#3666F6] hover:underline"
                        onClick={() => handleEdit(student)}
                        title="Edit Grade"
                      >
                        <FaPen /> Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Grade Modal */}
        {editStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 flex flex-col gap-4 animate-fadein-up">
              <div className="font-bold text-xl mb-1 text-[#3666F6] flex items-center gap-2">
                <FaPen /> Edit Grade for {editStudent.name}
              </div>
              <input
                type="number"
                className="border p-2 rounded text-xl font-semibold"
                value={newGrade}
                min={0}
                max={100}
                onChange={(e) => setNewGrade(e.target.value)}
                placeholder="Enter grade (0-100)"
                required
              />
              <div className="flex gap-3">
                <button
                  className="bg-[#3666F6] text-white px-5 py-2 rounded font-semibold hover:bg-blue-700 transition"
                  onClick={handleSaveGrade}
                >
                  Save Grade
                </button>
                <button
                  className="bg-gray-200 text-gray-700 px-5 py-2 rounded font-semibold hover:bg-gray-300 transition"
                  onClick={() => setEditStudent(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
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