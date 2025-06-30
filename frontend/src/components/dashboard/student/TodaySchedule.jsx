import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export function TodaySchedule({ isDark }) {
  const schedule = [
    { status: "Upcoming", time: "04:30 PM - 06:00 PM", room: "Room 305", subject: "English Literature" },
    { status: "Upcoming", time: "02:00 PM - 04:00 PM", room: "Lab Building B", subject: "Physics Laboratory" },
    { status: "Upcoming", time: "11:00 AM - 12:30 PM", room: "Room 203", subject: "Advanced Mathematics" },
    { status: "Completed", time: "09:00 AM - 10:30 AM", room: "Room 101", subject: "Introduction to Computer Science" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/20 dark:border-gray-700/20`}
    >
      <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
      <div className="space-y-4">
        {schedule.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.status === "Upcoming"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              }`}
            >
              {item.status}
            </span>
            <div className="flex-1">
              <span className="font-bold">{item.subject}</span>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <span>
                  {item.time} • {item.room}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
