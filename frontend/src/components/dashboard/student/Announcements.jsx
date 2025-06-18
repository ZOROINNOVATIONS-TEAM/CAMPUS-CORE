import React from "react";

const mockAnnouncements = [
  {
    id: 1,
    label: "Important",
    title: "Campus Closure Notice",
    department: "Administration",
    date: "June 10, 2025",
    description:
      "Due to scheduled maintenance, the campus will be closed on Saturday, June 14. All weekend classes will be conducted online.",
  },
  {
    id: 2,
    label: null,
    title: "Summer Registration Open",
    department: "Registrar Office",
    date: "June 8, 2025",
    description:
      "Registration for summer courses is now open. Please complete your registration by June 20 to secure your spot.",
  },
  {
    id: 3,
    label: null,
    title: "Library Extended Hours",
    department: "Library Services",
    date: "June 5, 2025",
    description:
      "The main library will extend its operating hours during finals week. New hours: 7 AM - 2 AM from June 20-30.",
  },
];

export function Announcements() {
  return (
    <section className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-800">Announcements</h2>
        <a href="/announcements" className="text-blue-600 text-xs hover:underline">
          View All
        </a>
      </div>

      <div className="space-y-4">
        {mockAnnouncements.map(({ id, label, title, department, date, description }) => (
          <div key={id} className="border-l-4 border-red-500 pl-4 space-y-1">
            {label && (
              <span className="inline-block bg-red-200 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">
                {label}
              </span>
            )}
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-xs text-gray-500">
              {department} · {date}
            </p>
            <p className="mt-1 text-gray-700 text-sm">{description}</p>
            <a href="/announcements" className="text-blue-600 text-xs mt-1 inline-block hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
