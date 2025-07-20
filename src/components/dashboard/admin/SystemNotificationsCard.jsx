import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";

const SystemNotificationsCard = () => {
  const notifications = [
    { message: "New student registered", time: "10 mins ago", type: "info" },
    { message: "Course update published", time: "25 mins ago", type: "success" },
    { message: "Server maintenance scheduled", time: "1 hour ago", type: "warning" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md p-4 rounded-lg transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">System Notifications</h3>
        <button className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 text-sm transition">
          See all
        </button>
      </div>
      <ul className="space-y-3">
        {notifications.map((note, index) => (
          <li key={index} className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2">
                {note.type === 'info' && (
                  <FontAwesomeIcon icon={faInfo} className="text-blue-500" />
                )}
                {note.type === 'success' && (
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                )}
                {note.type === 'warning' && (
                  <FontAwesomeIcon icon={faExclamation} className="text-yellow-500" />
                )}
                <p className="text-sm">{note.message}</p>
              </div>
            </div>
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium transition-colors
                ${
                  note.type === 'info'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                    : note.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
                    : 'bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-200'
                }`}
            >
              {note.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SystemNotificationsCard;
