// src/components/faculty/UpcomingEventsList.jsx (assumed path)
import React from "react";

const UpcomingEventsList = () => {
  const events = [
    { title: "Available Science Assignment", date: "June 10, 2023 - Tuesday, Sunday", time: "10:00 AM - 12:00 PM" },
    { title: "Technology Seminar", date: "June 12, 2023 - Thursday", time: "2:00 PM - 4:00 PM" },
    { title: "Design Workshop", date: "June 15, 2023 - Saturday", time: "8:00 AM - 12:00 PM" },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">Upcoming Events</h2>
      <ul className="space-y-3">
        {events.map((event, i) => (
          <li key={i} className={`${i % 2 === 0 ? "bg-orange-100 dark:bg-orange-800" : "bg-green-100 dark:bg-green-800"} p-3 rounded`}>
            <h3 className="font-medium text-gray-900 dark:text-gray-200">{event.title}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">{event.date}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{event.time}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEventsList;
