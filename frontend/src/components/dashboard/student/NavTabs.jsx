import {
  Home,
  Calendar,
  ClipboardList,
  BookOpen,
  Receipt,
  PartyPopper,
  MessageSquare,
  Users,
} from "lucide-react";

export function NavTabs({ activeTab, onChange }) {
  const tabs = [
    { label: "Dashboard", icon: Home, target: "dashboard" },
    { label: "Schedule", icon: Calendar, target: "schedule" },
    { label: "Results", icon: ClipboardList, target: "results" },
    { label: "Courses", icon: BookOpen, target: "courses" },
    { label: "Fee", icon: Receipt, target: "fees" },
    { label: "Events", icon: PartyPopper, target: "events" },
    { label: "Feedback", icon: MessageSquare, target: "feedback" },
    { label: "Mentor", icon: Users, target: "mentoring" },
  ];

  return (
    <nav
      className="mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm px-2 py-3 flex overflow-x-auto scrollbar-hide gap-3 md:gap-4 justify-start md:justify-evenly"
      role="tablist"
      aria-label="Main Navigation Tabs"
    >
      {tabs.map(({ label, icon: Icon, target }) => {
        const isActive = activeTab === target;
        return (
          <button
            key={target}
            onClick={() => onChange(target)}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tab-panel-${target}`}
            id={`tab-${target}`}
            tabIndex={isActive ? 0 : -1}
            aria-pressed={isActive}
            title={label}
            className={`flex flex-col items-center justify-center text-xs md:text-sm px-3 py-2 font-medium whitespace-nowrap rounded-md transition-all duration-200 focus:outline-none ${
              isActive
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 shadow-inner"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <Icon className="w-5 h-5 mb-0.5 transition-transform duration-200 transform hover:scale-105" />
            {label}
          </button>
        );
      })}
    </nav>
  );
}
