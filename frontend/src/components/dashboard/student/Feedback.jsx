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
    if (!form.category || !form.rating || !form.comment) return;

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
    <section className="p-4 sm:p-6 max-w-5xl mx-auto space-y-8">
      {/* Heading */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Feedback Management</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">View and manage your submitted feedback</p>
      </div>

      {/* Filter Panel */}
      <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Filter Feedback</h2>
        <div className="grid sm:grid-cols-4 gap-4 items-center">
          <input type="date" className="border rounded px-3 py-2 text-sm w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          <input type="date" className="border rounded px-3 py-2 text-sm w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          <select className="border rounded px-3 py-2 text-sm w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option>All Categories</option>
            {categories.map((cat, i) => (
              <option key={i}>{cat}</option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2">
            {["All", "Pending", "Reviewed", "Resolved"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1 rounded-full text-sm transition font-medium ${
                  filterStatus === status
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback History */}
      <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Feedback History</h2>
        {filteredFeedback.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-300">😶 No feedback found.</p>
        ) : (
          filteredFeedback.map((fb) => (
            <div
              key={fb.id}
              className="border-t pt-4 space-y-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded px-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-300 gap-2">
                <span className={`capitalize text-xs font-semibold rounded-full px-3 py-0.5 border
                  ${fb.status === "Pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-100/10 dark:text-yellow-400 dark:border-yellow-500/30"
                    : fb.status === "Reviewed" ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-100/10 dark:text-blue-400 dark:border-blue-500/30"
                    : "bg-green-50 text-green-700 border-green-200 dark:bg-green-100/10 dark:text-green-400 dark:border-green-500/30"}`}>
                  {fb.status}
                </span>
                <span>{fb.date}</span>
              </div>
              <div className="font-medium text-gray-800 dark:text-gray-100">{fb.category}</div>
              <div className="flex items-center text-yellow-500 gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={20}
                    fill={s <= fb.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{fb.comment}</p>
            </div>
          ))
        )}
      </section>

      {/* Submit Feedback */}
      <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Submit New Feedback</h2>
        <div className="space-y-4">
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border rounded px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                className={`cursor-pointer transition ${
                  s <= form.rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-500"
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
            className="w-full border rounded px-3 py-2 text-sm h-28 resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            maxLength={500}
          />

          <button
            disabled={!form.category || !form.rating || !form.comment}
            onClick={handleSubmit}
            className={`w-full sm:w-auto px-6 py-2 rounded font-semibold transition flex items-center justify-center gap-2
              ${!form.category || !form.rating || !form.comment
                ? "bg-gray-300 cursor-not-allowed text-white dark:bg-gray-600"
                : "bg-blue-600 hover:bg-blue-700 text-white"}`}
          >
            Submit Feedback
          </button>
        </div>
      </section>
    </section>
  );
}
