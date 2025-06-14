import React, { useState } from 'react';

function RightPanel() {
  const [selectedRole, setSelectedRole] = useState('Student');
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="w-1/2 bg-white px-10 py-8 flex flex-col justify-center items-center space-y-5 rounded-r-2xl">
      {/* Role Tabs */}
      <div className="flex space-x-2">
        {['Student', 'Faculty'].map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`px-4 py-1 text-sm rounded-md border ${
              selectedRole === role ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Logging in as... */}
      <h2 className="text-base text-center text-gray-700 font-medium">
        Logging in as{' '}
        <span className="text-blue-600 lowercase">{selectedRole}</span>
      </h2>

      {/* Login/Signup Tabs */}
      <div className="flex space-x-3">
        <button
          onClick={() => setActiveTab('login')}
          className={`px-4 py-1 text-sm rounded ${
            activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`px-4 py-1 text-sm rounded ${
            activeTab === 'signup' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Signup
        </button>
      </div>

      {/* Simple Form */}
      <div className="bg-gray-50 p-6 rounded-lg w-full max-w-xs space-y-3 shadow">
        <h3 className="text-center text-lg font-semibold text-gray-800 capitalize">
          {activeTab}
        </h3>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 border rounded"
        />
        {activeTab === 'signup' && (
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 border rounded"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
        />
        {activeTab === 'signup' && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border rounded"
          />
        )}
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          {activeTab === 'login' ? 'Log In' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default RightPanel;
