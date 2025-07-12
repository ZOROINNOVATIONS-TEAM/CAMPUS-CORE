import { useState, useEffect } from "react";

export default function EventAddModal({ date, onAdd, onClose, initialData }) {
  const defaultDate = initialData
    ? new Date(initialData.date)
    : new Date(date.setHours(10, 0, 0, 0));

  const [type, setType] = useState(initialData?.type || "Lecture");
  const [title, setTitle] = useState(initialData?.title || "");
  const [desc, setDesc] = useState(initialData?.description || "");
  const [eventDateTime, setEventDateTime] = useState(
    defaultDate.toISOString().slice(0, 16)
  );

  useEffect(() => {
    if (initialData) {
      setType(initialData.type);
      setTitle(initialData.title);
      setDesc(initialData.description);
      setEventDateTime(new Date(initialData.date).toISOString().slice(0, 16));
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    onAdd({
      type,
      title,
      description: desc,
      date: new Date(eventDateTime),
      id: initialData?.id || Date.now(),
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md mx-auto border dark:border-gray-700">
        <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-100">
          {initialData ? "Edit Event" : "Add New Event"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Event Type</label>
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="w-full rounded border border-gray-300 dark:border-gray-600 px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <option>Lecture</option>
              <option>Group Study</option>
              <option>Coaching</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full rounded border border-gray-300 dark:border-gray-600 px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Description</label>
            <input
              value={desc}
              onChange={e => setDesc(e.target.value)}
              className="w-full rounded border border-gray-300 dark:border-gray-600 px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Date & Time</label>
            <input
              type="datetime-local"
              value={eventDateTime}
              onChange={e => setEventDateTime(e.target.value)}
              className="w-full rounded border border-gray-300 dark:border-gray-600 px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded px-3 py-1"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white rounded px-3 py-1"
            >
              {initialData ? "Update" : "Add Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
