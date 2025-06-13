import React from 'react';
import AuthTabs from './AuthTabs';
import LoginForm from './LoginForm';

function RightPanel() {
  return (
    <div className="w-1/2 bg-gray-100 p-10 flex flex-col justify-center items-center">
      <AuthTabs />

      <div className="flex space-x-2 mt-4">
        <button className="border px-4 py-2 rounded-l bg-white">Login</button>
        <button className="border px-4 py-2 rounded-r bg-white">Register</button>
      </div>

    
      <LoginForm />

      <p className="mt-6 text-sm text-gray-600">or continue with</p>
      <div className="flex space-x-4 mt-2">
        <button className="bg-white p-2 rounded border">🟥</button>
        <button className="bg-white p-2 rounded border">🟦</button>
        <button className="bg-white p-2 rounded border">⬛</button>
      </div>
    </div>
  );
}

export default RightPanel;
