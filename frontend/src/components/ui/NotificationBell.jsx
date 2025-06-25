import { Bell } from "lucide-react";

export function NotificationBell({ unreadCount, onClick }) {
  return (
    <div
      className="relative cursor-pointer"
      onClick={onClick}
      role="button"
      aria-label="Open notifications"
      tabIndex={0}
    >
      <Bell className="w-6 h-6 text-gray-700" />
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
          {unreadCount}
        </span>
      )}
    </div>
  );
}
