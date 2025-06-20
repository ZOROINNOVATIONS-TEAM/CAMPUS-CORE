import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import Modal from "../../common/Modal";

const mockStudents = [
  { id: 1, name: "Alice Sharma", email: "alice@campus.com", dept: "CSE" },
  { id: 2, name: "Ravi Verma", email: "ravi@campus.com", dept: "ECE" },
];

const mockFaculty = [
  { id: 1, name: "Dr. Neha Singh", email: "neha@campus.com", dept: "Mathematics" },
];

export default function ManageUsers() {
  const [tab, setTab] = useState("students");
  const [students, setStudents] = useState(mockStudents);
  const [faculty, setFaculty] = useState(mockFaculty);
  const data = tab === "students" ? students : faculty;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", dept: "" });

  // Open modal for new or existing user
  const openModal = (user = null) => {
    setEditUser(user);
    setFormData(user ? { ...user } : { name: "", email: "", dept: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditUser(null);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const newUser = { ...formData, id: editUser?.id || Date.now() };

    if (tab === "students") {
      setStudents(prev =>
        editUser ? prev.map(u => u.id === editUser.id ? newUser : u) : [...prev, newUser]
      );
    } else {
      setFaculty(prev =>
        editUser ? prev.map(u => u.id === editUser.id ? newUser : u) : [...prev, newUser]
      );
    }
    closeModal();
  };

  const handleDelete = id => {
    if (tab === "students") {
      setStudents(prev => prev.filter(u => u.id !== id));
    } else {
      setFaculty(prev => prev.filter(u => u.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full max-w-5xl mx-auto">
      {/* Tab Buttons + Add */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          {["students", "faculty"].map(type => (
            <button
              key={type}
              onClick={() => setTab(type)}
              className={`px-4 py-2 rounded font-semibold ${
                tab === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <button
          onClick={() => openModal()}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm"
        >
          <Plus className="w-4 h-4" />
          Add {tab === "students" ? "Student" : "Faculty"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Department</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id} className="border-t text-sm">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.dept}</td>
                <td className="py-2 px-4 flex gap-2">
                  <button onClick={() => openModal(user)} className="text-blue-600 hover:text-blue-800">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-400 py-4">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} title={editUser ? "Edit User" : "Add User"} onClose={closeModal}>
        <div className="flex flex-col gap-4">
          {["name", "email", "dept"].map(field => (
            <input
              key={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          ))}
          <button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
}
