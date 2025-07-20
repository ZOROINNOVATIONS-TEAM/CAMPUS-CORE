import React from "react";

const RecentRegistrationsCard = () => {
  const users = [
    { name: "John Doe", role: "Student", date: "Today" },
    { name: "Dr. Emily", role: "Faculty", date: "Yesterday" },
    { name: "Alex Johnson", role: "Student", date: "2 days ago" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md p-4 rounded-lg transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Recent Registrations</h3>
        <button className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 text-sm transition">
          View All
        </button>
      </div>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">{user.role}</p>
            </div>
            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 px-2 py-1 rounded-full">
              {user.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentRegistrationsCard;
