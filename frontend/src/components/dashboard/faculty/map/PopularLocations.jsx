import { Landmark, Library, Salad, Dumbbell, Hammer } from "lucide-react";

const locations = [
  { label: "Science Building", icon: Landmark, time: "5 min walk", link: "#" },
  { label: "Main Library", icon: Library, time: "8 min walk", link: "#" },
  { label: "Student Center", icon: Salad, time: "3 min walk", link: "#" },
  { label: "Recreation Center", icon: Dumbbell, time: "12 min walk", link: "#" },
  { label: "Engineering Hall", icon: Hammer, time: "7 min walk", link: "#" },
];

export default function PopularLocations() {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {locations.map(({ label, icon: Icon, time, link }) => (
        <div
          key={label}
          className="flex-1 min-w-[140px] bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col border border-gray-200 dark:border-gray-700"
        >
          <Icon className="w-7 h-7 mb-1 text-blue-500" />
          <span className="font-medium text-sm text-gray-800 dark:text-white">{label}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">{time}</span>
          <a
            href={link}
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Get Directions
          </a>
        </div>
      ))}
      <button className="ml-auto px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium hover:bg-blue-100 dark:hover:bg-blue-900 text-sm shadow transition">
        View All
      </button>
    </div>
  );
}
