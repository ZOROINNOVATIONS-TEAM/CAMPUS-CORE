import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const QuizReportsCard = () => {
  const reports = [
    { title: "Math Quiz Results", course: "Advanced Math", updated: "10 mins ago" },
    { title: "Physics Assignment Report", course: "PHYS101", updated: "2 hours ago" },
    { title: "English Literature Test", course: "ENG205", updated: "Yesterday" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md p-4 rounded-lg transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <FontAwesomeIcon icon={faBook} />
          Quiz Reports
        </h3>
        <button className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 text-sm transition">
          Create New
        </button>
      </div>
      <ul className="space-y-4">
        {reports.map((report, index) => (
          <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-2">
            <p className="font-medium">{report.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{report.course}</p>
            <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
              Last Updated: {report.updated}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizReportsCard;
