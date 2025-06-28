import React from "react";

export default function WelcomeCard() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white p-5 flex justify-between items-center shadow-md mt-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Welcome back, Dev!</h2>
        <p className="text-sm">Wednesday, June 11, 2025 | Spring Semester 2025</p>
        <p className="text-sm">Student ID: ST2023456</p>
      </div>
      <div className="bg-white text-indigo-600 px-5 py-3 rounded-lg text-right shadow-sm w-60">
        <p className="text-xs">Next Class</p>
        <p className="font-semibold text-sm">Advanced Mathematics</p>
        <p className="text-xs text-gray-500">in 45 minutes</p>
      </div>
    </div>
  );
}
