import React, { useState } from "react";
import { Star } from "lucide-react";

const dummyFeedback = [
  {
    id: 1,
    category: "Course Content",
    date: "2025-06-20",
    status: "Pending",
    rating: 3,
    comment: "The syllabus could be updated.",
  },
  {
    id: 2,
    category: "Faculty",
    date: "2025-06-15",
    status: "Reviewed",
    rating: 4,
    comment: "Helpful professor!",
  },
  {
    id: 3,
    category: "System Issue",
    date: "2025-06-05",
    status: "Resolved",
    rating: 2,
    comment: "Portal kept crashing.",
  },
];

const categories = ["Course Content", "Faculty", "System Issue", "Campus Facilities"];

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState(dummyFeedback);
  const [filterStatus, setFilterStatus] = useState("All");
  const [form, setForm] = useState({ category: "", rating: 0, comment: "" });

  const handleSubmit = () => {
    if (!form.category || !form.rating || !form.comment) {
      alert("Please fill all fields");
      return;
    }

    const newEntry = {
      id: feedbacks.length + 1,
      category: form.category,
      date: new Date().toISOString().split("T")[0],
      status: "Pending",
      rating: form.rating,
      comment: form.comment,
    };

    setFeedbacks([newEntry, ...feedbacks]);
    setForm({ category: "", rating: 0, comment: "" });
  };

  const filteredFeedback = filterStatus === "All"
    ? feedbacks
    : feedbacks.filter((fb) => fb.status === filterStatus);

  return (
    <section className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Heading */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-800">Feedback Management</h1>
        <p className="text-sm text-gray-500">View and manage your submitted feedback</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <input type="date" className="border rounded px-3 py-2 text-sm" />
        <input type="date" className="border rounded px-3 py-2 text-sm" />
        <select className="border rounded px-3 py-2 text-sm">
          <option>All Categories</option>
          {categories.map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>
        <div className="flex gap-2 flex-wrap">
          {["All", "Pending", "Reviewed", "Resolved"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                filterStatus === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback History */}
      <div className="bg-white shadow-sm rounded-lg p-4 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Feedback History</h2>
        {filteredFeedback.length === 0 ? (
          <p className="text-sm text-gray-500">No feedback found.</p>
        ) : (
          filteredFeedback.map((fb) => (
            <div key={fb.id} className="border-t pt-3 space-y-1">
              <div className="flex justify-between text-sm text-gray-500">
                <span className={`capitalize text-xs font-semibold rounded px-2 py-1 ${
                  fb.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : fb.status === "Reviewed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {fb.status}
                </span>
                <span>{fb.date}</span>
              </div>
              <div className="font-medium text-gray-800">{fb.category}</div>
              <div className="flex items-center text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    fill={s <= fb.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700">{fb.comment}</p>
            </div>
          ))
        )}
      </div>

      {/* Submit New Feedback */}
      <div className="bg-white shadow-sm rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Submit New Feedback</h2>
        <div className="space-y-4">
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="">Select Category</option>
            {categories.map((cat, i) => (
              <option key={i}>{cat}</option>
            ))}
          </select>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={20}
                className={`cursor-pointer ${
                  s <= form.rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill={s <= form.rating ? "currentColor" : "none"}
                onClick={() => setForm({ ...form, rating: s })}
              />
            ))}
          </div>

          <textarea
            placeholder="Please share your feedback here..."
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            className="w-full border rounded px-3 py-2 text-sm h-28 resize-none"
            maxLength={500}
          />

          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </section>
  );
}
