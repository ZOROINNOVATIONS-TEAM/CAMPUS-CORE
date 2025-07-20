// src/components/faculty/RecentActivity.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faCheckCircle,
  faDownload,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const RecentActivity = () => {
  // Sample recent activity data
  const activities = [
    {
      icon: faFileAlt,
      color: "text-blue-500 dark:text-blue-400",
      title: "New Assignment Created",
      course: "Introduction to Computer Science",
      date: "June 15, 2025",
      status: "Published",
    },
    {
      icon: faCheckCircle,
      color: "text-green-500 dark:text-green-400",
      title: "Graded Assignments",
      course: "Advanced Mathematics",
      date: "June 14, 2025",
      status: "Completed",
    },
    {
      icon: faDownload,
      color: "text-yellow-500 dark:text-yellow-400",
      title: "New Material Uploaded",
      course: "Physics Laboratory",
      date: "June 13, 2025",
      status: "Published",
    },
    {
      icon: faClock,
      color: "text-gray-500 dark:text-gray-400",
      title: "Pending Submission",
      course: "English Literature",
      date: "June 12, 2025",
      status: "In Review",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-200">Recent Activity</h2>
        <button className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          View All
        </button>
      </div>

      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start space-x-3">
            {/* Icon */}
            <div className={`mt-1 ${activity.color}`}>
              <FontAwesomeIcon icon={activity.icon} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-200">{activity.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{activity.course}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.date}</p>
            </div>

            {/* Status Badge */}
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                activity.status === "Published"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200"
                  : activity.status === "Completed"
                  ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                  : activity.status === "In Review"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {activity.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
