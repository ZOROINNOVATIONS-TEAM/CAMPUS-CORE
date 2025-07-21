// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const pieData = [
//   { name: "Passed Subjects", value: 6 },
//   { name: "Failed Subjects", value: 2 },
// ];

// const COLORS = ["#00C49F", "#FF8042"];

// const lineData = [
//   { name: "Sem 1", sgpa: 7.8 },
//   { name: "Sem 2", sgpa: 8.1 },
//   { name: "Sem 3", sgpa: 7.6 },
//   { name: "Sem 4", sgpa: 8.4 },
// ];

// const Results = () => {
//   return (
//     <section className="p-6 md:p-10 bg-gray-100 min-h-screen">
//       <h2 className="text-xl font-bold mb-4 text-gray-800">Overall Performance</h2>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//         {/* Score Box */}
//         <div className="bg-white p-6 rounded-xl shadow col-span-2">
//           <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md">Analyze Performance</button>

//           <div className="grid grid-cols-3 text-center mb-6">
//             <div>
//               <p className="text-sm text-gray-500">Average Score</p>
//               <p className="text-xl font-semibold text-blue-600">80.25%</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Passed Subjects</p>
//               <p className="text-xl font-semibold text-green-600">6</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Failed Subjects</p>
//               <p className="text-xl font-semibold text-red-500">2</p>
//             </div>
//           </div>

//           {/* Internal Assessment */}
//           <div>
//             <h3 className="font-semibold text-md mb-3">Internal Summative Assessment (ISA)</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               {["Mathematics", "Physics", "Chemistry", "Biology"].map((subject, i) => (
//                 <div key={i} className="flex items-center justify-between bg-gray-50 border rounded p-4">
//                   <div>
//                     <p className="font-medium">{subject}</p>
//                     <p className="text-xs text-gray-500">Term 1</p>
//                   </div>
//                   <button className="bg-blue-600 text-white px-3 py-1 text-xs rounded">Reevaluate</button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* External Assessment */}
//           <div>
//             <h3 className="font-semibold text-md mb-3">External Summative Assessment (ESA)</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {["Mathematics", "Physics", "Chemistry", "Biology"].map((subject, i) => (
//                 <div key={i} className="flex items-center justify-between bg-gray-50 border rounded p-4">
//                   <div>
//                     <p className="font-medium">{subject}</p>
//                     <p className="text-xs text-gray-500">Final Exam</p>
//                   </div>
//                   <button className="bg-purple-600 text-white px-3 py-1 text-xs rounded">View Detail</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h4 className="font-semibold text-md mb-4">Assignment Results</h4>

//           {/* Pie Chart */}
//           <div className="mb-6">
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={70}
//                   label
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                   ))}
//                 </Pie>
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>

//             <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
//               <button className="bg-blue-600 text-white py-1 rounded">Print Assignment Result</button>
//               <button className="bg-gray-100 text-gray-700 border py-1 rounded">View All</button>
//               <button className="bg-purple-600 text-white py-1 rounded">Download Assignment</button>
//               <button className="bg-gray-100 text-gray-700 border py-1 rounded">Download All</button>
//             </div>
//           </div>

//           {/* Line Chart */}
//           <h4 className="font-semibold text-md mb-2">View SGPA/CGPA</h4>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={lineData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis domain={[0, 10]} />
//               <Tooltip />
//               <Line type="monotone" dataKey="sgpa" stroke="#8884d8" activeDot={{ r: 8 }} />
//             </LineChart>
//           </ResponsiveContainer>

//           <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
//             <button className="bg-green-600 text-white py-1 rounded">Print SGPA/CGPA</button>
//             <button className="bg-blue-600 text-white py-1 rounded">Download SGPA/CGPA</button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="text-center text-sm text-gray-500 mt-10">
//         Designed and developed by <span className="font-semibold">ZoroTeam</span> &copy; 2025 Zoro Innovations
//       </footer>
//     </section>
//   );
// };

// export default Results;
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const pieData = [
  { name: "Passed Subjects", value: 6 },
  { name: "Failed Subjects", value: 2 },
];

const COLORS = ["#00C49F", "#FF8042"];

const lineData = [
  { name: "Sem 1", sgpa: 7.8 },
  { name: "Sem 2", sgpa: 8.1 },
  { name: "Sem 3", sgpa: 7.6 },
  { name: "Sem 4", sgpa: 8.4 },
];

const Results = () => {
  return (
    <section className="p-4 sm:p-6 md:p-10 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Overall Performance</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Score Box */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow col-span-2 transition-colors duration-200">
          <button className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
            Analyze Performance
          </button>
          <div className="grid grid-cols-3 text-center mb-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Average Score</p>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">80.25%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Passed Subjects</p>
              <p className="text-xl font-semibold text-green-600 dark:text-green-400">6</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Failed Subjects</p>
              <p className="text-xl font-semibold text-red-500 dark:text-red-400">2</p>
            </div>
          </div>

          {/* Internal Assessment */}
          <div>
            <h3 className="font-semibold text-md mb-3 dark:text-gray-100">
              Internal Summative Assessment (ISA)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {["Mathematics", "Physics", "Chemistry", "Biology"].map((subject, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded p-4"
                >
                  <div>
                    <p className="font-medium dark:text-gray-100">{subject}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Term 1</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs rounded transition">
                    Reevaluate
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* External Assessment */}
          <div>
            <h3 className="font-semibold text-md mb-3 dark:text-gray-100">
              External Summative Assessment (ESA)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Mathematics", "Physics", "Chemistry", "Biology"].map((subject, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded p-4"
                >
                  <div>
                    <p className="font-medium dark:text-gray-100">{subject}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Final Exam</p>
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-xs rounded transition">
                    View Detail
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow transition-colors duration-200">
          <h4 className="font-semibold text-md mb-4 dark:text-gray-100">
            Assignment Results
          </h4>

          {/* Pie Chart */}
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 rounded transition">Print Assignment Result</button>
              <button className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-100 border dark:border-gray-700 py-1 rounded transition">View All</button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-1 rounded transition">Download Assignment</button>
              <button className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-100 border dark:border-gray-700 py-1 rounded transition">Download All</button>
            </div>
          </div>

          {/* Line Chart */}
          <h4 className="font-semibold text-md mb-2 dark:text-gray-100">View SGPA/CGPA</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#aaa" />
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis domain={[0, 10]} stroke="#8884d8" />
              <Tooltip />
              <Line type="monotone" dataKey="sgpa" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
            <button className="bg-green-600 hover:bg-green-700 text-white py-1 rounded transition">Print SGPA/CGPA</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 rounded transition">Download SGPA/CGPA</button>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
        Designed and developed by <span className="font-semibold">ZoroTeam</span> &copy; 2025 Zoro Innovations
      </footer> */}
    </section>
  );
};

export default Results;
