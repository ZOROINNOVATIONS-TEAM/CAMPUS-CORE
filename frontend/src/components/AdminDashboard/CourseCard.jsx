import React from "react";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full sm:w-[47%] lg:w-[30%]">
      <div className="text-sm text-gray-500 mb-1">{course.department}</div>
      <div className="text-lg font-bold">{course.title}</div>
      <div className="text-xs text-gray-400">By {course.instructor}</div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">Credits: {course.credits}</span>
        <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-600">
          Assign
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
