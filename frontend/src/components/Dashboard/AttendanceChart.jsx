import React from "react";

const AttendanceChart = () => {
  const attendance = [
    { status: "Present", percent: 85, color: "bg-green-500" },
    { status: "Late", percent: 10, color: "bg-yellow-400" },
    { status: "Absent", percent: 5, color: "bg-red-500" },
  ];

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Attendance Summary</h2>
      <div className="flex justify-between mb-6">
        {attendance.map(({ status, percent }) => (
          <div key={status} className="text-center">
            <p className="text-2xl font-bold text-gray-800">{percent}%</p>
            <p className="text-gray-600">{status}</p>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden flex">
        {attendance.map(({ percent, color }) => (
          <div
            key={color}
            className={`${color} h-6`}
            style={{ width: `${percent}%` }}
          />
        ))}
      </div>
      <p className="mt-4 text-right text-blue-600 cursor-pointer hover:underline">
        View Details
      </p>
      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-2">Week-by-week attendance</p>
        <div className="flex justify-between">
          {weeks.map((week, i) => (
            <div key={i} className="text-xs text-gray-500">
              {week}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full mt-2">
          <div className="h-2 bg-green-500 rounded-full" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;


