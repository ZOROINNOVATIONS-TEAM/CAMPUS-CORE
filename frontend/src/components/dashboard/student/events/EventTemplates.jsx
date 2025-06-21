const templates = [
  { type: "Coaching", title: "Personal Coaching", date: new Date(2025, 0, 17, 11, 0) },
  { type: "Group Study", title: "Group Study", date: new Date(2025, 1, 12, 17, 0) },
  { type: "Lecture", title: "Introductory Lecture", date: new Date(2025, 1, 27, 9, 0) },
  { type: "Assignment", title: "Assignment Deadline", date: new Date(2025, 2, 18, 12, 0) },
  { type: "Presentation", title: "Presentation Day", date: new Date(2025, 0, 23, 15, 0) },
];

export default function EventTemplates({ onSelect }) {
  return (
    <div>
      <h3 className="font-semibold text-base mb-3">Saved Templates</h3>
      <ul className="space-y-2">
        {templates.map((t, idx) => (
          <li key={idx} className="border rounded-lg p-2 flex justify-between items-center">
            <div>
              <span className="font-semibold">{t.title}</span>
              <div className="text-xs text-gray-500">{t.date.toLocaleDateString()} {t.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
            <button
              className="ml-2 text-violet-600 hover:underline text-xs"
              onClick={() => onSelect({ ...t, id: Date.now() })}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
