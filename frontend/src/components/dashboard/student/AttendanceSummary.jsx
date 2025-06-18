import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Check, AlertTriangle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function AttendanceSummary() {
  const summary = [
    {
      label: "Present",
      value: "85%",
      icon: <Check className="w-4 h-4 text-white" aria-hidden="true" />,
      bg: "bg-blue-100",
      text: "text-blue-700",
      circle: "bg-blue-500",
    },
    {
      label: "Late",
      value: "10%",
      icon: <AlertTriangle className="w-4 h-4 text-white" aria-hidden="true" />,
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      circle: "bg-yellow-500",
    },
    {
      label: "Absent",
      value: "5%",
      icon: <XCircle className="w-4 h-4 text-white" aria-hidden="true" />,
      bg: "bg-red-100",
      text: "text-red-700",
      circle: "bg-red-500",
    },
  ];

  const data = [
    { week: "Week 1", Present: 90, Late: 5, Absent: 5 },
    { week: "Week 2", Present: 85, Late: 10, Absent: 5 },
    { week: "Week 3", Present: 80, Late: 15, Absent: 5 },
    { week: "Week 4", Present: 88, Late: 7, Absent: 5 },
    { week: "Week 5", Present: 86, Late: 10, Absent: 4 },
    { week: "Week 6", Present: 87, Late: 8, Absent: 5 },
    { week: "Week 7", Present: 89, Late: 6, Absent: 5 },
    { week: "Week 8", Present: 90, Late: 5, Absent: 5 },
  ];


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-white shadow-md rounded-md p-2 text-xs border border-gray-200"
          role="tooltip"
          aria-live="polite"
        >
          <p className="font-semibold">{label}</p>
          {payload.map((entry) => (
            <p
              key={entry.dataKey}
              className={`text-sm ${
                entry.dataKey === "Present"
                  ? "text-blue-600"
                  : entry.dataKey === "Late"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {entry.dataKey}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
  
      <section
        id="attendance"
        aria-label="Attendance summary and weekly attendance chart"
        className="bg-white rounded-xl shadow-md p-6 md:p-8"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Attendance Summary
          </h2>
          <Link
            to="/attendance"
            className="text-sm md:text-base text-blue-600 hover:underline"
            aria-label="View detailed attendance report"
          >
            View Details
          </Link>
        </div>

        {/* Summary Cards */}
<div className="flex flex-nowrap gap-4 overflow-x-auto mb-6">
  {summary.map((item) => (
    <div
      key={item.label}
      className={`rounded-xl p-4 flex flex-col items-center text-center shadow-sm ${item.bg} ${item.text}`}
      style={{ flex: '0 0 30%', minWidth: '180px' }}
      aria-label={`${item.label} attendance percentage: ${item.value}`}
      role="region"
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${item.circle}`}
        aria-hidden="true"
      >
        {item.icon}
      </div>
      <p className="text-2xl font-semibold">{item.value}</p>
      <p className="text-sm font-medium">{item.label}</p>
    </div>
  ))}
</div>

        {/* Bar Chart */}
        <div className="h-56 md:h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 30, left: -10, bottom: 30 }}
              role="img"
              aria-label="Stacked bar chart showing weekly attendance status"
            >
              <XAxis
                dataKey="week"
                tick={{ fontSize: 12, fill: "#4B5563" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#4B5563" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="Present" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Late" stackId="a" fill="#facc15" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Absent" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend */}
        <div className="flex justify-center mt-4 gap-6 text-sm select-none">
          <div className="flex items-center gap-2 text-blue-600">
            <span
              className="w-4 h-4 rounded-full bg-blue-500 inline-block"
              aria-hidden="true"
            />
            Present
          </div>
          <div className="flex items-center gap-2 text-yellow-600">
            <span
              className="w-4 h-4 rounded-full bg-yellow-500 inline-block"
              aria-hidden="true"
            />
            Late
          </div>
          <div className="flex items-center gap-2 text-red-600">
            <span
              className="w-4 h-4 rounded-full bg-red-500 inline-block"
              aria-hidden="true"
            />
            Absent
          </div>
        </div>
      </section>
    </div>
  );
}
