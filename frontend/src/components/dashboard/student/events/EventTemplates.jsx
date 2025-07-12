const templates = [
  { type: "Lecture", title: "Guest Lecture", description: "Special guest speaker" },
  { type: "Group Study", title: "Study Group", description: "Team up with friends" },
  { type: "Coaching", title: "One-on-One Coaching", description: "Personal help session" },
];

function getTypeBadgeColor(type) {
  return {
    Lecture: "bg-violet-100 text-violet-700",
    "Group Study": "bg-blue-100 text-blue-700",
    Coaching: "bg-yellow-100 text-yellow-700",
  }[type] || "bg-gray-100 text-gray-700";
}

export default function EventTemplates({ onSelect }) {
  return (
    <div>
      <h3 className="font-semibold text-base mb-3 text-gray-800 dark:text-white">Saved Templates</h3>
      <ul className="space-y-2">
        {templates.map((t, idx) => (
          <li
            key={idx}
            className="border rounded-xl p-3 flex justify-between items-start gap-4 bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800 dark:text-white">{t.title}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeBadgeColor(t.type)}`}>
                  {t.type}
                </span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.description}</div>
            </div>
            <button
              className="text-violet-600 hover:underline text-xs mt-1 whitespace-nowrap"
              onClick={() => onSelect(t)}
            >
              + Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
