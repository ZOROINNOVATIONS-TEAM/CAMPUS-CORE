// src/components/faculty/TodaysClassScheduleTable.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFlask,
  faBookOpen,
  faClock,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

const TodaysClassScheduleTable = () => {
  const classes = [
    {
      name: "Introduction to Computer Science",
      time: "09:00 AM - 10:30 AM",
      room: "Room 101",
      status: "Completed",
      icon: faBook,
    },
    {
      name: "Advanced Mathematics",
      time: "11:00 AM - 12:30 PM",
      icon: faBook,
    },
    {
      name: "Physics Laboratory",
      time: "02:00 PM - 04:00 PM",
      icon: faFlask,
    },
    {
      name: "English Literature",
      time: "04:30 PM - 06:00 PM",
      icon: faBookOpen,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Today's Class Schedule</h2>
        <button className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Full Schedule</button>
      </div>

      <div className="space-y-4">
        {classes.map((cls, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              cls.status === "Completed" ? "bg-green-100 dark:bg-green-800" : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 dark:bg-blue-700 text-white p-2 rounded-sm">
                <FontAwesomeIcon icon={cls.icon} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">{cls.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <FontAwesomeIcon icon={faClock} /> <span>{cls.time}</span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>{cls.room}</span>
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <span
                className={`px-2 py-1 rounded-md text-xs font-medium ${
                  cls.status === "Completed"
                    ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                    : cls.status === "Ongoing"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                {cls.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodaysClassScheduleTable;
