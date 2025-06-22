import React, { useState } from "react";
import { Bell, X, CheckCircle, Info } from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    title: "New Class",
    message: "Maths at 9:00 AM",
    time: "2m ago",
    unread: true,
    type: "info", 
  },
  {
    id: 2,
    title: "Result Published",
    message: "Your grades are out!",
    time: "1h ago",
    unread: false,
    type: "success",
  },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, unread: false } : note
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((note) => note.id !== id));
  };

  const renderIcon = (type) => {
    if (type === "info")
      return <Info className="text-blue-500 w-5 h-5 mt-1" />;
    if (type === "success")
      return <CheckCircle className="text-green-500 w-5 h-5 mt-1" />;
    return null;
  };

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative p-1">
        <Bell className="w-5 h-5 text-gray-700" />
        {notifications.some((n) => n.unread) && (
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-96 bg-white rounded-xl shadow-2xl border z-50">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h3 className="text-gray-800 font-semibold">Notifications</h3>
            <X
              size={18}
              onClick={() => setOpen(false)}
              className="cursor-pointer text-gray-500 hover:text-black"
            />
          </div>

          <ul className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <li className="p-4 text-center text-gray-500 text-sm">
                No notifications
              </li>
            ) : (
              notifications.map((note) => (
                <li
                  key={note.id}
                  className="bg-blue-50 m-2 rounded-lg px-4 py-3 shadow flex items-start justify-between"
                >
                  <div className="flex gap-3">
                    {renderIcon(note.type)}
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {note.title}
                      </h4>
                      <p className="text-sm text-gray-600">{note.message}</p>
                      <span className="text-xs text-gray-400">
                        {note.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-start ml-4 gap-2">
                    {note.unread && (
                      <button
                        onClick={() => markAsRead(note.id)}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Mark as read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(note.id)}
                      className="text-xs text-gray-500 hover:text-red-500"
                      title="Delete"
                    >
                      🗑
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
