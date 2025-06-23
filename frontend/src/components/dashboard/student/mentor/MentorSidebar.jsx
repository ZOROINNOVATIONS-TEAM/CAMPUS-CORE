import { useState } from "react";
import { User } from "lucide-react";

export default function MentorSidebar({ mentors, selectedMentorId, setSelectedMentorId }) {
  const [search, setSearch] = useState("");
  const filtered = mentors.filter((m) =>
    m.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-3">
        <input
          className="w-full px-3 py-2 rounded border text-sm bg-white"
          placeholder="Search faculty"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 && (
          <div className="text-center text-gray-400 p-4">No mentors found.</div>
        )}
        {filtered.map((mentor) => (
          <div
            key={mentor.id}
            className={`flex items-center space-x-3 cursor-pointer px-4 py-3 border-b transition hover:bg-blue-50 ${
              mentor.id === selectedMentorId ? "bg-blue-100 font-semibold" : "bg-white"
            }`}
            onClick={() => setSelectedMentorId(mentor.id)}
          >
            <User className="w-8 h-8 text-blue-400" />
            <div>
              <div>{mentor.name}</div>
              <div className="text-xs text-gray-500">{mentor.department || ""}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
