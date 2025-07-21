import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Feedback = ({ feedbacks }) => {
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const filteredFeedbacks = statusFilter === "All"
        ? feedbacks
        : feedbacks.filter((f) => f.status === statusFilter);

    const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredFeedbacks.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="max-w-7xl  mx-auto px-4 py-6 space-y-6">
            <div className="bg-white dark:bg-gray-800 dark:text-gray-100 p-10 rounded-xl shadow space-y-4 border dark:border-violet-700">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-2 items-center">
                        <input type="date" className="border dark:border-gray-700 dark:bg-gray-800 px-3 py-1 rounded text-sm" />
                        <span>to</span>
                        <input type="date" className="border dark:border-gray-700 dark:bg-gray-800 px-3 py-1 rounded text-sm" />
                        <select className="border dark:border-gray-700 dark:bg-gray-800 px-3 py-1 rounded text-sm">
                            <option>All Categories</option>
                            <option>Course Content</option>
                            <option>Faculty</option>
                            <option>System Issue</option>
                            <option>Campus Facilities</option>
                        </select>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {["All", "Pending", "Reviewed", "Resolved"].map((status) => (
                            <button
                                key={status}
                                onClick={() => {
                                    setStatusFilter(status);
                                    setCurrentPage(1);
                                }}
                                className={`px-3 py-1 rounded text-sm ${statusFilter === status
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                        <button className="px-4 py-1 rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 dark:text-gray-100 p-4 rounded-xl shadow space-y-4">
                <h3 className="text-lg font-semibold">Feedback History</h3>
                {currentItems.map((fb, i) => (
                    <div key={i} className="border dark:border-gray-700 rounded-lg p-3 flex justify-between items-start">
                        <div>
                            <span className={`text-xs px-2 py-1 rounded-full font-semibold ${fb.status === "Pending"
                                ? "bg-yellow-100 text-yellow-600"
                                : fb.status === "Resolved"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-blue-100 text-blue-600"
                                }`}>{fb.status}</span>
                            <p className="text-sm mt-1">{fb.category}</p>
                            <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, idx) => (
                                    <FaStar
                                        key={idx}
                                        className={`h-4 w-4 ${idx < fb.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Submitted on {fb.date}</p>
                        </div>
                    </div>
                ))}

                <div className="flex justify-end space-x-2 pt-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`w-8 h-8 rounded ${currentPage === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white"}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        &gt;
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 dark:text-gray-100 p-10 rounded-xl shadow space-y-4">
                <h3 className="text-lg font-semibold">Submit New Feedback</h3>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border dark:border-gray-700 dark:bg-gray-800 px-3 py-2 rounded w-full text-sm"
                >
                    <option>Select category</option>
                    <option>Course Content</option>
                    <option>Faculty</option>
                    <option>System Issue</option>
                    <option>Campus Facilities</option>
                </select>

                <div className="flex items-center gap-2">
                    <span className="text-sm">Rating</span>
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            size={20}
                            className={`cursor-pointer ${(hover || rating) > i ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                            onClick={() => setRating(i + 1)}
                            onMouseEnter={() => setHover(i + 1)}
                            onMouseLeave={() => setHover(null)}
                        />
                    ))}
                </div>

                <textarea
                    rows="4"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Please share your feedback here..."
                    className="w-full border dark:border-gray-700 dark:bg-gray-800 px-3 py-2 rounded text-sm resize-none"
                    maxLength={500}
                />
                <div className="text-sm text-right text-gray-500">{comment.length}/500</div>
                <div className="text-sm text-right">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                        Submit Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
