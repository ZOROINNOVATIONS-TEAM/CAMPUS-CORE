import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const cgpaData = [
  { sem: "Sem1", value: 7 },
  { sem: "Sem2", value: 8 },
  { sem: "Sem3", value: 6.5 },
  { sem: "Sem4", value: 7.5 },
];

export default function CgpaChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
      <h4 className="text-md font-semibold mb-2 text-blue-500">View SGPA/CGPA</h4>
      <div className="w-full h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cgpaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sem" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} dot={{ r: 5, fill: "#6366f1" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Print SGPA/CGPA</button>
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs">Download SGPA/CGPA</button>
      </div>
    </div>
  );
}
