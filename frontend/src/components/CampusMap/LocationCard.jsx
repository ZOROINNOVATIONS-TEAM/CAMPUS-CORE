// src/components/CampusMap/LocationCard.jsx
import React from "react";

const LocationCard = ({ name, distance }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-sm">
      <h3 className="font-medium">{name}</h3>
      <p className="text-gray-500">{distance}</p>
      <button className="mt-2 text-blue-600 text-xs underline">Get Directions</button>
    </div>
  );
};

export default LocationCard;
