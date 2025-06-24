import { Card, CardHeader, CardContent } from "../../../ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from "recharts";

const mockData = [
  { month: "Jan", GPA: 3.2 },
  { month: "Feb", GPA: 3.4 },
  { month: "Mar", GPA: 3.6 },
  { month: "Apr", GPA: 3.5 },
  { month: "May", GPA: 3.7 },
  { month: "Jun", GPA: 3.8 },
];

export default function PerformanceTrendsCard({ data = mockData }) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <span className="text-base font-semibold text-gray-900">Performance Trends</span>
      </CardHeader>
      <CardContent className="h-[210px] sm:h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
            <YAxis hide domain={[3, 4]} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
            <Area
              type="monotone"
              dataKey="GPA"
              stroke="none"
              fill="rgba(168, 85, 247, 0.10)" 
              activeDot={false}
            />
            <Line
              type="monotone"
              dataKey="GPA"
              stroke="#a855f7"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#fff", stroke: "#a855f7", strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
