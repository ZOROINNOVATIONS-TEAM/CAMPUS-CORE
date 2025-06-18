import React from "react";

function CourseStats() {
  const stats = [
    { label: "Total Courses", value: 48 },
    { label: "Departments", value: 12 },
    { label: "Active Faculty", value: 36 },
    { label: "Total Students", value: 1248 },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 flex items-center justify-between">
      <div className="flex gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-lg font-semibold">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        + Add New Course
      </button>
    </div>
  );
}

export default CourseStats;
