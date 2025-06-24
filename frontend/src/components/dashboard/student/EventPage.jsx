import React from "react";

export default function EventPage({ isDark }) {
  return (
    <div className={`p-6 rounded-xl shadow-lg ${isDark ? "bg-gray-800/70 backdrop-blur-lg border-gray-700/20" : "bg-white/70 backdrop-blur-lg border-white/20"} border`}>
      <h2 className="text-xl font-semibold mb-4">Events</h2>
      <p>View upcoming events, register, and check your schedule.</p>
    </div>
  );
}
