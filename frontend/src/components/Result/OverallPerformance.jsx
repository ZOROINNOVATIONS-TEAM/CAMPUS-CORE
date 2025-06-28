import React from "react";

const OverallPerformance = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Overall Performance</h2>
      <p className="text-sm text-gray-600">Summary of your performance across assessments.</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
        Analyze Performance
      </button>

      <div className="flex justify-between gap-4 mt-4">
        <div className="bg-blue-100 rounded-lg p-4 flex-1">
          <p className="text-sm text-gray-700">Average Score</p>
          <p className="text-2xl font-bold text-blue-800">80.25%</p>
        </div>
        <div className="bg-green-100 rounded-lg p-4 flex-1">
          <p className="text-sm text-gray-700">Passed Subjects</p>
          <p className="text-2xl font-bold text-green-800">6</p>
        </div>
        <div className="bg-red-100 rounded-lg p-4 flex-1">
          <p className="text-sm text-gray-700">Failed Subjects</p>
          <p className="text-2xl font-bold text-red-800">2</p>
        </div>
      </div>
    </div>
  );
};

export default OverallPerformance;
