
// AttendanceChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { week: "Week 1", Present: 80, Late: 10, Absent: 10 },
  { week: "Week 2", Present: 85, Late: 5, Absent: 10 },
  { week: "Week 3", Present: 90, Late: 5, Absent: 5 },
  { week: "Week 4", Present: 75, Late: 15, Absent: 10 },
  { week: "Week 5", Present: 88, Late: 7, Absent: 5 },
  { week: "Week 6", Present: 82, Late: 10, Absent: 8 },
  { week: "Week 7", Present: 91, Late: 4, Absent: 5 },  
];

const AttendanceChart = () => {
  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow-md">
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Present" stackId="a" fill="#3b82f6" />
          <Bar dataKey="Late" stackId="a" fill="#facc15" />
          <Bar dataKey="Absent" stackId="a" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;