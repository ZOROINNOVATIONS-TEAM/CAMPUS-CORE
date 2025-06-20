import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AttendanceChart = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Attendance Summary</h2>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-600 hover:underline flex items-center"
        >
          {showDetails ? (
            <FontAwesomeIcon icon={faChevronUp} className="mr-1" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="mr-1" />
          )}
          {showDetails ? "Hide" : "View"} Details
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <div className="text-green-600">
          <span className="font-bold">90%</span> Present
        </div>
        <div className="text-yellow-600">
          <span className="font-bold">5%</span> Late
        </div>
        <div className="text-red-600">
          <span className="font-bold">5%</span> Absent
        </div>
      </div>
      <div className="h-4 bg-gray-200 rounded-full">
        <div className="h-4 rounded-full flex">
          <div className="bg-green-600 w-9/12"></div>
          <div className="bg-yellow-600 w-1/24"></div>
          <div className="bg-red-600 w-1/24"></div>
        </div>
      </div>
      {showDetails && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">Week 1: Present, Week 2: Present, Week 3: Late, Week 4: Present</p>
        </div>
      )}
    </div>
  );
};

export default AttendanceChart;

