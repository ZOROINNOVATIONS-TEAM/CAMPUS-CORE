// src/components/dashboard/student/FeedbackManagement.jsx (assumed path)
import React, { useState } from "react";
import { faCommentDots, faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeedbackManagement() {
  // Example data
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, category: "Technical", status: "Resolved", date: "2024-06-10", rating: 4, comments: "Website was slow" },
    { id: 2, category: "General", status: "Pending", date: "2024-06-11", rating: 3, comments: "Need more study rooms" },
    { id: 3, category: "Technical", status: "Open", date: "2024-06-12", rating: 5, comments: "Great support!" },
  ]);

  const [newFeedback, setNewFeedback] = useState({
    category: "",
    rating: 0,
    comments: "",
  });

  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    category: "",
    status: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {
      id: feedbacks.length + 1,
      category: newFeedback.category,
      status: "Open",
      date: new Date().toISOString().split("T")[0],
      rating: newFeedback.rating,
      comments: newFeedback.comments,
    };
    setFeedbacks([...feedbacks, feedback]);
    setNewFeedback({ category: "", rating: 0, comments: "" });
  };

  const handleInputChange = (e) => {
    setNewFeedback({ ...newFeedback, [e.target.name]: e.target.value });
  };

  const filteredFeedbacks = feedbacks.filter((fb) => {
    return (
      (!filters.dateFrom || fb.date >= filters.dateFrom) &&
      (!filters.dateTo || fb.date <= filters.dateTo) &&
      (!filters.category || fb.category === filters.category) &&
      (!filters.status || fb.status === filters.status)
    );
  });

  const categories = ["Technical", "General", "Academic", "Facilities"];
  const statuses = ["Open", "Pending", "Resolved"];

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-gray-200">
        <FontAwesomeIcon icon={faCommentDots} />
        Feedback Management
      </h1>
      <h4 className="mb-12 text-gray-700 dark:text-gray-400"> View and manage your submitted feedback</h4>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-200">
          <FontAwesomeIcon icon={faFilter} />
          Filters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date From</label>
            <input
              type="date"
              name="dateFrom"
              value={filters.dateFrom}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date To</label>
            <input
              type="date"
              name="dateTo"
              value={filters.dateTo}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">All</option>
              {statuses.map((stat) => (
                <option key={stat} value={stat}>{stat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Feedback List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-200">Feedback History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Comments</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
              {filteredFeedbacks.map((fb) => (
                <tr key={fb.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{fb.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{fb.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      fb.status === "Resolved" ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200" :
                      fb.status === "Pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200" :
                      "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200"
                    }`}>
                      {fb.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{fb.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < fb.rating ? "text-yellow-400 dark:text-yellow-300" : "text-gray-300 dark:text-gray-500"}>★</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{fb.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submit New Feedback */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-200">
          <FontAwesomeIcon icon={faPlus} />
          Submit New Feedback
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
              <select
                name="category"
                value={newFeedback.category}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating (1-5)</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                value={newFeedback.rating}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Comments</label>
            <textarea
              name="comments"
              placeholder="Share your thoughts here"
              value={newFeedback.comments}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 text-sm"
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
