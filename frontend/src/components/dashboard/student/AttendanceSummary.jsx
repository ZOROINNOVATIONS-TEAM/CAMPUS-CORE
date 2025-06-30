import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function AttendanceSummary({ isDark }) {
  const attendance = [
    { status: "Present", percent: 85, color: "rgb(16, 185, 129)" },
    { status: "Late", percent: 10, color: "rgb(234, 179, 8)" },
    { status: "Absent", percent: 5, color: "rgb(239, 68, 68)" },
  ];

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"];
  const weekData = [1, 1, 1, 0, 1, 1, 1, 1]; // 0 = absent, 1 = present

  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Attendance",
        data: weekData,
        backgroundColor: isDark ? "rgba(99, 102, 241, 0.7)" : "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/20 dark:border-gray-700/20`}
    >
      <h2 className="text-xl font-semibold mb-4">Attendance Summary</h2>
      <div className="flex justify-between mb-6">
        {attendance.map(({ status, percent }) => (
          <div key={status} className="text-center">
            <p className="text-2xl font-bold">{percent}%</p>
            <p className="text-gray-600 dark:text-gray-300">{status}</p>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden flex">
        {attendance.map(({ percent, color }) => (
          <motion.div
            key={color}
            className="h-6"
            style={{ width: `${percent}%`, backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>
      <div className="mt-6">
        <Bar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: {
                ticks: { display: false },
                grid: { display: false },
                border: { display: false },
              },
            },
          }}
        />
      </div>
    </motion.div>
  );
}
