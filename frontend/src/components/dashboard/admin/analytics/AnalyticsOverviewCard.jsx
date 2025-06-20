// src/components/dashboard/admin/analytics/AnalyticsOverviewCard.jsx
import { BarChart2, TrendingUp, User, Layers } from "lucide-react";

export default function AnalyticsOverviewCard({ data }) {
  // Mock data fallback if none passed
  const stats = data || [
    {
      icon: <User className="w-6 h-6 text-blue-600" />,
      label: "Total Students",
      value: "2,847",
      color: "bg-blue-100",
    },
    {
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      label: "Courses Offered",
      value: "32",
      color: "bg-purple-100",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      label: "Avg. Attendance",
      value: "92%",
      color: "bg-green-100",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
      label: "Pass Rate",
      value: "97%",
      color: "bg-orange-100",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col gap-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics Overview</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg ${item.color}`}
          >
            {item.icon}
            <span className="text-2xl font-bold text-gray-900">{item.value}</span>
            <span className="text-xs font-medium text-gray-500 text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
