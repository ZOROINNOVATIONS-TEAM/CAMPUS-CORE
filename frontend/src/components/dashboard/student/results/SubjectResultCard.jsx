import { CheckCircle, Star, XCircle } from "lucide-react";

export default function SubjectResultCard({ subject, score, status }) {
  const statusStyles = {
    Passed: {
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-700 dark:text-green-300",
      icon: <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-300" />,
    },
    Excellent: {
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-700 dark:text-blue-300",
      icon: <Star className="w-4 h-4 text-blue-600 dark:text-blue-300" />,
    },
    Failed: {
      bg: "bg-red-100 dark:bg-red-900",
      text: "text-red-700 dark:text-red-300",
      icon: <XCircle className="w-4 h-4 text-red-600 dark:text-red-300" />,
    },
  };

  const style = statusStyles[status] || {
    bg: "bg-gray-100 dark:bg-gray-800",
    text: "text-gray-700 dark:text-gray-300",
    icon: null,
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center gap-4 shadow-sm">
      <div className="flex-1">
        <div className="font-semibold text-gray-900 dark:text-white">{subject}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Final Score</div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">{score}%</div>
        <div
          className={`inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}
        >
          {style.icon}
          {status}
        </div>
      </div>
    </div>
  );
}
