export default function CampusMapLayers() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow border dark:border-gray-700 p-4 min-w-[260px] max-w-xs flex flex-col gap-6">
      <div>
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Map Layers</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <input type="checkbox" checked readOnly className="mr-2 accent-blue-500" />
            <span className="text-blue-600 dark:text-blue-400">Lecture Halls</span>
          </li>
          <li>
            <input type="checkbox" checked readOnly className="mr-2 accent-green-500" />
            <span className="text-green-600 dark:text-green-400">Staff Rooms</span>
          </li>
          <li>
            <input type="checkbox" checked readOnly className="mr-2 accent-yellow-500" />
            <span className="text-yellow-600 dark:text-yellow-400">Research Labs</span>
          </li>
          <li>
            <input type="checkbox" className="mr-2 accent-purple-500" />
            <span className="text-purple-600 dark:text-purple-400">Faculty Parking</span>
          </li>
          <li>
            <input type="checkbox" className="mr-2 accent-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">Department Offices</span>
          </li>
          <li>
            <input type="checkbox" className="mr-2 accent-red-500" />
            <span className="text-red-600 dark:text-red-400">My Classes</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Display Options</h3>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input type="checkbox" defaultChecked className="accent-blue-500" />
            Show Walking Paths
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input type="checkbox" defaultChecked className="accent-blue-500" />
            Show Building Names
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input type="checkbox" className="accent-blue-500" />
            Show Accessibility Routes
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input type="checkbox" className="accent-blue-500" />
            3D Building View
          </label>
        </div>
      </div>
    </div>
  );
}
