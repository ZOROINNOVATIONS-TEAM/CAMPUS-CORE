import { useState, useEffect } from "react";

export default function EventAddModal({ date, onAdd, onClose, initialData }) {
  // Default to selected date and 10:00 AM if adding, else use editing event's date/time
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
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-auto">
        <h3 className="font-semibold text-lg mb-3">
          {initialData ? "Edit Event" : "Add New Event"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Event Type</label>
            <select value={type} onChange={e => setType(e.target.value)} className="w-full rounded border px-2 py-1">
              <option>Lecture</option>
              <option>Group Study</option>
              <option>Coaching</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded border px-2 py-1" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Description</label>
            <input value={desc} onChange={e => setDesc(e.target.value)} className="w-full rounded border px-2 py-1" />
          </div>
          <div>
            <label className="block text-sm mb-1">Date & Time</label>
            <input
              type="datetime-local"
              value={eventDateTime}
              onChange={e => setEventDateTime(e.target.value)}
              className="w-full rounded border px-2 py-1"
              required
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button type="button" className="bg-gray-200 rounded px-3 py-1" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-violet-600 text-white rounded px-3 py-1">{initialData ? "Update" : "Add Event"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
