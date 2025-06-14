import React from "react";
import AdminRegisterForm from "../components/AdminRegisterForm";

export default function AdminRegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#cfd8cf]">
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        {/* Left: Info Panel (reuse from login for consistency) */}
        <div className="w-1/2 bg-blue-700 relative flex flex-col justify-center items-center p-10">
          <div className="absolute inset-0 bg-blue-700 bg-opacity-80 rounded-3xl"></div>
          <div className="relative z-10 flex flex-col items-center">
            <img src="/logo.png" alt="Campus Core" className="mb-6 w-36" />
            <h2 className="text-xl font-bold text-white mb-4 text-center">Join Campus Core</h2>
            <p className="text-white text-center mb-8 opacity-90">
              Register to manage your academic life with ease and efficiency.
            </p>
            <div className="flex space-x-6 mb-8">
              <InfoIcon icon="📚" label="Course Management" />
              <InfoIcon icon="🗓️" label="Schedule Tracking" />
              <InfoIcon icon="💬" label="Connect with Faculty" />
            </div>
            <blockquote className="bg-blue-800 bg-opacity-70 p-4 rounded text-white text-sm text-center">
              <p>
                This platform simplifies registration and enhances collaboration between students and teachers.
              </p>
              <footer className="mt-2">Prof. A. Sharma, Academic Coordinator</footer>
            </blockquote>
          </div>
        </div>
        {/* Right: Register Form */}
        <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-[#f6f7f9]">
          <div className="w-full max-w-sm">
            <AdminRegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-1 text-2xl">{icon}</div>
      <div className="text-xs">{label}</div>
    </div>
  );
}
