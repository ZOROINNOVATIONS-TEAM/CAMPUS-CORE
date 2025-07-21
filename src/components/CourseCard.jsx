// import React from "react";

// export default function CourseCard({
//   title,
//   code,
//   instructor,
//   time,
//   students,
//   assignments,
//   materials,
//   labReports,
//   status,
//   tags = [],
//   actions = [],
// }) {
//   return (
//     <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 min-w-[270px]">
//       {/* Top Row: Title and Status */}
//       <div className="flex justify-between items-start">
//         <div>
//           <div className="font-semibold text-gray-900">{title}</div>
//           <div className="text-xs text-gray-500">{code}</div>
//         </div>
//         <div className="flex items-center gap-2">
//           {status && (
//             <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded">{status}</span>
//           )}
//           <button className="text-gray-400 hover:text-gray-600">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
//               <circle cx="5" cy="12" r="2" fill="currentColor"/>
//               <circle cx="12" cy="12" r="2" fill="currentColor"/>
//               <circle cx="19" cy="12" r="2" fill="currentColor"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Instructor and Time */}
//       <div className="text-xs text-gray-500 mb-1">
//         {instructor} • {time}
//       </div>
//       {/* Quick Links */}
//       <div className="flex flex-wrap gap-3 mt-2">
//         {materials && (
//           <a href="#" className="text-xs text-blue-600 hover:underline font-medium">Course Materials</a>
//         )}
//         {labReports && (
//           <a href="#" className="text-xs text-blue-600 hover:underline font-medium">Lab Reports</a>
//         )}
//         {assignments && (
//           <a href="#" className="text-xs text-blue-600 hover:underline font-medium">Assignments</a>
//         )}
//       </div>
//       {/* Footer: Students & Tags */}
//       <div className="flex justify-between items-center mt-3">
//         <div className="text-xs text-gray-400">{students} Students Enrolled</div>
//         <div className="flex gap-1">
//           {tags.map((tag, idx) => (
//             <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded">{tag}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function CourseCard({
  title,
  code,
  instructor,
  time,
  students,
  assignments,
  materials,
  labReports,
  status,
  tags = [],
  actions = [],
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex flex-col gap-2 min-w-[270px] max-w-full
      sm:min-w-[320px] sm:max-w-sm
      transition-colors duration-200">
      {/* Top Row: Title and Status */}
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div className="min-w-0">
          <div className="font-semibold text-gray-900 dark:text-gray-100 truncate">{title}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{code}</div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {status && (
            <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs px-2 py-0.5 rounded whitespace-nowrap">
              {status}
            </span>
          )}
          <button className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="5" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="19" cy="12" r="2" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Instructor and Time */}
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 truncate">
        {instructor} &bull; {time}
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-3 mt-2">
        {materials && (
          <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium truncate">
            Course Materials
          </a>
        )}
        {labReports && (
          <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium truncate">
            Lab Reports
          </a>
        )}
        {assignments && (
          <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium truncate">
            Assignments
          </a>
        )}
      </div>

      {/* Footer: Students & Tags */}
      <div className="flex justify-between items-center mt-3 flex-wrap gap-2">
        <div className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
          {students} Students Enrolled
        </div>
        <div className="flex gap-1 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
