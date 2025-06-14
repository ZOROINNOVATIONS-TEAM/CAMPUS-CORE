import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function AuthTabs() {
  const [selectedRole, setSelectedRole] = useState('Student');
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Left Panel */}
        <div className="w-1/2 bg-blue-600 text-white p-8 flex flex-col justify-center space-y-6">
          <img src="/logo.png" alt="Campus Core" className="w-32 mx-auto" />
          <h2 className="text-center text-xl font-semibold">Welcome to Your Academic Journey</h2>
          <p className="text-center text-sm">Manage your courses, track your schedule, and stay organized with our management platform.</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>📚<br />Course<br />Management</div>
            <div>📅<br />Schedule<br />Tracking</div>
            <div>📈<br />Progress<br />Analytics</div>
          </div>
          <p className="text-xs text-center opacity-80 mt-4">“As a professor, I appreciate how simple it is to communicate schedule changes to my students...”<br />– Dr. Michael T., Engineering Faculty</p>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-white p-8 flex flex-col justify-center space-y-4">
          {/* Role Tabs */}
          <div className="flex justify-center gap-2">
            {['Student', 'Faculty'].map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-1 rounded-full border ${
                  selectedRole === role ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Header */}
          <h2 className="text-center text-lg font-semibold text-gray-700">
            Logging in as <span className="text-blue-600 lowercase">{selectedRole}</span>
          </h2>

          {/* Login/Signup Toggle */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveTab('login')}
              className={`text-sm px-3 py-1 rounded ${
                activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`text-sm px-3 py-1 rounded ${
                activeTab === 'signup' ? 'bg-purple-500 text-white' : 'bg-gray-200'
              }`}
            >
              Signup
            </button>
          </div>

          {/* Form Display */}
          {activeTab === 'login' ? <LoginForm role={selectedRole} /> : <SignupForm role={selectedRole} />}
        </div>
      </div>
    </div>
  );
}

export default AuthTabs;
