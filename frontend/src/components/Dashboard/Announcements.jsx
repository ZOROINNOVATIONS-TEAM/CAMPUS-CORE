import React from "react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Library Extended Hours",
      content: "The main library will extend its operating hours during finals week. New hours: 7 AM - 2 AM from June 20-30.",
      author: "Library Services",
      date: "June 5, 2025",
    },
    {
      id: 2,
      title: "Summer Registration Open",
      content: "Registration for summer courses is now open. Please complete your registration by June 20 to secure your spot.",
      author: "Registrar Office",
      date: "June 8, 2025",
    },
    {
      id: 3,
      title: "Important Campus Closure Notice",
      content: "Due to scheduled maintenance, the campus will be closed on Saturday, June 14. All weekend classes will be conducted online.",
      author: "Administration",
      date: "June 10, 2025",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-lg">
            <h3 className="font-bold">{announcement.title}</h3>
            <p className="text-gray-700 mt-1">{announcement.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              {announcement.author} • {announcement.date}
            </p>
            <p className="mt-2 text-blue-600 cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-right text-blue-600 cursor-pointer hover:underline">
        View All
      </p>
    </div>
  );
};

export default Announcements;


