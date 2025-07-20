// src/pages/auth/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGraduate,
  faUserTie,
  faChalkboardTeacher,
  faClock,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { login } = useAuth();
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const roles = [
    { id: "student", icon: faUserGraduate, label: "Student" },
    { id: "faculty", icon: faUserTie, label: "Faculty" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Please fill in both email and password.");
      return;
    }

    console.log("Login attempt with:", { email, password, role });
    login(email, role);

    // Navigate based on role
    if (role === "student") {
      navigate("/dashboard");
    } else if (role === "faculty") {
      navigate("/facultydashboard");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-1/2 bg-cyan-300 text-black p-10 flex flex-col justify-center items-center">
        <img src="/camplogo.jpg" alt="Campus Core Logo" className="w-40 h-40 rounded-full" />
        <h2 className="text-2xl font-bold mb-4">Welcome to Your Academic Journey</h2>
        <p className="mb-8 text-center">
          Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
        </p>
        <div className="flex space-x-4 mb-8">
          <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-4 w-28">
            <span className="text-2xl mb-2">📚</span>
            <span className="text-sm">Course Management</span>
          </div>
          <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-4 w-28">
            <span className="text-2xl mb-2">⏰</span>
            <span className="text-sm">Schedule Tracking</span>
          </div>
          <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-4 w-28">
            <span className="text-2xl mb-2">📈</span>
            <span className="text-sm">Progress Analytics</span>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-sm italic">
          As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week.
          <br />
          <span className="font-semibold">Dr. Michael T., Engineering Faculty</span>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-teal-100">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <div className="flex justify-center space-x-2">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md border ${
                      role === r.id
                        ? "bg-blue-100 border-blue-500 text-blue-700"
                        : "bg-white border-gray-300 text-gray-700"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={r.icon}
                      className={
                        r.id === "student" ? "text-purple-900" :
                        r.id === "faculty" ? "text-orange-900" : undefined
                      }
                    />
                    <span>{r.label}</span>
                  </button>
                ))}
              </div>
              {role && (
                <p className="text-center mt-2 text-gray-600">Logging in as {role}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email or Student ID
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or student ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">or continue with</p>
              <div className="flex justify-center space-x-4 mt-2">
                <button className="p-2 border border-gray-300 rounded-full">
                  <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 text-red-500" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full">
                  <FontAwesomeIcon icon={faMicrosoft} className="w-5 h-5 text-blue-500" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full">
                  <FontAwesomeIcon icon={faApple} className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

