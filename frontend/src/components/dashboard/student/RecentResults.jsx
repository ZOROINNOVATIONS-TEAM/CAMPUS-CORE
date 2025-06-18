import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ArrowRight } from "lucide-react";

// Dummy data for the chart
const chartData = [
  { subject: "CS", current: 92, previous: 85 },
  { subject: "Math", current: 85, previous: 80 },
  { subject: "Physics", current: 88, previous: 86 },
  { subject: "English", current: 90, previous: 88 },
  { subject: "History", current: 84, previous: 82 },
];

const results = [
  {
    subject: "Computer Science",
    date: "Mid-term Exam - May 28, 2025",
    grade: "A",
    score: "92/100",
    color: "text-green-500",
  },
  {
    subject: "Advanced Mathematics",
    date: "Assignment - June 2, 2025",
    grade: "B+",
    score: "85/100",
    color: "text-blue-500",
  },
  {
    subject: "Physics",
    date: "Quiz - June 5, 2025",
    grade: "A-",
    score: "88/100",
    color: "text-emerald-500",
  },
];

export function RecentResults() {
  return (
    <section className="bg-white rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-800">Recent Results</h2>
        <button className="text-xs text-blue-600 hover:underline flex items-center gap-1">
          All Results <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-3 mb-4">
        {results.map((res, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md"
          >
            <div>
              <p className="font-medium text-sm text-gray-700">{res.subject}</p>
              <p className="text-xs text-gray-500">{res.date}</p>
            </div>
            <div className="text-right">
              <p className={`font-semibold text-sm ${res.color}`}>{res.grade}</p>
              <p className="text-xs text-gray-400">{res.score}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="subject" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
          <Line type="monotone" dataKey="current" stroke="#6366f1" strokeWidth={2} dot />
          <Line type="monotone" dataKey="previous" stroke="#a1a1aa" strokeWidth={2} strokeDasharray="4 4" dot />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-2 text-center text-xs text-gray-400">
        <span className="text-indigo-500 font-medium">Current Semester</span> vs{" "}
        <span className="text-gray-400">Previous Semester</span>
      </div>
    </section>
  );
}
