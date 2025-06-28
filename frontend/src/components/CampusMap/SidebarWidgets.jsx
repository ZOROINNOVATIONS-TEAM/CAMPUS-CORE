// src/components/CampusMap/SidebarWidgets.jsx
import React from "react";

const SidebarWidgets = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2 text-sm">Your Recent Locations</h3>
        <ul className="text-sm text-gray-600">
          <li>Computer Lab – 9:00 AM</li>
          <li>Campus Café – 10:45 AM</li>
          <li>Library Room 204 – 1:30 PM</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2 text-sm">Upcoming Classes</h3>
        <ul className="text-sm text-gray-600">
          <li>Advanced Algorithms – 11:00 AM</li>
          <li>Chemistry Lab – 2:30 PM</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2 text-sm">Campus Events Today</h3>
        <ul className="text-sm text-gray-600">
          <li>Career Fair – 10:00 AM</li>
          <li>Student Music Fest – 7:00 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarWidgets;
