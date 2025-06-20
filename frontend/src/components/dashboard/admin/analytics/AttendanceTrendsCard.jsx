// src/components/dashboard/admin/analytics/AttendanceTrendsCard.jsx
import { Card, CardHeader, CardContent } from "../../../ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from "recharts";

const mockData = [
  { month: "Jan", Attendance: 92 },
  { month: "Feb", Attendance: 88 },
  { month: "Mar", Attendance: 94 },
  { month: "Apr", Attendance: 96 },
  { month: "May", Attendance: 91 },
  { month: "Jun", Attendance: 95 },
];

export default function AttendanceTrendsCard({ data = mockData }) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <span className="text-base font-semibold text-gray-900">Attendance Trends</span>
      </CardHeader>
      <CardContent className="h-[210px] sm:h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
            <YAxis hide domain={[80, 100]} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
            <Area
              type="monotone"
              dataKey="Attendance"
              stroke="none"
              fill="rgba(59, 130, 246, 0.15)" // blue-500/15
              activeDot={false}
            />
            <Line
              type="monotone"
              dataKey="Attendance"
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#fff", stroke: "#2563eb", strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
