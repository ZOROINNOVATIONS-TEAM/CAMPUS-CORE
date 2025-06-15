import React from "react";

export default function AttendanceSummary() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Attendance Summary</h3>
        <a href="#" className="text-blue-600 text-sm">View Details</a>
      </div>

      <div className="flex gap-4 mb-3">
        <div className="bg-blue-100 text-blue-700 p-4 rounded-xl w-full text-center">
          <p className="text-2xl font-bold">85%</p>
          <p className="text-sm">Present</p>
        </div>
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-xl w-full text-center">
          <p className="text-2xl font-bold">10%</p>
          <p className="text-sm">Late</p>
        </div>
        <div className="bg-red-100 text-red-700 p-4 rounded-xl w-full text-center">
          <p className="text-2xl font-bold">5%</p>
          <p className="text-sm">Absent</p>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-2 text-xs text-center text-gray-600">
        {[...Array(8)].map((_, week) => (
          <div key={week}>
            <div className="h-24 flex flex-col-reverse">
              <div className="bg-red-500 h-[10%] w-full"></div>
              <div className="bg-yellow-400 h-[15%] w-full"></div>
              <div className="bg-blue-600 h-[75%] w-full"></div>
            </div>
            <p className="mt-1">Week {week + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
