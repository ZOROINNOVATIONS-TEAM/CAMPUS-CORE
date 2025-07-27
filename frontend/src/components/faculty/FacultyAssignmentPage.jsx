import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaRegCalendarAlt,
  FaRegFileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaDownload,
  FaUpload
} from "react-icons/fa";

const initialAssignments = [
  {
    id: 1,
    title: "Calculus Homework 1",
    course: "MATH301",
    dueDate: "2025-08-25",
    description: "Solve questions 1-10 from chapter 3.",
    file: "",
    status: "Published",
  },
  {
    id: 2,
    title: "Lab Report: Motion",
    course: "PHYS201",
    dueDate: "2025-08-28",
    description: "Submit the motion lab report.",
    file: "",
    status: "Draft",
  },
  {
    id: 3,
    title: "Programming Assignment",
    course: "CST01",
    dueDate: "2025-08-30",
    description: "Implement a stack in C++.",
    file: "",
    status: "Published",
  },
];

export default function FacultyAssignmentPage() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [search, setSearch] = useState("");
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    course: "",
    dueDate: "",
    description: "",
    file: "",
    status: "Draft",
  });

  // Filtered assignments
  const filtered = assignments.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.course.toLowerCase().includes(search.toLowerCase())
  );

  // Handle file upload (simulate)
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setForm((f) => ({ ...f, file: file.name }));
    }
  }

  // Open add modal
  function openAdd() {
    setShowAddEdit(true);
    setEditId(null);
    setForm({
      title: "",
      course: "",
      dueDate: "",
      description: "",
      file: "",
      status: "Draft",
    });
  }

  // Open edit modal
  function openEdit(id) {
    setEditId(id);
    setShowAddEdit(true);
    const found = assignments.find((a) => a.id === id);
    setForm(found);
  }

  // Add or update assignment
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.course || !form.dueDate) {
      alert("Please fill all required fields.");
      return;
    }
    if (editId) {
      setAssignments((prev) =>
        prev.map((a) => (a.id === editId ? { ...form, id: editId } : a))
      );
    } else {
      setAssignments((prev) => [
        ...prev,
        { ...form, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
      ]);
    }
    setShowAddEdit(false);
    setEditId(null);
  }

  // Delete assignment
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      setAssignments((prev) => prev.filter((a) => a.id !== id));
    }
  }

  // Download file (simulate)
  function handleDownload(a) {
    alert(
      a.file
        ? `Downloading file: ${a.file}`
        : "No file attached to this assignment."
    );
  }

  // Toggle publish/draft
  function handleToggleStatus(id) {
    setAssignments((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: a.status === "Published" ? "Draft" : "Published" }
          : a
      )
    );
  }

  return (
    <div className="min-h-screen bg-[#ededed] flex flex-col">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <FaRegFileAlt className="text-[#3666F6] text-2xl" />
              <span className="font-bold text-2xl">Assignment Management</span>
            </div>
            <button
              className="flex items-center gap-2 bg-[#3666F6] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
              onClick={openAdd}
            >
              <FaPlus /> Add Assignment
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
                placeholder="Search by assignment title or course..."
              />
            </div>
          </div>
          {/* Assignments Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="bg-[#eef4fe] text-[#3666F6]">
                  <th className="py-2 px-2">Title</th>
                  <th className="py-2 px-2">Course</th>
                  <th className="py-2 px-2">Due Date</th>
                  <th className="py-2 px-2">Description</th>
                  <th className="py-2 px-2">Attachment</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-6 text-gray-400">
                      No assignments found.
                    </td>
                  </tr>
                )}
                {filtered.map((a) => (
                  <tr key={a.id} className="border-b last:border-b-0">
                    <td className="py-2 px-2 font-semibold">{a.title}</td>
                    <td className="py-2 px-2">{a.course}</td>
                    <td className="py-2 px-2 flex items-center gap-2">
                      <FaRegCalendarAlt /> {a.dueDate}
                    </td>
                    <td className="py-2 px-2">{a.description}</td>
                    <td className="py-2 px-2">
                      {a.file ? (
                        <button
                          onClick={() => handleDownload(a)}
                          className="flex items-center gap-1 text-[#3666F6] hover:underline"
                        >
                          <FaDownload /> {a.file}
                        </button>
                      ) : (
                        <span className="text-gray-400">No file</span>
                      )}
                    </td>
                    <td className="py-2 px-2">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                          a.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {a.status === "Published" ? (
                          <FaCheckCircle />
                        ) : (
                          <FaTimesCircle />
                        )}
                        {a.status}
                      </span>
                    </td>
                    <td className="py-2 px-2 flex gap-2">
                      <button
                        className="flex items-center gap-1 text-[#3666F6] hover:underline"
                        onClick={() => openEdit(a.id)}
                        title="Edit"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="flex items-center gap-1 text-red-500 hover:underline"
                        onClick={() => handleDelete(a.id)}
                        title="Delete"
                      >
                        <FaTrash /> Delete
                      </button>
                      <button
                        className="flex items-center gap-1 text-[#3666F6] hover:underline"
                        onClick={() => handleToggleStatus(a.id)}
                        title={
                          a.status === "Published"
                            ? "Move to Draft"
                            : "Publish Assignment"
                        }
                      >
                        {a.status === "Published" ? <FaTimesCircle /> : <FaCheckCircle />}
                        {a.status === "Published" ? "Draft" : "Publish"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Modal */}
        {showAddEdit && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 flex flex-col gap-4 animate-fadein-up"
            >
              <div className="font-bold text-xl mb-1 text-[#3666F6] flex items-center gap-2">
                {editId ? <FaEdit /> : <FaPlus />}{" "}
                {editId ? "Edit Assignment" : "Add Assignment"}
              </div>
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Assignment Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Course Code (e.g., MATH301)"
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                required
              />
              <input
                type="date"
                className="border p-2 rounded"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                required
              />
              <textarea
                className="border p-2 rounded"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3}
              />
              <div className="flex items-center gap-2">
                <label className="flex gap-2 items-center cursor-pointer">
                  <FaUpload className="text-[#3666F6]" />
                  <span className="text-xs font-semibold text-[#3666F6]">
                    {form.file || "Attach File"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xlsx,.txt"
                  />
                </label>
                {form.file && (
                  <button
                    type="button"
                    className="text-red-500 text-xs ml-2"
                    onClick={() => setForm({ ...form, file: "" })}
                  >
                    Remove
                  </button>
                )}
              </div>
              <select
                className="border p-2 rounded"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-[#3666F6] text-white px-5 py-2 rounded font-semibold hover:bg-blue-700 transition"
                >
                  {editId ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 px-5 py-2 rounded font-semibold hover:bg-gray-300 transition"
                  onClick={() => {
                    setShowAddEdit(false);
                    setEditId(null);
                  }}
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