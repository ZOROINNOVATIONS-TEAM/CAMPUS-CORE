import React from "react";
import { motion } from "framer-motion";

export function NavTabs({ activeTab, onChange }) {
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "schedule", label: "Schedule" },
    { id: "results", label: "Results" },
    { id: "courses", label: "Courses" },
    { id: "events", label: "Events" },
    { id: "mentoring", label: "Mentoring" },
    { id: "fees", label: "Fees" },
  ];

  return (
    <div className="flex overflow-x-auto mb-6">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 font-medium rounded-t-lg transition ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
}
