// import React from "react";

// export default function Feedback() {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6 font-sans">
      
//       <div className="bg-white rounded-lg shadow p-6 mt-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold">Feedback Management</h3>
//           <button className="text-sm text-blue-600">Back to Dashboard</button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//           <div>
//             <label className="block text-sm mb-1">Date Range</label>
//             <input type="date" className="w-full border rounded px-3 py-1" />
//           </div>
//           <div>
//             <label className="block text-sm mb-1">To</label>
//             <input type="date" className="w-full border rounded px-3 py-1" />
//           </div>
//           <div>
//             <label className="block text-sm mb-1">Category</label>
//             <select className="w-full border rounded px-3 py-1">
//               <option>All Categories</option>
//               <option>Course Content</option>
//               <option>Faculty</option>
//               <option>System</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm mb-1">Status</label>
//             <div className="flex gap-2">
//               <button className="border px-3 py-1 rounded bg-blue-500 text-white">All</button>
//               <button className="border px-3 py-1 rounded text-blue-500">Pending</button>
//               <button className="border px-3 py-1 rounded text-blue-500">Resolved</button>
//             </div>
//           </div>
//         </div>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply Filters</button>
//       </div>

//       {/* Feedback History */}
//       <div className="bg-white mt-6 rounded-lg shadow p-6">
//         <h4 className="text-lg font-semibold mb-4">Feedback History</h4>

//         {[
//           { category: "Course Content", rating: 4, date: "June 20, 2025", status: "Resolved" },
//           { category: "Faculty", rating: 5, date: "June 14, 2025", status: "Resolved" },
//           { category: "System", rating: 3, date: "June 10, 2025", status: "Pending" },
//         ].map((feedback, idx) => (
//           <div key={idx} className="border-b pb-4 mb-4">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h5 className="font-medium">{feedback.category}</h5>
//                 <p className="text-sm text-gray-500">Submitted on {feedback.date}</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-sm">Rating: {"⭐".repeat(feedback.rating)}</p>
//                 <span
//                   className={`text-xs px-2 py-1 rounded-full ${
//                     feedback.status === "Resolved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
//                   }`}
//                 >
//                   {feedback.status}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Pagination */}
//         <div className="flex justify-between items-center mt-4 text-sm">
//           <p>Showing 1 to 3 of 3 entries</p>
//           <div className="flex gap-2">
//             <button className="px-3 py-1 border rounded">1</button>
//             <button className="px-3 py-1 border rounded">2</button>
//           </div>
//         </div>
//       </div>

//       {/* Submit Feedback Form */}
//       <div className="bg-white mt-6 rounded-lg shadow p-6">
//         <h4 className="text-lg font-semibold mb-4">Submit New Feedback</h4>
//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm mb-1">Feedback Category</label>
//             <select className="w-full border rounded px-3 py-2">
//               <option>Select category</option>
//               <option>Course Content</option>
//               <option>Faculty</option>
//               <option>System</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm mb-1">Rating</label>
//             <select className="w-full border rounded px-3 py-2">
//               <option>Select rating</option>
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <option key={num}>{num} Star</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm mb-1">Comments</label>
//             <textarea className="w-full border rounded px-3 py-2" rows="3" placeholder="Please share your feedback here..." />
//           </div>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded">Submit Feedback</button>
//         </form>
//       </div>

//       {/* Footer */}
//       <div className="text-center text-sm text-gray-500 mt-6">
//         <p>Designed and Developed by ZoroTeam © 2025 ZoroInnovations</p>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Feedback() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-2 sm:p-6 font-sans transition-colors duration-200">
      
      {/* Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 mt-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <h3 className="text-lg font-semibold dark:text-gray-100">Feedback Management</h3>
          <button className="text-sm text-blue-600 dark:text-blue-400">Back to Dashboard</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1 dark:text-gray-200">Date Range</label>
            <input
              type="date"
              className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 dark:text-gray-200">To</label>
            <input
              type="date"
              className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 dark:text-gray-200">Category</label>
            <select className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100">
              <option>All Categories</option>
              <option>Course Content</option>
              <option>Faculty</option>
              <option>System</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 dark:text-gray-200">Status</label>
            <div className="flex gap-2">
              <button className="border border-blue-500 bg-blue-500 text-white px-3 py-1 rounded dark:bg-blue-600 dark:border-blue-600">All</button>
              <button className="border border-blue-500 text-blue-500 dark:text-blue-400 px-3 py-1 rounded bg-white dark:bg-gray-800">Pending</button>
              <button className="border border-blue-500 text-blue-500 dark:text-blue-400 px-3 py-1 rounded bg-white dark:bg-gray-800">Resolved</button>
            </div>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded transition">
          Apply Filters
        </button>
      </div>

      {/* Feedback History */}
      <div className="bg-white dark:bg-gray-800 mt-6 rounded-lg shadow p-4 sm:p-6">
        <h4 className="text-lg font-semibold mb-4 dark:text-gray-100">Feedback History</h4>
        {[
          { category: "Course Content", rating: 4, date: "June 20, 2025", status: "Resolved" },
          { category: "Faculty", rating: 5, date: "June 14, 2025", status: "Resolved" },
          { category: "System", rating: 3, date: "June 10, 2025", status: "Pending" },
        ].map((feedback, idx) => (
          <div key={idx} className="border-b dark:border-gray-700 pb-4 mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h5 className="font-medium dark:text-gray-100">{feedback.category}</h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">Submitted on {feedback.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-yellow-500 dark:text-yellow-300 whitespace-nowrap">
                  Rating: {"⭐".repeat(feedback.rating)}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    feedback.status === "Resolved"
                      ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
                  }`}
                >
                  {feedback.status}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm gap-3">
          <p className="text-gray-500 dark:text-gray-400">Showing 1 to 3 of 3 entries</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100">1</button>
            <button className="px-3 py-1 border dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100">2</button>
          </div>
        </div>
      </div>

      {/* Submit Feedback Form */}
      <div className="bg-white dark:bg-gray-800 mt-6 rounded-lg shadow p-4 sm:p-6">
        <h4 className="text-lg font-semibold mb-4 dark:text-gray-100">Submit New Feedback</h4>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1 dark:text-gray-200">Feedback Category</label>
            <select className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100">
              <option>Select category</option>
              <option>Course Content</option>
              <option>Faculty</option>
              <option>System</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 dark:text-gray-200">Rating</label>
            <select className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100">
              <option>Select rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num}>{num} Star</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 dark:text-gray-200">Comments</label>
            <textarea
              className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100"
              rows="3"
              placeholder="Please share your feedback here..."
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-2 rounded transition">
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Footer
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        <p>Designed and Developed by ZoroTeam © 2025 ZoroInnovations</p>
      </div> */}
    </div>
  );
}
