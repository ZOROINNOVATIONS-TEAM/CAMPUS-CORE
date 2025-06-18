import {
  Home,
  Calendar,
  BarChart2,
  Bell,
  MessageCircle,
  Users,
  BookOpen,
} from "lucide-react";

export function NavMenu({ activeTab, onChange }) {
  const tabs = [
    { label: "Home", icon: Home, target: "home" },
    { label: "Schedule", icon: Calendar, target: "schedule" },
    { label: "Courses", icon: BookOpen, target: "courses" },
    { label: "Analytics", icon: BarChart2, target: "analytics" },
    { label: "Notifications", icon: Bell, target: "notification" },
    { label: "Messages", icon: MessageCircle, target: "message" },
    { label: "Mentor", icon: Users, target: "mentor" },
  ];

  return (
    <nav
      className="mt-6 bg-white rounded-xl shadow-sm p-4 flex overflow-x-auto gap-4 justify-between md:justify-evenly"
      role="tablist"
      aria-label="Admin dashboard main navigation"
    >
      {tabs.map(({ label, icon: Icon, target }) => (
        <button
          key={label}
          onClick={() => onChange(target)}
          role="tab"
          aria-selected={activeTab === target}
          aria-controls={`tab-panel-${target}`}
          id={`tab-${target}`}
          tabIndex={activeTab === target ? 0 : -1}
          aria-pressed={activeTab === target}
          className={`flex flex-col items-center text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
            activeTab === target
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          <Icon className="w-5 h-5 mb-1" />
          {label}
        </button>
      ))}
    </nav>
  );
}
