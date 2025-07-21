// // src/pages/NotificationsPage.jsx
// import React from "react";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const notifications = [
//   {
//     id: 1,
//     title: "📘 New Assignment Posted",
//     description: "Data Structures - Due June 25",
//     date: "June 20, 2025",
//   },
//   {
//     id: 2,
//     title: "📝 Test Scheduled",
//     description: "Math Quiz on June 28 at 10:00 AM",
//     date: "June 18, 2025",
//   },
//   {
//     id: 3,
//     title: "📊 Result Published",
//     description: "Physics Midterm results are available now.",
//     date: "June 17, 2025",
//   },
// ];

// export default function NotificationPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-4">
//       {/* Top Bar */}
//       <div className="flex items-center gap-3 mb-6">
//         <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-black">
//           <ArrowLeft size={20} />
//         </button>
//         <h1 className="text-xl font-bold">Notifications</h1>
//       </div>

//       {/* Notification List */}
//       <div className="bg-white rounded-xl shadow-md divide-y border">
//         {notifications.length === 0 ? (
//           <div className="p-6 text-gray-500 text-center">No notifications yet.</div>
//         ) : (
//           notifications.map((item) => (
//             <div key={item.id} className="p-4 hover:bg-gray-50 transition-all">
//               <div className="font-semibold text-blue-700">{item.title}</div>
//               <div className="text-sm text-gray-700">{item.description}</div>
//               <div className="text-xs text-gray-400 mt-1">{item.date}</div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
// src/pages/NotificationsPage.jsx
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const notifications = [
  {
    id: 1,
    title: "📘 New Assignment Posted",
    description: "Data Structures - Due June 25",
    date: "June 20, 2025",
  },
  {
    id: 2,
    title: "📝 Test Scheduled",
    description: "Math Quiz on June 28 at 10:00 AM",
    date: "June 18, 2025",
  },
  {
    id: 3,
    title: "📊 Result Published",
    description: "Physics Midterm results are available now.",
    date: "June 17, 2025",
  },
];

export default function NotificationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 py-4 transition-colors duration-200">
      {/* Top Bar */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Notifications</h1>
      </div>

      {/* Notification List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md divide-y border border-gray-200 dark:border-gray-700 transition-colors duration-200">
        {notifications.length === 0 ? (
          <div className="p-6 text-gray-500 dark:text-gray-400 text-center">
            No notifications yet.
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              <div className="font-semibold text-blue-700 dark:text-blue-400 break-words">
                {item.title}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200 break-words">
                {item.description}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                {item.date}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

