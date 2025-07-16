import {
  Map as MapIcon,
  Home,
  GraduationCap,
  Calendar,
  ClipboardList,
  Briefcase,
  CheckSquare,
  Users,
} from "lucide-react";

export function FacultyNavTabs({ activeTab, onChange }) {
  const tabs = [
    { label: "Dashboard", icon: Home, target: "dashboard" },
    { label: "Exam", icon: GraduationCap, target: "exam" },
    { label: "Course Setup", icon: Calendar, target: "courses" },
    { label: "Attendance", icon: CheckSquare, target: "attendance" },
    { label: "Assignment", icon: ClipboardList, target: "assignment" },
    { label: "Map", icon: MapIcon, target: "map" },
    { label: "Duties", icon: Briefcase, target: "duties" },
    { label: "Mentor", icon: Users, target: "mentor" },
  ];

  return (
    <nav
      className="mt-6 bg-white dark:bg-neutral-900 rounded-xl shadow-sm p-4 flex overflow-x-auto gap-4 justify-between md:justify-evenly"
      role="tablist"
      aria-label="Faculty navigation tabs"
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
          title={label}
          className={`flex flex-col items-center text-sm font-medium px-2 py-1 rounded-lg transition-all duration-200 whitespace-nowrap
            ${
              activeTab === target
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-neutral-800"
            }`}
        >
          <Icon className="w-5 h-5 mb-1" />
          {label}
        </button>
      ))}
    </nav>
  );
}
