import React from "react";

export function AnnouncementsCard({ announcements = [] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 flex flex-col min-h-[220px] w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800">Announcements</h3>
        <button className="text-sm text-blue-600 hover:underline font-medium">See all</button>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        {announcements.length === 0 && (
          <div className="text-gray-400 text-sm text-center mt-8">No announcements</div>
        )}
        {announcements.map((a, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="text-[15px] font-semibold text-gray-900">{a.title}</div>
                {a.isNew && (
                  <span className="bg-red-100 text-red-500 rounded px-2 py-0.5 text-xs font-bold ml-2">NEW</span>
                )}
                {a.timeAgo && (
                  <span className="bg-gray-100 text-gray-500 rounded px-2 py-0.5 text-xs font-medium ml-2">{a.timeAgo}</span>
                )}
              </div>
              <div className="text-xs text-gray-600 whitespace-pre-line mt-0.5">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Example usage:
AnnouncementsCard.defaultProps = {
  announcements: [
    {
      title: "Faculty Senate Meeting",
      desc: "The monthly faculty senate meeting has been rescheduled to June 20th at 3:00 PM in the Main Conference Hall. Please adjust your calendars accordingly.",
      isNew: true,
    },
    {
      title: "Summer Registration Open",
      desc: "Summer course registration is now open for all faculty. Please submit your teaching preferences by June 25th to the department coordinator.",
      timeAgo: "2d ago",
    },
  ],
};
