import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faChartBar, faBook, faCalendarDay, faUserFriends, faMoneyBillWave, faMap, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: faHome },
  { id: "schedule", label: "Schedule", icon: faCalendarAlt },
  { id: "results", label: "Results", icon: faChartBar },
  { id: "courses", label: "Courses", icon: faBook },
  { id: "events", label: "Events", icon: faCalendarDay },
  { id: "mentoring", label: "Mentoring", icon: faUserFriends },
  { id: "fees", label: "Fees", icon: faMoneyBillWave },
  { id: "map", label: "Map", icon: faMap },
  { id: "feedback", label: "Other", icon: faCommentDots }
];

export function Sidebar({ activeTab, onChange }) {
  return (
    <div className="w-64 min-h-screen bg-black/80 dark:bg-emerald-800/80 backdrop-blur-lg shadow-lg border-r border-gray-200 dark:border-gray-700/50 p-4">
       <div className="flex justify-center">
            <img src="/camplogo.jpg" alt="Campus Core" className="h-20 mb-4 w-20 rounded-full " />
        </div>
      
      <ul className="space-y-2">
        {tabs.map((tab) => (
          <motion.li
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
              activeTab === tab.id
                ? "bg-teal-400 text-black"
                : "bg-red-600 hover:bg-emerald-900 dark:bg-gray-700/70 dark:hover:bg-teal-600 text-gray-700 dark:text-gray-800"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={tab.icon} className="mr-3" />
            {tab.label}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
