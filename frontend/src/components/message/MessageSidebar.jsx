import React from "react";

const users = {
  admin: "Admin Office",
  sharma: "Prof. Sharma",
  library: "Library",
};

export default function MessageSidebar({ selected, onSelect, latestMessages }) {
  return (
    <div className="w-72 bg-blue-600 text-white flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 text-lg font-semibold">💬 Messages</div>

      {/* Search */}
      <div className="bg-white text-black px-4 py-3">
        <input
          placeholder="Search..."
          className="w-full px-3 py-2 rounded border border-gray-300 text-sm text-gray-800 outline-none"
        />
      </div>

      {/* Message List */}
      <ul className="flex-1 bg-white overflow-y-auto p-2">
        {Object.entries(users).map(([key, name]) => (
          <li
            key={key}
            onClick={() => onSelect(key)}
            className={`p-3 mb-2 rounded-lg shadow-sm flex justify-between items-start cursor-pointer ${
              selected === key ? "bg-blue-100" : "hover:bg-gray-100"
            }`}
          >
            <div>
              <p className="font-medium text-gray-900">{name}</p>
              <p className="text-sm text-gray-700 truncate w-44">
                {latestMessages[key]?.slice(-1)[0]?.text || ""}
              </p>
            </div>
            <button className="text-gray-400 hover:text-red-500 text-sm mt-1">🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
