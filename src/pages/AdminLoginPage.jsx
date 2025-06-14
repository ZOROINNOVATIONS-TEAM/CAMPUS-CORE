// src/pages/AdminLoginPage.jsx
import React, { useState } from "react";
import AdminLoginForm from "../components/AdminLoginForm";
import AdminRegisterForm from "../components/AdminRegisterForm";
import campuscore from '../assets/campuscore.jpeg'; // Adjust the path as needed


export default function AdminLoginPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#cfd8cf]">
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 bg-blue-600 relative flex flex-col justify-center items-center p-8">
          <div className="text-center z-10">
            <img src={campuscore} alt="Campus Core" className="mb-6 w-36 mx-auto" />
            <h2 className="text-xl font-bold text-white mb-4">Welcome to Your Academic Journey</h2>
            <p className="text-white opacity-90 mb-8">
              Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <FeatureIcon icon="📚" label="Course Management" />
              <FeatureIcon icon="🗓️" label="Schedule Tracking" />
              <FeatureIcon icon="📈" label="Progress Analytics" />
            </div>
            <div><blockquote className="bg-blue-700 bg-opacity-70 p-4 rounded text-white">
          <p>
            {activeTab === "login"
              ? "As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week."
              : "This platform simplifies registration and enhances collaboration between students and teachers."}
          </p>
          <footer className="mt-2 text-sm">
            {activeTab === "login"
              ? "Dr. Michael T., Engineering Faculty"
              : "Prof. A. Sharma, Academic Coordinator"}
          </footer>
        </blockquote>
        </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-gray-50">
          <div className="w-full max-w-sm">
            <div className="flex justify-between mb-6 rounded-lg bg-gray-100 p-1">
              <button
                className={`flex-1 py-2 rounded-lg ${activeTab === 'login' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 rounded-lg ${activeTab === 'register' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>
            
            {activeTab === "login" ? <AdminLoginForm /> : <AdminRegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl mb-2">{icon}</div>
      <span className="text-xs text-white">{label}</span>
    </div>
  );
}
