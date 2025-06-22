import { X, CheckCircle, Info, AlertTriangle, AlertCircle, Trash } from "lucide-react";

const icons = {
  success: <CheckCircle className="text-green-500" />,
  info: <Info className="text-blue-500" />,
  warning: <AlertTriangle className="text-yellow-500" />,
  error: <AlertCircle className="text-red-500" />
};

export default function NotificationDrawer({
  open, notifications, onClose, onDelete, onMarkRead
}) {
  return (
    <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg z-50 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="p-4 space-y-3 overflow-y-auto max-h-[80vh]">
        {notifications.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-8">No notifications</p>
        ) : notifications.map((n) => (
          <div key={n.id} className={`flex items-start gap-3 rounded-md p-3 ${n.read ? "bg-gray-50" : "bg-blue-50 border-l-4 border-blue-500"}`}>
            <div className="pt-1">{icons[n.type] || <Info className="text-gray-400" />}</div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 text-sm">{n.title}</div>
              <div className="text-xs text-gray-700">{n.message}</div>
              <div className="text-xs text-gray-400 mt-1">{n.time}</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              {!n.read && (
                <button onClick={() => onMarkRead(n.id)} className="text-xs text-blue-600 hover:underline">
                  Mark as read
                </button>
              )}
              <button onClick={() => onDelete(n.id)}>
                <Trash className="w-4 h-4 text-gray-400 hover:text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
