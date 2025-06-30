import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUser, faBell, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export function QuickLinks({ isDark }) {
  const links = [
    { icon: faBook, label: "Request Leave" },
    { icon: faUser, label: "Contact Mentor" },
    { icon: faBell, label: "Report Issue" },
    { icon: faFileAlt, label: "View Documents" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/20 dark:border-gray-700/20`}
    >
      <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 gap-4">
        {links.map(({ icon, label }) => (
          <motion.button
            key={label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
          >
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
