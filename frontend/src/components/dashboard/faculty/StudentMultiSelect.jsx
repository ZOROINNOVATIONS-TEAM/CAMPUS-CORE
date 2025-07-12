import { X } from "lucide-react";
import { useState } from "react";

export default function StudentMultiSelect({ students, selectedIds, setSelectedIds }) {
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {/* Selected chips */}
      <div className="flex flex-wrap gap-2 mb-3 min-h-[32px]">
        {selectedIds.map((id) => {
          const student = students.find((s) => s.id === id);
          if (!student) return null;
          return (
            <span
              key={id}
              className="flex items-center bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded-full text-xs"
            >
              {student.name}
              <button
                type="button"
                onClick={() => handleToggle(id)}
                className="ml-1 text-blue-400 hover:text-blue-700 dark:hover:text-blue-200"
                aria-label={`Remove ${student.name}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          );
        })}
      </div>

      {/* Search input */}
      <input
        type="text"
        className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-1 mb-2 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* List */}
      <div className="max-h-40 overflow-y-auto flex flex-col gap-1">
        {filtered.map((s) => (
          <label
            key={s.id}
            className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            <input
              type="checkbox"
              checked={selectedIds.includes(s.id)}
              onChange={() => handleToggle(s.id)}
              className="accent-blue-600 dark:accent-blue-400"
            />
            <span className="text-sm text-gray-800 dark:text-gray-100">{s.name}</span>
          </label>
        ))}
        {filtered.length === 0 && (
          <div className="text-gray-400 dark:text-gray-500 px-2 py-1 text-xs">
            No students found
          </div>
        )}
      </div>
    </div>
  );
}
