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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
      <h4 className="text-md font-semibold mb-2 text-blue-500">Assignment Results</h4>
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={70} innerRadius={40}>
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-gray-500 text-center my-2">View your performance in the assignment.</div>
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Print Assignment Results</button>
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs">Internal Asses...</button>
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs">External Asses...</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Download Assignment Results</button>
      </div>
    </div>
  );
}
