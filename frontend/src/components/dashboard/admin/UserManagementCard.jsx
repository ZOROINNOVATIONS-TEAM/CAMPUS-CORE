import { UserPlus, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function UserManagementCard({ users = {}, recent = [] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 flex flex-col min-h-[220px] w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">User Management</h3>
        <Link
  to="/admin/manage-users"
  className="flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
>
  <UserPlus className="w-4 h-4" />
  Manage Users
</Link>
      </div>
      <div className="flex gap-3 mb-3">
        <div className="flex-1 bg-blue-50 rounded-lg p-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-500" />
          <div>
            <div className="text-xs text-gray-700">Total Students</div>
            <div className="font-bold text-gray-900">{users.students?.toLocaleString?.() || 0}</div>
          </div>
        </div>
        <div className="flex-1 bg-purple-50 rounded-lg p-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-purple-500" />
          <div>
            <div className="text-xs text-gray-700">Total Faculty</div>
            <div className="font-bold text-gray-900">{users.faculty?.toLocaleString?.() || 0}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xs font-medium text-gray-600 mb-2">Recent Registrations</div>
        <div className="flex flex-col gap-2">
          {recent.length === 0 && (
            <div className="text-xs text-gray-400">No recent registrations</div>
          )}
          {recent.map((r, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-700 text-sm">{r.name}</span>
              <span className="text-xs text-gray-400">{r.type}</span>
              <span className="text-xs text-gray-400 ml-auto">{r.timeAgo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Example usage:
UserManagementCard.defaultProps = {
  users: { students: 1284, faculty: 86 },
  recent: [
    { name: "Emily Parker", type: "Student – Computer Science", timeAgo: "2h ago" },
    { name: "Dr. James Wilson", type: "Faculty – Mathematics", timeAgo: "1d ago" },
  ],
};
