import { Users, TrendingUp, Activity, Clock } from "lucide-react";

export default function KeyMetrics() {
  const metrics = [
    {
      label: "Total Users",
      value: "3,482",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50 dark:bg-blue-950",
    },
    {
      label: "Active Today",
      value: "1,102",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50 dark:bg-green-950",
    },
    {
      label: "Active Sessions",
      value: "231",
      icon: <Activity className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-50 dark:bg-yellow-950",
    },
    {
      label: "Avg. Session Time",
      value: "18m 24s",
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50 dark:bg-purple-950",
    },
  ];

  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center rounded-xl p-5 ${m.bg} border border-gray-200 dark:border-gray-700 shadow-sm transition duration-300 hover:scale-[1.02]`}
        >
          <div className="mb-1">{m.icon}</div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">{m.value}</span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{m.label}</span>
        </div>
      ))}
    </section>
  );
}
