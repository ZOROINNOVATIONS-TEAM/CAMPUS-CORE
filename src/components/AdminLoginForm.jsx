import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from '../assets/google.jpg';

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      // Mock admin login: any email/password works
      if (email && password) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUser", JSON.stringify({ email, role: "Admin" }));
        navigate("/admin/home");
      } else {
        setError("Please enter your Admin ID/email and password.");
      }
      setLoading(false);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">Logging in as Admin</h2>
      <div>
        <label className="block text-gray-600 text-sm mb-1">Admin ID or Email</label>
        <input
          type="email"
          placeholder="Enter your Admin ID or email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          autoFocus
          required
        />
      </div>
      <div>
        <label className="block text-gray-600 text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(""); }}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
        <div className="flex justify-end text-xs mt-1">
          <button type="button" className="text-blue-500 hover:underline">Forgot password?</button>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={remember}
          onChange={() => setRemember(!remember)}
          className="mr-2"
        />
        <span className="text-sm text-gray-600">Remember me</span>
      </div>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-200"></div>
        <span className="mx-2 text-gray-400 text-xs">or continue with</span>
        <div className="flex-grow h-px bg-gray-200"></div>
      </div>
      <button
        type="button"
        className="w-full flex justify-center items-center border border-gray-300 rounded py-2 bg-white hover:bg-gray-50 transition"
      >
        <img src={google} alt="Google" className="w-5 h-5 mr-2" />
        Log In with Google
      </button>
    </form>
  );
}
