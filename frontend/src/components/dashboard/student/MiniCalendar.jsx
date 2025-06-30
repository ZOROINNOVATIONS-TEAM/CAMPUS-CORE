import React from "react";
import { motion } from "framer-motion";

export function MiniCalendar({ isDark }) {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = today.getDay();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/20 dark:border-gray-700/20`}
    >
      <h2 className="text-xl font-semibold mb-4">Mini Calendar</h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {days.map((day, i) => (
          <div
            key={day}
            className={`py-2 rounded-full ${
              i === currentDay
                ? "bg-blue-600 text-white"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-gray-600 dark:text-gray-400">
        {today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </div>
    </motion.div>
  );
}
