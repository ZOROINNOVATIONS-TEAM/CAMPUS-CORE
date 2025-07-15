import React from "react";
import { Calendar } from "lucide-react";

const defaultEvents = [
  {
    month: "JUN",
    day: 15,
    title: "Faculty Development Workshop",
    time: "09:00 AM",
    location: "Main Auditorium",
  },
  {
    month: "JUN",
    day: 18,
    title: "Student Orientation Day",
    time: "10:30 AM",
    location: "Conference Hall",
  },
  {
    month: "JUN",
    day: 20,
    title: "Board Meeting",
    time: "02:00 PM",
    location: "Meeting Room A",
  },
];

export function UpcomingEventsCard({ events = defaultEvents }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 sm:p-6 flex flex-col h-full min-h-[220px] relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Upcoming Events
        </h3>
        <Calendar className="w-5 h-5 text-gray-400 dark:text-gray-500" />
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {events.length === 0 && (
          <div className="text-gray-400 dark:text-gray-500 text-sm text-center mt-8">
            No upcoming events
          </div>
        )}

        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-b last:border-b-0 border-gray-100 dark:border-gray-700 pb-4 last:pb-0"
          >
            {/* Date box */}
            <div className="flex flex-col items-center justify-center min-w-[44px] w-11 px-1 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-[11px] font-bold text-gray-400 dark:text-gray-300 uppercase leading-none">
                {event.month}
              </span>
              <span className="text-xl font-extrabold text-gray-900 dark:text-white leading-none">
                {event.day}
              </span>
            </div>
            {/* Event info */}
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-gray-900 dark:text-white truncate">
                {event.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {event.time} &mdash; {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
