import {
  Home,
  Calendar,
  BarChart2,
  Megaphone,
  Users,
  ClipboardList,
  BookOpen,
  Receipt,
} from "lucide-react";

export function NavTabs({ activeTab, onChange }) {
  const tabs = [
    { label: "Dashboard", icon: Home, target: "dashboard" },
    { label: "Schedule", icon: Calendar, target: "schedule" },
    { label: "Results", icon: ClipboardList, target: "results" },
    { label: "Courses", icon: BookOpen, target: "courses" },
    { label: "Fee", icon: Receipt, target:"fees"},
    { label: "Announcements", icon: Megaphone, target: "announcements" },
    { label: "Mentor", icon: Users, target: "mentoring" },
  ];

  return (
    <nav
      className="mt-6 bg-white rounded-xl shadow-sm p-4 flex overflow-x-auto gap-4 justify-between md:justify-evenly"
      role="tablist"
      aria-label="Main navigation tabs"
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
