const templates = [
  { type: "Lecture", title: "Guest Lecture", description: "Special guest speaker" },
  { type: "Group Study", title: "Study Group", description: "Team up with friends" },
  { type: "Coaching", title: "One-on-One Coaching", description: "Personal help session" },
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
              <div className="text-xs text-gray-500">{t.type}</div>
              <div className="text-xs text-gray-400">{t.description}</div>
            </div>
            <button
              className="ml-2 text-violet-600 hover:underline text-xs"
              onClick={() => onSelect(t)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
