import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function RightPanel() {
  const [selectedRole, setSelectedRole] = useState('Student');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-1/2 h-screen bg-white px-10 py-6 flex flex-col justify-center items-center overflow-hidden">
      {/* Role Switch */}
      <div className="flex space-x-3 mb-3">
        {['Student', 'Faculty'].map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`px-4 py-1 rounded border ${
              selectedRole === role ? 'bg-blue-600 text-white' : 'text-gray-600'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Login / Register Toggle */}
      <div className="flex mb-2 border-b w-full max-w-sm justify-between">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2 font-medium ${
            isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2 font-medium ${
            !isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          }`}
        >
          Sign up
        </button>
      </div>

      {/* Form */}
      <div className="w-full max-w-sm">
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default RightPanel;
