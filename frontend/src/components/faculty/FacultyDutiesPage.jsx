import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaRegCalendarAlt,
  FaRegClock,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

const initialDuties = [
  {
    id: 1,
    title: "Exam Invigilation",
    date: "2025-08-18",
    time: "10:00 AM - 12:00 PM",
    location: "Room 302",
    description: "Invigilate the mid-term mathematics examination.",
    status: "Assigned",
  },
  {
    id: 2,
    title: "Lab Supervision",
    date: "2025-08-22",
    time: "2:00 PM - 5:00 PM",
    location: "Physics Lab",
    description: "Supervise practical sessions for Physics Lab.",
    status: "Completed",
  },
  {
    id: 3,
    title: "Library Duty",
    date: "2025-08-25",
    time: "11:00 AM - 1:00 PM",
    location: "Main Library",
    description: "Oversee student activities in the main library.",
    status: "Assigned",
  },
];

export default function FacultyDutiesPage() {
  const [duties, setDuties] = useState(initialDuties);
  const [search, setSearch] = useState("");
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    status: "Assigned",
  });

  // Filtered duties
  const filtered = duties.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.location.toLowerCase().includes(search.toLowerCase())
  );

  // Open add modal
  function openAdd() {
    setShowAddEdit(true);
    setEditId(null);
    setForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      status: "Assigned",
    });
  }

  // Open edit modal
  function openEdit(id) {
    setEditId(id);
    setShowAddEdit(true);
    const found = duties.find((d) => d.id === id);
    setForm(found);
  }

  // Add or update duty
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.date || !form.time || !form.location) {
      alert("Please fill all required fields.");
      return;
    }
    if (editId) {
      setDuties((prev) =>
        prev.map((d) => (d.id === editId ? { ...form, id: editId } : d))
      );
    } else {
      setDuties((prev) => [
        ...prev,
        { ...form, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
      ]);
    }
    setShowAddEdit(false);
    setEditId(null);
  }

  // Delete duty
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this duty?")) {
      setDuties((prev) => prev.filter((d) => d.id !== id));
    }
  }

  // Toggle status Assigned/Completed
  function handleToggleStatus(id) {
    setDuties((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, status: d.status === "Assigned" ? "Completed" : "Assigned" }
          : d
      )
    );
  }

  return (
    <div className="min-h-screen bg-[#ededed] flex flex-col">
      <main className="w-full max-w-[1000px] mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <FaRegClock className="text-[#3666F6] text-2xl" />
              <span className="font-bold text-2xl">Faculty Duties</span>
            </div>
            <button
              className="flex items-center gap-2 bg-[#3666F6] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
              onClick={openAdd}
            >
              <FaPlus /> Add Duty
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
                placeholder="Search by title or location..."
              />
            </div>
          </div>
          {/* Duties Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="bg-[#eef4fe] text-[#3666F6]">
                  <th className="py-2 px-2">Title</th>
                  <th className="py-2 px-2">Date</th>
                  <th className="py-2 px-2">Time</th>
                  <th className="py-2 px-2">Location</th>
                  <th className="py-2 px-2">Description</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-6 text-gray-400">
                      No duties found.
                    </td>
                  </tr>
                )}
                {filtered.map((d) => (
                  <tr key={d.id} className="border-b last:border-b-0">
                    <td className="py-2 px-2 font-semibold">{d.title}</td>
                    <td className="py-2 px-2 flex items-center gap-2">
                      <FaRegCalendarAlt /> {d.date}
                    </td>
                    <td className="py-2 px-2">{d.time}</td>
                    <td className="py-2 px-2">{d.location}</td>
                    <td className="py-2 px-2">{d.description}</td>
                    <td className="py-2 px-2">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                          d.status === "Assigned"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {d.status === "Assigned" ? (
                          <FaRegClock />
                        ) : (
                          <FaCheckCircle />
                        )}
                        {d.status}
                      </span>
                    </td>
                    <td className="py-2 px-2 flex gap-2">
                      <button
                        className="flex items-center gap-1 text-[#3666F6] hover:underline"
                        onClick={() => openEdit(d.id)}
                        title="Edit"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="flex items-center gap-1 text-red-500 hover:underline"
                        onClick={() => handleDelete(d.id)}
                        title="Delete"
                      >
                        <FaTrash /> Delete
                      </button>
                      <button
                        className="flex items-center gap-1 text-[#3666F6] hover:underline"
                        onClick={() => handleToggleStatus(d.id)}
                        title={
                          d.status === "Assigned"
                            ? "Mark as Completed"
                            : "Mark as Assigned"
                        }
                      >
                        {d.status === "Assigned" ? <FaCheckCircle /> : <FaRegClock />}
                        {d.status === "Assigned" ? "Complete" : "Assign"}
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
                {editId ? "Edit Duty" : "Add Duty"}
              </div>
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Duty Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
              <input
                type="date"
                className="border p-2 rounded"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Time (e.g., 10:00 AM - 12:00 PM)"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                required
              />
              <textarea
                className="border p-2 rounded"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3}
              />
              <select
                className="border p-2 rounded"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option value="Assigned">Assigned</option>
                <option value="Completed">Completed</option>
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