import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to the Admin Dashboard!
        </p>
        <p className="text-gray-600 mb-6">
          Here you can manage users, courses, and settings.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Manage Users
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Manage Courses
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

