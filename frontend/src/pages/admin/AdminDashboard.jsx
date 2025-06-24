// src/pages/AdminDashboard.jsx
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h2>
        <p className="text-center text-gray-600">
          Welcome to the Admin Dashboard!
        </p>
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600">
            Here you can manage users, courses, and settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
