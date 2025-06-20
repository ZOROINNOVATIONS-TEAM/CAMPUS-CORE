import React, { useState } from "react";

const Announcements = () => {
  const [showAll, setShowAll] = useState(false);
  const announcements = [
    { id: 1, title: "Library Hours Extended", content: "Library will be open until 10 PM this week.", date: "June 14", author: "Admin" },
    { id: 2, title: "Summer Registration Open", content: "Register now for summer courses.", date: "June 12", author: "Admin" },
    { id: 3, title: "Campus Closure", content: "Campus will be closed on June 20 for maintenance.", date: "June 10", author: "Admin" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Announcements</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 hover:underline"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <div className="space-y-4">
        {announcements.slice(0, showAll ? announcements.length : 2).map((announcement) => (
          <div key={announcement.id} className="p-3 hover:bg-gray-50 rounded-lg">
            <h3 className="font-bold">{announcement.title}</h3>
            <p className="text-sm text-gray-600">{announcement.content}</p>
            <p className="text-xs text-gray-500 mt-1">{announcement.author} • {announcement.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;

