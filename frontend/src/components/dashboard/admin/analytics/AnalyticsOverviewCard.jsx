import { BarChart2, TrendingUp, User, Layers } from "lucide-react";

export default function AnalyticsOverviewCard({ data, AnimatedNumber }) {
  const stats = data || [
    {
      icon: <User className="w-6 h-6 text-blue-600" />,
      label: "Total Students",
      value: "2,847",
      color: "bg-blue-100 dark:bg-blue-900/40",
    },
    {
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      label: "Courses Offered",
      value: "32",
      color: "bg-purple-100 dark:bg-purple-900/40",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      label: "Avg. Attendance",
      value: "92%",
      color: "bg-green-100 dark:bg-green-900/40",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
      label: "Pass Rate",
      value: "97%",
      color: "bg-orange-100 dark:bg-orange-900/40",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 md:p-6 flex flex-col gap-4">
      <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 md:mb-3">
        Analytics Overview
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg ${item.color}`}
          >
            {item.icon}
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {AnimatedNumber && /^\d+(,\d+)*$/.test(item.value)
                ? <AnimatedNumber value={item.value} />
                : item.value}
            </span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
