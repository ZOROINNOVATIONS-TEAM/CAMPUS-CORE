import React from 'react';
import logo from '../assets/logo.png';

function LeftPanel() {
  return (
    <div className="w-1/2 bg-blue-600 text-white p-10 flex flex-col justify-between">
      <div>
         <img src={logo} alt="Campus Core Logo" className="w-20 mb-6 rounded-full" />
        <p className="text-lg mb-10">
          Welcome to Your Academic Journey<br />
          Manage courses, track schedule, and stay organized.
        </p>

        <div className="space-y-4">
          <div className="bg-blue-500 p-4 rounded">📚 Course Management</div>
          <div className="bg-blue-500 p-4 rounded">🕒 Schedule Tracking</div>
          <div className="bg-blue-500 p-4 rounded">📊 Progress Analytics</div>
        </div>
      </div>

      <div className="bg-blue-500 p-4 rounded mt-10">
        <p>
          "The platform is intuitive and saves me hours." <br />
          <span className="text-sm">– Dr. Michael T., Engineering Faculty</span>
        </p>
      </div>
    </div>
  );
}

export default LeftPanel;
