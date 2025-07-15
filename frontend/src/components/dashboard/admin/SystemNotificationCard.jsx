import { AlertCircle, CheckCircle, Clock } from "lucide-react";

export function SystemNotificationsCard({ notifications = [] }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 sm:p-6 flex flex-col min-h-[220px] w-full">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        System Notifications
      </h3>
      <div className="flex flex-col gap-4">
        {notifications.length === 0 && (
          <div className="text-gray-400 dark:text-gray-500 text-sm text-center">
            No notifications
          </div>
        )}
        {notifications.map((note, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {note.type === "error" && (
              <AlertCircle className="w-5 h-5 min-w-[20px] text-red-500 mt-0.5" />
            )}
            {note.type === "success" && (
              <CheckCircle className="w-5 h-5 min-w-[20px] text-green-500 mt-0.5" />
            )}
            {note.type === "info" && (
              <Clock className="w-5 h-5 min-w-[20px] text-yellow-500 mt-0.5" />
            )}
            <div className="flex flex-col min-w-0">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-200 break-words">
                {note.text}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-400">{note.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
