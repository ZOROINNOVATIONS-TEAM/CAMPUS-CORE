import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const assignmentData = [
  { name: "Excellent", value: 45 },
  { name: "Good", value: 25 },
  { name: "Average", value: 15 },
  { name: "Below Average", value: 10 },
  { name: "Missed", value: 5 },
];

const COLORS = ["#22c55e", "#3b82f6", "#facc15", "#fb923c", "#ef4444"];

const sgpaData = [
  { name: "Sem1", value: 7.5 },
  { name: "Sem2", value: 6.8 },
  { name: "Sem3", value: 8.2 },
  { name: "Sem4", value: 8.6 },
  { name: "Sem5", value: 9.0 },
];

const subjects = [
  { name: "Mathematics", score: "85%", status: "Passed", image: "https://www.shutterstock.com/shutterstock/photos/1426615145/display_1500/stock-vector-mathematics-word-concepts-banner-presentation-website-isolated-lettering-typography-idea-with-1426615145.jpg" },

  { name: "Physics", score: "72%", status: "Failed", image: "https://img.freepik.com/premium-photo/physics-blue-word-concept-school-subject-natural-science-stem-education-lab-equipment-horizontal-vector-image-headline-text-surrounded-by-editable-outline-icons_1036687-64465.jpg" },

  { name: "Chemistry", score: "80%", status: "Passed", image: "https://assets.gogetfunding.com/wp-content/uploads/2019/01/5931604/img/ChemProj.jpg" },

  { name: "Biology", score: "88%", status: "Passed", image: "https://i.ytimg.com/vi/XBH7EJiQqmo/hqdefault.jpg" },
];

const ResultTab = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overall Performance */}
          <div className="text-center bg-white rounded-xl shadow p-6">
            <h1 className="text-2xl font-bold mb-1">Overall Performance</h1>
            <p className="text-sm text-gray-600">Summary of your performance across assessments.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Analyze Performance
            </button>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white shadow rounded-lg p-4 text-center">
                <p className="text-sm">Average Score</p>
                <h2 className="text-2xl font-bold text-blue-600">80.25%</h2>
              </div>
              <div className="bg-white shadow rounded-lg p-4 text-center">
                <p className="text-sm">Passed Subjects</p>
                <h2 className="text-2xl font-bold text-green-600">6</h2>
              </div>
              <div className="bg-white shadow rounded-lg p-4 text-center">
                <p className="text-sm">Failed Subjects</p>
                <h2 className="text-2xl font-bold text-red-600">2</h2>
              </div>
            </div>
          </div>

          {/* ISA & ESA */}
          {["Internal Summative Assessment (ISA)", "External Summative Assessment (ESA)"].map((title, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <div className="space-x-2">
                  <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded text-sm shadow">
                    {i === 0 ? "Re-evaluate" : "Request Review"}
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm shadow hover:bg-blue-700">
                    View Detail
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {subjects.map((sub, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between border rounded-lg p-4 shadow-sm bg-gray-50"
                  >
                    <div className="flex gap-4 items-center">
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="h-20 w-20 object-contain rounded"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{sub.name}</h3>
                        <p className="text-sm">Print Score: {sub.score}</p>
                        <p
                          className={`text-xs mt-1 font-medium ${
                            sub.status === "Passed" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {sub.status}
                        </p>
                      </div>
                    </div>
                    {/* <img src={`/chart${j % 2 + 1}.png`} alt="chart" className="h-10" /> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Assignment Results */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Assignment Results</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={assignmentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {assignmentData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-sm text-center mt-4">View your performance in the assignment.</p>
            <div className="flex flex-wrap justify-center mt-4 gap-2">
              <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded shadow">
                Print Assignment Results
              </button>
              <button className="bg-indigo-100 text-indigo-700 px-3 py-1 text-sm rounded shadow">
                Internal Assess.
              </button>
              <button className="bg-indigo-100 text-indigo-700 px-3 py-1 text-sm rounded shadow">
                Download Assignment Results
              </button>
              <button className="bg-indigo-100 text-indigo-700 px-3 py-1 text-sm rounded shadow">
                External Assess.
              </button>
            </div>
          </div>

          {/* SGPA/CGPA */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">View SGPA/CGPA</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={sgpaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[5, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#6366f1" />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center mt-4 gap-2">
              <button className="bg-blue-600 text-white px-4 py-1 text-sm rounded shadow">
                Print SGPA/CGPA
              </button>
              <button className="bg-indigo-100 text-indigo-700 px-4 py-1 text-sm rounded shadow">
                Download SGPA/CGPA
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-10">
        <p className="flex items-center justify-center gap-2">
          <span>⚙</span> Designed and developed by ZoroTeam © 2025 Zoro innovations
        </p>
      </footer>
    </div>
  );
};

export default ResultTab;
