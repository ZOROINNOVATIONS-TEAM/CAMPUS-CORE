import React from "react";

export default function MapSearchPanel() {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
      <input
        type="text"
        placeholder="Search for buildings, rooms, or facilities..."
        className="flex-1 border rounded px-3 py-2"
      />
      <select className="border rounded px-2 py-2">
        <option>Building Type</option>
      </select>
      <select className="border rounded px-2 py-2">
        <option>Floor Level</option>
      </select>
    </div>
  );
}
