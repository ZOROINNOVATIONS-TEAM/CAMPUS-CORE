import { useState } from "react";

export default function EventAddModal({ date, onAdd, onClose }) {
  const [type, setType] = useState("Lecture");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    onAdd({
      type,
      title,
      description: desc,
      date: date || new Date(),
    });
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 className="font-semibold text-lg mb-3">Add New Event</h3>
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
          <div className="flex gap-2">
            <button type="button" className="bg-gray-200 rounded px-3 py-1" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-violet-600 text-white rounded px-3 py-1">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}
