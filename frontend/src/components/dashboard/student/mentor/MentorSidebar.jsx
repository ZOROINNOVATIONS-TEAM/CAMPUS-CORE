import { useState } from "react";
import { User } from "lucide-react";

export default function MentorSidebar({ mentors, selectedMentorId, setSelectedMentorId }) {
  const [search, setSearch] = useState("");

  const filteredMentors = mentors.filter((m) =>
    m.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full w-full md:w-72 border-r bg-white dark:bg-gray-900 dark:border-gray-700">
      {/* Search Input */}
      <div className="p-3">
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search faculty"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Mentor List */}
      <div className="flex-1 overflow-y-auto">
        {filteredMentors.length === 0 ? (
          <div className="text-center text-gray-400 dark:text-gray-500 p-4">No mentors found.</div>
        ) : (
          filteredMentors.map((mentor) => (
            <button
              key={mentor.id}
              onClick={() => setSelectedMentorId(mentor.id)}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 border-b dark:border-gray-700 transition ${
                mentor.id === selectedMentorId
                  ? "bg-blue-100 dark:bg-blue-900 font-semibold"
                  : "hover:bg-blue-50 dark:hover:bg-gray-800"
              }`}
            >
              <User className="w-8 h-8 text-blue-500 shrink-0" />
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-gray-900 dark:text-gray-100">{mentor.name}</span>
                {mentor.department && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {mentor.department}
                  </span>
                )}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
