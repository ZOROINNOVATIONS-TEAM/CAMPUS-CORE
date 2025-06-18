import React from "react";

const OverallPerformance = () => {
  return (
    <div className="bg-[#2b2f42] rounded-xl p-6 shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-white">Overall Performance</h2>
      <p className="text-sm text-gray-300">Summary of your performance across assessments.</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
        Analyze Performance
      </button>

      <div className="flex justify-between gap-4 mt-4">
        <div className="bg-blue-800 rounded-lg p-4 flex-1">
          <p className="text-sm text-white">Average Score</p>
          <p className="text-2xl font-bold text-white">80.25%</p>
        </div>
        <div className="bg-green-800 rounded-lg p-4 flex-1">
          <p className="text-sm text-white">Passed Subjects</p>
          <p className="text-2xl font-bold text-white">6</p>
        </div>
        <div className="bg-red-800 rounded-lg p-4 flex-1">
          <p className="text-sm text-white">Failed Subjects</p>
          <p className="text-2xl font-bold text-white">2</p>
        </div>
      </div>
    </div>
  );
};

export default OverallPerformance;
