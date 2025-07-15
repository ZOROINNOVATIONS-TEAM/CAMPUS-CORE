import React from "react";

export function AnnouncementsCard({ announcements = [] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 sm:p-6 flex flex-col min-h-[220px] w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Announcements</h3>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
          See all
        </button>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {announcements.length === 0 && (
          <div className="text-gray-400 dark:text-gray-500 text-sm text-center mt-8">
            No announcements
          </div>
        )}

        {announcements.map((a, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="text-[15px] font-semibold text-gray-900 dark:text-gray-100">
                  {a.title}
                </div>
                {a.isNew && (
                  <span className="bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 rounded px-2 py-0.5 text-xs font-bold ml-2">
                    NEW
                  </span>
                )}
                {a.timeAgo && (
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded px-2 py-0.5 text-xs font-medium ml-2">
                    {a.timeAgo}
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-line mt-0.5">
                {a.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
