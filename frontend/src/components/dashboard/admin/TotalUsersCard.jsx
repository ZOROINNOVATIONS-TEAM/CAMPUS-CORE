import { Card, CardHeader, CardContent } from "../../ui/card";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, ReferenceLine,
} from "recharts";

const chartData = [
  { month: "Jan", students: 2200, faculty: 120 },
  { month: "Feb", students: 2300, faculty: 122 },
  { month: "Mar", students: 2400, faculty: 126 },
  { month: "Apr", students: 2600, faculty: 142 },
  { month: "May", students: 2700, faculty: 155 },
  { month: "Jun", students: 2847, faculty: 164 },
];

export function TotalUsersCard({
  students = 2847,
  faculty = 164,
  studentChange = "+12.5%",
  facultyChange = "+5.2%",
}) {
  return (
    <Card className="w-full h-full min-w-[220px] max-w-full flex flex-col justify-between">
      <CardHeader className="pb-3 pt-5 px-4 sm:px-6">
        <span className="text-base font-semibold text-gray-900">Total Users</span>
      </CardHeader>
      <CardContent className="pt-0 pb-5 px-3 sm:px-6 flex flex-col h-full">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-3 w-full">
          <div className="flex-1 bg-blue-50 rounded-lg px-4 py-3 flex flex-col items-start justify-center min-w-[130px]">
            <div className="text-xs sm:text-sm font-medium text-gray-700">Students</div>
            <div className="text-xl sm:text-3xl font-bold text-gray-900">{students.toLocaleString()}</div>
            <div className="text-xs font-medium text-green-600">{studentChange} <span className="text-gray-500">from last month</span></div>
          </div>
          <div className="flex-1 bg-purple-50 rounded-lg px-4 py-3 flex flex-col items-start justify-center min-w-[130px]">
            <div className="text-xs sm:text-sm font-medium text-gray-700">Faculty</div>
            <div className="text-xl sm:text-3xl font-bold text-gray-900">{faculty}</div>
            <div className="text-xs font-medium text-green-600">{facultyChange} <span className="text-gray-500">from last month</span></div>
          </div>
        </div>
        <div className="h-[110px] sm:h-[140px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9ca3af" }} />
              <YAxis hide domain={["auto", "auto"]} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              <Area
                type="monotone"
                dataKey="students"
                stroke="none"
                fill="rgba(59, 130, 246, 0.12)"
                activeDot={false}
              />
              <Area
                type="monotone"
                dataKey="faculty"
                stroke="none"
                fill="rgba(168, 139, 250, 0.08)"
                activeDot={false}
              />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#2563eb"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#fff", stroke: "#2563eb", strokeWidth: 2 }}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="faculty"
                stroke="#a78bfa"
                strokeWidth={2.2}
                dot={{ r: 2.5, fill: "#fff", stroke: "#a78bfa", strokeWidth: 2 }}
                activeDot={{ r: 3 }}
              />
              <ReferenceLine x="May" stroke="#a3a3a3" strokeDasharray="2 4" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
