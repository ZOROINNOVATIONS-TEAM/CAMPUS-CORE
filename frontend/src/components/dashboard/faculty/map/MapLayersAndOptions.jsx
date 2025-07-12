import React, { useState } from "react";

export default function MapLayersAndOptions() {
  const [layers, setLayers] = useState({
    lecture: true,
    staff: true,
    research: true,
    dept: false,
    parking: true,
    myClasses: false,
  });

  const [options, setOptions] = useState({
    walking: true,
    names: true,
    accessibility: false,
    view3d: false,
  });

  function toggleLayer(layer) {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  }

  function toggleOption(opt) {
    setOptions((prev) => ({ ...prev, [opt]: !prev[opt] }));
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow border dark:border-gray-700 p-4 min-w-[260px] max-w-xs flex flex-col gap-6">
      <div>
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Map Layers</h3>
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={layers.lecture} onChange={() => toggleLayer('lecture')} className="accent-blue-500" />
            <span className="text-blue-600 dark:text-blue-400">Lecture Halls</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={layers.staff} onChange={() => toggleLayer('staff')} className="accent-green-500" />
            <span className="text-green-600 dark:text-green-400">Staff Rooms</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={layers.research} onChange={() => toggleLayer('research')} className="accent-yellow-500" />
            <span className="text-yellow-600 dark:text-yellow-400">Research Labs</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={layers.dept} onChange={() => toggleLayer('dept')} className="accent-gray-500" />
            <span className="text-gray-600 dark:text-gray-400">Department Offices</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={layers.parking} onChange={() => toggleLayer('parking')} className="accent-purple-500" />
            <span className="text-purple-600 dark:text-purple-400">Faculty Parking</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={layers.myClasses} onChange={() => toggleLayer('myClasses')} className="accent-red-500" />
            <span className="text-red-600 dark:text-red-400">My Classes</span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Display Options</h4>
        <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={options.walking} onChange={() => toggleOption('walking')} className="accent-blue-500" />
            <span>Show Walking Paths</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={options.names} onChange={() => toggleOption('names')} className="accent-blue-500" />
            <span>Show Building Names</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={options.accessibility} onChange={() => toggleOption('accessibility')} className="accent-blue-500" />
            <span>Show Accessibility Routes</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={options.view3d} onChange={() => toggleOption('view3d')} className="accent-blue-500" />
            <span>3D Building View</span>
          </label>
        </div>
      </div>
    </div>
  );
}
