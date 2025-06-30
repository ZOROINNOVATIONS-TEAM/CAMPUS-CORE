import React from "react";
import { motion } from "framer-motion";

export function RecentResults({ isDark }) {
  const results = [
    { subject: "Physics", type: "Quiz", score: 88, date: "June 5, 2025", grade: "A-" },
    { subject: "Physics", type: "Assignment", score: 85, date: "June 2, 2025", grade: "B+" },
    { subject: "Advanced Mathematics", type: "Mid-term Exam", score: 92, date: "May 28, 2025", grade: "A" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/20 dark:border-gray-700/20`}
    >
      <h2 className="text-xl font-semibold mb-4">Recent Results</h2>
      <div className="space-y-4">
        {results.map((result, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-gray-100/70 dark:bg-gray-700/70 rounded-lg transition"
          >
            <h3 className="font-bold">{result.subject}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600 dark:text-gray-400">
                {result.type} - {result.date}
              </span>
              <span className="font-bold">{result.score}/100</span>
              <span className="text-gray-600 dark:text-gray-400">{result.grade}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <motion.div
                className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
