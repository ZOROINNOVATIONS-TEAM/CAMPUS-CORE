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

// Dummy chart data
const chartData = [
  { subject: "CS", current: 92, previous: 85 },
  { subject: "Math", current: 85, previous: 80 },
  { subject: "Physics", current: 88, previous: 86 },
  { subject: "English", current: 90, previous: 88 },
  { subject: "History", current: 84, previous: 82 },
];

// Recent results
const results = [
  {
    subject: "Computer Science",
    date: "Mid-term Exam – May 28, 2025",
    grade: "A",
    score: "92/100",
    color: "text-green-600",
  },
  {
    subject: "Advanced Mathematics",
    date: "Assignment – June 2, 2025",
    grade: "B+",
    score: "85/100",
    color: "text-blue-600",
  },
  {
    subject: "Physics",
    date: "Quiz – June 5, 2025",
    grade: "A-",
    score: "88/100",
    color: "text-emerald-600",
  },
];

export function RecentResults() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-white">Recent Results</h2>
        <button className="text-xs text-blue-600 hover:underline flex items-center gap-1">
          All Results
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Result Cards */}
      <div className="space-y-3 mb-6">
        {results.map((res, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
          >
            <div>
              <p className="font-medium text-sm text-gray-700 dark:text-white">{res.subject}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{res.date}</p>
            </div>
            <div className="text-right">
              <p className={`font-semibold text-sm ${res.color}`}>{res.grade}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{res.score}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={chartData}
          margin={{ top: 0, right: 16, left: 4, bottom: 8 }}
        >
          <XAxis
            dataKey="subject"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            stroke="#9ca3af"
          />
          <YAxis
            fontSize={12}
            tickLine={false}
            axisLine={false}
            stroke="#9ca3af"
          />
          <Tooltip
            contentStyle={{
              fontSize: "12px",
              borderRadius: "8px",
            }}
          />
          <Legend verticalAlign="bottom" height={36} />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#a1a1aa"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Caption */}
      <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
        <span className="text-indigo-600 font-medium dark:text-indigo-400">
          Current Semester
        </span>{" "}
        vs{" "}
        <span className="text-gray-400 dark:text-gray-500">Previous Semester</span>
      </div>
    </section>
  );
}
