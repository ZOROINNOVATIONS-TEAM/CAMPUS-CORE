import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import ErrorBoundary from "../../ErrorBoundary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faChalkboardTeacher, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(...registerables);

const studentCount = 2847;
const facultyCount = 164;
const studentChange = +12.5;   // in percent
const facultyChange = +5.2;

const usersData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Students",
      data: [2350, 2450, 2600, 2700, 2780, studentCount],
      borderColor: "#4f8bf4",
      backgroundColor: "rgba(79,139,244,0.08)",
      tension: 0.4,
      pointBackgroundColor: "#4f8bf4",
      fill: true,
    },
    {
      label: "Faculty",
      data: [148, 150, 152, 155, 160, facultyCount],
      borderColor: "#a78bfa",
      backgroundColor: "rgba(167,139,250,0.07)",
      tension: 0.4,
      pointBackgroundColor: "#a78bfa",
      fill: true,
    },
  ],
};

const TotalUsersCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-0 sm:p-0 transition-colors flex flex-col h-full">
    {/* Stats & trend row */}
    <div className="flex flex-row justify-between gap-4 px-6 pt-6 pb-2">
      {/* Students Block */}
      <div className="flex-1 bg-blue-50 dark:bg-blue-900 rounded-xl p-4 flex flex-col items-start mb-2 mr-2">
        <div className="flex items-center gap-3 mb-1">
          <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 rounded-full p-2">
            <FontAwesomeIcon icon={faUserGraduate} />
          </span>
          <span className="font-extrabold text-2xl text-gray-900 dark:text-white">{studentCount.toLocaleString()}</span>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-300 mb-1">Students</div>
        <div className="text-xs font-medium flex items-center">
          <span className={`mr-1 ${studentChange > 0 ? "text-green-500" : "text-red-500"}`}>
            {studentChange > 0 ? `+${studentChange}%` : `${studentChange}%`}
          </span>
          <span className="text-gray-400 dark:text-gray-300">from last month</span>
        </div>
      </div>
      {/* Faculty Block */}
      <div className="flex-1 bg-purple-50 dark:bg-purple-900 rounded-xl p-4 flex flex-col items-start mb-2">
        <div className="flex items-center gap-3 mb-1">
          <span className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-200 rounded-full p-2">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </span>
          <span className="font-extrabold text-2xl text-gray-900 dark:text-white">{facultyCount}</span>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-300 mb-1">Faculty</div>
        <div className="text-xs font-medium flex items-center">
          <span className={`mr-1 ${facultyChange > 0 ? "text-green-500" : "text-red-500"}`}>
            {facultyChange > 0 ? `+${facultyChange}%` : `${facultyChange}%`}
          </span>
          <span className="text-gray-400 dark:text-gray-300">from last month</span>
        </div>
      </div>
      {/* Options Button */}
      <button className="self-start p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 ml-2">
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
    </div>
    {/* Area Chart */}
    <div className="px-2 sm:px-6 pb-4 h-32">
      <ErrorBoundary>
        <Line
          data={usersData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: true,
                grid: { display: false },
                ticks: {
                  color: "#aaa",
                  font: { size: 11, family: "inherit" },
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  color: "#ececec",
                  borderDash: [3, 3],
                },
                ticks: {
                  color: "#bbb",
                  font: { size: 11, family: "inherit" },
                  precision:0,
                },
              },
            },
            elements: {
              line: { borderWidth: 3 },
              point: { radius: 2, hoverRadius: 5 },
            },
          }}
          height={90}
        />
      </ErrorBoundary>
    </div>
  </div>
);

export default TotalUsersCard;
