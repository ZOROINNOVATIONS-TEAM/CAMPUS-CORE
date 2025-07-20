// src/components/dashboard/student/Announcements.jsx (or wherever it's located)
import React from "react";
import { motion } from "framer-motion";

export function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Library Extended Hours",
      content: "The main library will extend its operating hours during finals week. New hours: 7 AM - 2 AM from June 20-30.",
      author: "Library Services",
      date: "June 5, 2025",
    },
    {
      id: 2,
      title: "Summer Registration Open",
      content: "Registration for summer courses is now open. Please complete your registration by June 20 to secure your spot.",
      author: "Registrar Office",
      date: "June 8, 2025",
    },
    {
      id: 3,
      title: "Important Campus Closure Notice",
      content: "Due to scheduled maintenance, the campus will be closed on Saturday, June 14. All weekend classes will be conducted online.",
      author: "Administration",
      date: "June 10, 2025",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/20 dark:border-gray-700/20"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-200">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <motion.div
            key={announcement.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 border-l-4 border-blue-600 bg-gray-100/70 dark:bg-gray-800/70 rounded-lg transition hover:bg-gray-200/70 dark:hover:bg-gray-700/70"
          >
            <h3 className="font-bold text-gray-900 dark:text-gray-200">{announcement.title}</h3>
            <p className="text-gray-700 dark:text-gray-400 mt-1">{announcement.content}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              {announcement.author} • {announcement.date}
            </p>
            <p className="mt-2 text-blue-600 dark:text-blue-300 cursor-pointer hover:underline">
              Read More
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
