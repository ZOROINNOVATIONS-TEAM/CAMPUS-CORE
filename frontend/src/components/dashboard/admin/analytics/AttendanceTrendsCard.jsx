import { Card, CardHeader, CardContent } from "../../../ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

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
    <Card className="w-full h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
      <CardHeader>
        <span className="text-base font-semibold text-gray-900 dark:text-white">
          Attendance Trends
        </span>
      </CardHeader>
      <CardContent className="h-[210px] sm:h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 12, right: 0, bottom: 0, left: 0 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#9ca3af", // light mode
              }}
              tickFormatter={(value) => value}
            />
            <YAxis hide domain={[80, 100]} />
            <Tooltip
              contentStyle={{
                fontSize: 12,
                borderRadius: 8,
                backgroundColor: "#1f2937", // dark gray
                color: "#fff",
              }}
              wrapperStyle={{
                outline: "none",
              }}
              labelStyle={{ color: "#d1d5db" }}
            />
            <Area
              type="monotone"
              dataKey="Attendance"
              stroke="none"
              fill="rgba(59, 130, 246, 0.12)" // blue-500/12
              activeDot={false}
            />
            <Line
              type="monotone"
              dataKey="Attendance"
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#2563eb",
                strokeWidth: 2,
              }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
