// src/components/CampusMap/MapFilterPanel.jsx
import React from "react";

const MapFilterPanel = () => {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {["Academic Buildings", "Residence Halls", "Dining Facilities", "Sports Facilities"].map((label, i) => (
        <div key={i} className="bg-white px-4 py-2 rounded-lg shadow text-sm font-medium text-gray-700 cursor-pointer hover:bg-blue-100">
          {label}
        </div>
      ))}
    </div>
  );
};

export default MapFilterPanel;
