import { RotateCcw } from "lucide-react";

export default function CampusMapSearch() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow border dark:border-gray-700 p-4 flex flex-col gap-3">
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <input
          className="border dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-4 py-2 flex-1 text-sm placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Search for buildings, rooms, or facilities..."
        />
        <select className="border dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-2 py-2 text-sm">
          <option>Building Type</option>
          <option>Lecture Hall</option>
          <option>Staff Room</option>
        </select>
        <select className="border dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-2 py-2 text-sm">
          <option>Floor Level</option>
          <option>Ground</option>
          <option>1st Floor</option>
        </select>
        <button
          className="ml-auto px-3 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-200 flex items-center gap-1"
          aria-label="Reset Filters"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>
    </div>
  );
}
