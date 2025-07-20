import React from "react";

const AnnouncementsPanel = () => {
  const announcements = [
    {
      title: "Campus Closure Notice",
      content: "Due to scheduled maintenance, the campus will be closed on June 15, 2023.",
      date: "June 10, 2023",
    },
    {
      title: "Summer Registration Open",
      content: "Registration for summer courses is now open. Please complete your registration by June 30.",
      date: "June 8, 2023",
    },
    {
      title: "Library Extended Hours",
      content: "The main library will extend its operating hours during the week.",
      date: "June 10, 2023",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow rounded-lg p-6 transition-colors">
      <h2 className="text-lg font-semibold mb-4">Announcements</h2>
      <ul className="space-y-3">
        {announcements.map((ann, i) => (
          <li
            key={i}
            className={`p-3 rounded transition-colors ${
              i === 0
                ? "bg-red-100 dark:bg-red-900"
                : "bg-white dark:bg-gray-700"
            }`}
          >
            <h3 className="font-medium">{ann.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {ann.content}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Date: {ann.date}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AnnouncementsPanel;
