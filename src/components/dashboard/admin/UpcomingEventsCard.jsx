import React from "react";

const UpcomingEventsCard = () => {
  const events = [
    { title: "Faculty Meeting", date: "June 15, 2025", time: "10:00 AM - 12:00 PM" },
    { title: "Student Orientation", date: "June 16, 2025", time: "09:00 AM - 11:00 AM" },
    { title: "Campus Maintenance", date: "June 17, 2025", time: "02:00 PM - 04:00 PM" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md p-4 rounded-lg transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Upcoming Events</h3>
        <button className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 text-sm transition">
          View All
        </button>
      </div>
      <ul className="space-y-3">
        {events.map((event, index) => (
          <li key={index}>
            <p className="font-medium">{event.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">{event.date}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">{event.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEventsCard;
