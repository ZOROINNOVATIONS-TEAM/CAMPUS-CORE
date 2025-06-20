import React from "react";
import { BellRing } from "lucide-react";

const NotificationTab = () => {
  const notifications = [
    { title: "New Assignment Released", time: "10 mins ago" },
    { title: "Maintenance Scheduled", time: "1 hour ago" },
    { title: "Reminder: Project Submission", time: "Yesterday" },
    { title: "Weekly Newsletter Sent", time: "2 days ago" },
  ];

  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-lg font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Notifications</h2>
          <p className="text-sm text-gray-600">Send alerts and announcements</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          <BellRing size={18} />
          Send Notification
        </button>
      </div>

      {/* Notification History */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Notifications</h3>
        <ul className="space-y-3">
          {notifications.map((note, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-3 h-3 mt-1 rounded-full bg-blue-500"></div>
              <div>
                <p className="font-medium text-gray-800">{note.title}</p>
                <p className="text-sm text-gray-500">{note.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationTab;
