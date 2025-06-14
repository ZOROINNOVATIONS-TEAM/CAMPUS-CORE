function Sidebar() {
  const menuItems = [
    { label: "Home", icon: "🏠" },
    { label: "Schedule", icon: "📅" },
    { label: "Course Setup", icon: "📚" },
    { label: "Analytics", icon: "📊" },
    { label: "Notification", icon: "🔔" },
    { label: "Message", icon: "💬" },
    { label: "Mentor", icon: "🧑‍🏫" },
  ];

  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center rounded-xl shadow">
      {menuItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center text-sm">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;