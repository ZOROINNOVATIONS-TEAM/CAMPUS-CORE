import React from "react";
import {
  PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

const pieData = [
  { name: "Correct", value: 60, color: "#22c55e" },
  { name: "Wrong", value: 10, color: "#ef4444" },
  { name: "Copy", value: 15, color: "#f97316" },
  { name: "Fail", value: 5, color: "#f43f5e" },
  { name: "Miss", value: 10, color: "#3b82f6" },
];

const lineData = [
  { sem: "Sem1", cgpa: 7 },
  { sem: "Sem2", cgpa: 5.5 },
  { sem: "Sem3", cgpa: 6.8 },
  { sem: "Sem4", cgpa: 8 },
];

const subjects = [
  { name: "Mathematics", score: 85, status: "Passed" },
  { name: "Physics", score: 78, status: "Passed" },
  { name: "Chemistry", score: 90, status: "Excellent" },
  { name: "Biology", score: 82, status: "Passed" },
];

const Result= () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gray-100 text-gray-800">
      {/* Performance Overview */}
      <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-xl shadow space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Overall Performance</h2>
          <p className="text-gray-500">Summary of your performance across assessments.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow">Analyze Performance</button>
        </div>

        <div className="flex gap-6 mt-4">
          <div className="bg-blue-100 text-blue-800 px-6 py-4 rounded-xl w-full">
            <p className="text-sm">Average Score</p>
            <p className="text-2xl font-bold">80.25%</p>
          </div>
          <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl w-full">
            <p className="text-sm">Passed Subjects</p>
            <p className="text-2xl font-bold">6</p>
          </div>
          <div className="bg-red-100 text-red-800 px-6 py-4 rounded-xl w-full">
            <p className="text-sm">Failed Subjects</p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>

        {/* Subject Scores */}
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2">Internal Assessment</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {subjects.map((subj, i) => (
              <div key={i} className="border p-4 rounded-xl shadow bg-gray-50">
                <p className="font-bold">{subj.name}</p>
                <p className="text-sm">Final Score: {subj.score}%</p>
                <span className={`inline-block mt-1 px-3 py-1 text-xs rounded-full ${
                  subj.status === "Excellent"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {subj.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Charts */}
      <div className="space-y-6">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Assignment Results</h3>
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              cx={150}
              cy={120}
              innerRadius={50}
              outerRadius={90}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <button className="mt-2 w-full py-2 bg-blue-600 text-white text-sm rounded shadow">
            Download Assignment Results
          </button>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">SGPA/CGPA</h3>
          <LineChart width={300} height={200} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sem" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line type="monotone" dataKey="cgpa" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
          <button className="mt-2 w-full py-2 bg-blue-600 text-white text-sm rounded shadow">
            Download SGPA/CGPA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;