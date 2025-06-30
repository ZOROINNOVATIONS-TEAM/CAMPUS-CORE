import React from "react";

export function Mentoring({ isDark }) {
  return (
    <div className={`p-6 rounded-xl shadow-lg ${isDark ? "bg-gray-800/70 backdrop-blur-lg border-gray-700/20" : "bg-white/70 backdrop-blur-lg border-white/20"} border`}>
      <h2 className="text-xl font-semibold mb-4">Mentoring</h2>
      <p>Connect with your mentor, schedule meetings, and get guidance.</p>
    </div>
  );
}
