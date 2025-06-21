export default function AddEventSidebar() {
  // For now, use static saved templates. You can wire to state/CRUD/modal as needed.
  const templates = [
    { id: 1, name: "Personal Coaching", datetime: "Jan 12, 2025, 11:00 AM" },
    { id: 2, name: "Group Study", datetime: "Feb 19, 2025, 5:00 PM" },
    { id: 3, name: "Introductory Lecture", datetime: "Feb 27, 2025, 9:00 AM" },
    { id: 4, name: "Assignment Deadline", datetime: "Mar 10, 2025, 10:00 AM" },
    { id: 5, name: "Presentation Day", datetime: "Jan 25, 2025, 3:00 PM" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-xs mx-auto">
      <button
        className="w-full py-2 bg-blue-600 text-white rounded-xl font-semibold mb-4 transition hover:bg-blue-700"
        // onClick={showAddEventModal}
      >
        + Add New Event
      </button>
      <div>
        <h4 className="text-md font-semibold mb-2">Saved Templates</h4>
        <div className="space-y-2">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="bg-gray-50 p-3 rounded-xl shadow-sm"
            >
              <div className="font-medium">{tpl.name}</div>
              <div className="text-xs text-gray-500">{tpl.datetime}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
