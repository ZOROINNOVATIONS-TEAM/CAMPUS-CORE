import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Correct", value: 60, color: "#22c55e" },
  { name: "Wrong", value: 15, color: "#f43f5e" },
  { name: "Copy", value: 10, color: "#a3e635" },
  { name: "Fail", value: 10, color: "#f59e42" },
  { name: "Miss", value: 5, color: "#cbd5e1" },
];

export default function AssignmentResults() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center">
      <h4 className="text-md font-semibold mb-2 text-blue-600 dark:text-blue-400">Assignment Results</h4>
      
      {/* Pie Chart */}
      <div className="w-full h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={70}
              innerRadius={40}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ fontSize: "0.75rem", marginTop: "1rem" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
        View your performance in the assignment.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition">
          Print Results
        </button>
        <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-xs transition dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-200">
          Internal Assessment
        </button>
        <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-xs transition dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-200">
          External Assessment
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition">
          Download Results
        </button>
      </div>
    </div>
  );
}
