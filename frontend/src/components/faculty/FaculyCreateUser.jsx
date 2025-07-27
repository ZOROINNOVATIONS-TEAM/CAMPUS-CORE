import React, { useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

export default function FacultyCreateUser() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    rollno: "",
    pass: "",
    type: "student",
  });
  const [showToast, setShowToast] = useState(false);

  const userTypes = ["student", "faculty", "admin"];
  const isFormValid = Object.values(newUser).every((field) => field.trim() !== "");

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/v1/create_user", newUser);
      console.log("User created successfully:", res.data);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      setNewUser({
        name: "",
        email: "",
        rollno: "",
        pass: "",
        type: "student",
      });
    } catch (error) {
      console.error("Error creating user:", error);
      alert("❌ Failed to create user. Please check the console for more details.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] p-6 flex flex-col items-center relative">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleCreateUser}
          className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 animate-fadein-up"
        >
          <div className="text-xl font-bold text-[#3666F6] flex items-center gap-2">
            <FaPlus /> Add New User
          </div>

          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Full Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
          <input
            type="email"
            className="border p-2 rounded"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Roll Number"
            value={newUser.rollno}
            onChange={(e) => setNewUser({ ...newUser, rollno: e.target.value })}
            required
          />
          <input
            type="password"
            className="border p-2 rounded"
            placeholder="Password"
            value={newUser.pass}
            onChange={(e) => setNewUser({ ...newUser, pass: e.target.value })}
            required
          />

          <select
            className="border p-2 rounded"
            value={newUser.type}
            onChange={(e) => setNewUser({ ...newUser, type: e.target.value })}
            required
          >
            {userTypes.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>

          <div className="flex gap-3">
            <button
              type="submit"
              className={`px-5 py-2 rounded font-semibold transition text-white ${
                isFormValid
                  ? "bg-[#3666F6] hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Create User
            </button>
          </div>
        </form>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded shadow-lg animate-slidein">
          ✅ User Created Successfully!
        </div>
      )}

      <style>{`
        .animate-fadein-up {
          animation: fadeinUp 0.4s ease;
        }
        @keyframes fadeinUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slidein {
          animation: slidein 0.3s ease-out;
        }
        @keyframes slidein {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
