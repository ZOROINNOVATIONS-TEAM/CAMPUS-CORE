import { BookOpen, Users, UserCheck, GraduationCap, Plus } from "lucide-react";

export default function CourseManagementStats({ onAddCourse }) {
  const stats = [
    {
      label: "Total Courses",
      value: 48,
      icon: BookOpen,
      color: "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      label: "Departments",
      value: 12,
      icon: GraduationCap,
      color: "bg-pink-50 text-pink-700 dark:bg-pink-900 dark:text-pink-300",
    },
    {
      label: "Active Faculty",
      value: 36,
      icon: UserCheck,
      color: "bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300",
    },
    {
      label: "Total Students",
      value: 1248,
      icon: Users,
      color: "bg-yellow-50 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex flex-wrap gap-6">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="flex items-center gap-2 min-w-[140px]">
            <span className={`p-2 rounded-lg ${color}`}>
              <Icon className="w-5 h-5" />
            </span>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
              <div className="text-lg font-bold text-gray-800 dark:text-white">{value}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        onClick={onAddCourse}
      >
        <Plus className="w-4 h-4" /> Add New Course
      </button>
    </div>
  );
}
