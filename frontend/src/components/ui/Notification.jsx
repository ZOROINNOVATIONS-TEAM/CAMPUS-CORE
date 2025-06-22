import { useState } from "react";
import { NotificationBell } from "./NotificationBell";
import NotificationDrawer from "./NotificationDrawer";

export default function Notification() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "info", title: "New Class", message: "Maths at 9:00 AM", time: "2m ago", read: false },
    { id: 2, type: "success", title: "Result Published", message: "Your grades are out!", time: "1h ago", read: false },
    //...
  ]);
  const unreadCount = notifications.filter(n => !n.read).length;

  function handleMarkRead(id) {
    setNotifications((prev) => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }
  function handleDelete(id) {
    setNotifications((prev) => prev.filter(n => n.id !== id));
  }

  return (
    <div>
      <NotificationBell unreadCount={unreadCount} onClick={() => setDrawerOpen(true)} />
      <NotificationDrawer
        open={drawerOpen}
        notifications={notifications}
        onClose={() => setDrawerOpen(false)}
        onDelete={handleDelete}
        onMarkRead={handleMarkRead}
      />
    </div>
  );
}
