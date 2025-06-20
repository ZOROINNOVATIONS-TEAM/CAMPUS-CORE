import {
  Map as MapIcon,
  Home,
  GraduationCap,
  Calendar,
  BarChart2,
  BookOpen,
  ClipboardList,
  Briefcase,
  Users,
} from "lucide-react"; 

export function FacultyNavTabs({ activeTab, onChange }) {
  const tabs = [
    { label: "Dashboard", icon: Home, target: "dashboard" },
    { label: "Exam", icon: GraduationCap, target: "exam" },
    { label: "Course Setup", icon: Calendar, target: "courses" },
    { label: "Grading", icon: BarChart2, target: "grading" },
    { label: "Assignment", icon: ClipboardList, target: "assignment" },
    { label: "Map", icon: MapIcon, target: "map" },
    { label: "Duties", icon: Briefcase, target: "duties" },
    { label: "Mentor", icon: Users, target: "mentor" },
  ];

  return (
    <nav
      className="mt-6 bg-white rounded-xl shadow-sm p-4 flex overflow-x-auto gap-4 justify-between md:justify-evenly"
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
