import React from "react";

const Topbar = ({ studentName, studentId }) => {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <header className="mb-6 md:mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        Welcome back, {studentName}!
      </h1>
      <p className="text-gray-600 mt-2">
        {formattedDate} | Spring Semester 2025
      </p>
      <p className="text-gray-600">{studentId}</p>
    </header>
  );
};

export default Topbar;

