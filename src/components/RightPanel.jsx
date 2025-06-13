import React from 'react';
import AuthTabs from './AuthTabs';

function RightPanel() {
  return (
    <div className="w-1/2 bg-gray-100 p-10 flex flex-col justify-center items-center">
      <AuthTabs />
      
      <div className="flex space-x-2 mt-4">
        <button className="border px-4 py-2 rounded-l bg-white">Login</button>
        <button className="border px-4 py-2 rounded-r bg-white">Register</button>
      </div>

      <form className="mt-6 space-y-4 w-2/3">
        <input type="text" placeholder="Student ID or Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        
        <div className="flex justify-between items-center">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>

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
