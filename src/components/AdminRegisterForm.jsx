import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validation
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Check if user already exists (mocked with localStorage)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.email === form.email)) {
      setError("Email already registered.");
      setLoading(false);
      return;
    }

    // Save user
    users.push({ name: form.name, email: form.email, password: form.password, role: "Admin" });
    localStorage.setItem("users", JSON.stringify(users));

    setLoading(false);
    navigate("/admin/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">Admin Registration</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
      >
        {loading ? "Registering..." : "Register"}
      </button>
      <div className="text-center text-gray-400 mt-2">
        Already have an account?{" "}
        <button
          type="button"
          className="text-blue-600 underline"
          onClick={() => navigate("/admin/login")}
        >
          Login
        </button>
      </div>
    </form>
  );
}
