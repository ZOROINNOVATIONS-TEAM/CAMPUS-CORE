import { X } from "lucide-react";
import { useState } from "react";

export default function StudentMultiSelect({ students, selectedIds, setSelectedIds }) {
  const [search, setSearch] = useState("");
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = id => {
    setSelectedIds(selectedIds.includes(id)
      ? selectedIds.filter(x => x !== id)
      : [...selectedIds, id]
    );
  };

  return (
    <div>
      {/* Chips for selected */}
      <div className="flex flex-wrap gap-2 mb-2 min-h-[28px]">
        {selectedIds.map(id => {
          const student = students.find(s => s.id === id);
          if (!student) return null;
          return (
            <span key={id} className="flex items-center bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">
              {student.name}
              <button
                type="button"
                onClick={() => handleToggle(id)}
                className="ml-1 text-blue-400 hover:text-blue-700"
                aria-label="Remove"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          );
        })}
      </div>
      {/* Search box */}
      <input
        type="text"
        className="w-full border rounded px-3 py-1 mb-2 text-sm"
        placeholder="Search students..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {/* Checkbox list */}
      <div className="max-h-32 overflow-y-auto flex flex-col gap-1">
        {filtered.map(s => (
          <label key={s.id} className="flex items-center gap-2 cursor-pointer px-2 py-1 hover:bg-blue-50 rounded">
            <input
              type="checkbox"
              checked={selectedIds.includes(s.id)}
              onChange={() => handleToggle(s.id)}
              className="accent-blue-600"
            />
            <span className="text-sm">{s.name}</span>
          </label>
        ))}
        {filtered.length === 0 && (
          <div className="text-gray-400 px-2 py-1 text-xs">No students found</div>
        )}
      </div>
    </div>
  );
}
