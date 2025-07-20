import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserGraduate, faChalkboardTeacher, faUser } from "@fortawesome/free-solid-svg-icons";

const students = 1284;
const faculty = 86;

const recentRegistrations = [
  {
    name: "Emily Parker",
    role: "Student · Computer Science",
    ago: "2h ago",
    icon: faUserGraduate,
  },
  {
    name: "Dr. James Wilson",
    role: "Faculty · Mathematics",
    ago: "1d ago",
    icon: faChalkboardTeacher,
  },
];

const UserManagementCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 max-w-xl mx-auto">
    {/* Header Row */}
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">User Management</h3>
      <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:brightness-110 transition">
        <FontAwesomeIcon icon={faUserPlus} />
        <span className="font-semibold text-sm">Register New User</span>
      </button>
    </div>
    {/* Stats Row */}
    <div className="flex items-center gap-4 mb-4">
      <div className="flex-1 flex items-center gap-3 bg-blue-50 dark:bg-blue-900 rounded-xl px-5 py-4">
        <div className="rounded-full p-3 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200">
          <FontAwesomeIcon icon={faUserGraduate} />
        </div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-300 font-medium">Total Students</div>
          <div className="text-xl font-bold text-blue-700 dark:text-blue-200">{students.toLocaleString()}</div>
        </div>
      </div>
      <div className="flex-1 flex items-center gap-3 bg-purple-50 dark:bg-purple-900 rounded-xl px-5 py-4">
        <div className="rounded-full p-3 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-200">
          <FontAwesomeIcon icon={faChalkboardTeacher} />
        </div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-200 font-medium">Total Faculty</div>
          <div className="text-xl font-bold text-purple-700 dark:text-purple-100">{faculty}</div>
        </div>
      </div>
    </div>
    {/* Recent Registrations */}
    <div className="mt-1">
      <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Recent Registrations</div>
      <ul className="divide-y divide-gray-100 dark:divide-gray-800">
        {recentRegistrations.map((user, idx) => (
          <li key={user.name} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gray-100 dark:bg-gray-700 p-2 text-gray-500 dark:text-gray-300">
                <FontAwesomeIcon icon={user.icon || faUser} />
              </span>
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100 text-sm">{user.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{user.role}</div>
              </div>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500">{user.ago}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default UserManagementCard;
