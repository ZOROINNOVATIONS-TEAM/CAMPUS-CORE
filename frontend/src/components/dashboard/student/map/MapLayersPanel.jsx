import React from "react";

export default function MapLayersPanel() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-bold text-indigo-600 mb-4 border-b pb-2">
        Map Layers
      </h3>
      <div className="space-y-2 mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600 rounded border-gray-300" defaultChecked />
          <span className="text-blue-700 font-medium">Academic Buildings</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2 h-4 w-4 text-green-600 rounded border-gray-300" defaultChecked />
          <span className="text-green-700 font-medium">Residence Halls</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2 h-4 w-4 text-yellow-600 rounded border-gray-300" defaultChecked />
          <span className="text-yellow-700 font-medium">Dining Facilities</span>
        </label>
      </div>
      <h3 className="text-lg font-bold text-indigo-600 mb-4 border-b pb-2">
        Display Options
      </h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2 h-4 w-4 text-red-600 rounded border-gray-300" />
          <span className="text-red-700 font-medium">Show Building Names</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2 h-4 w-4 text-teal-600 rounded border-gray-300" />
          <span className="text-teal-700 font-medium">Show Walking Paths</span>
        </label>
      </div>
    </div>
  );
}



