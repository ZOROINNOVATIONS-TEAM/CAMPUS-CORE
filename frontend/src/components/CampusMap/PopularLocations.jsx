// src/components/CampusMap/PopularLocations.jsx
import React from "react";
import LocationCard from "./LocationCard";

const locations = [
  { name: "Science Building", distance: "5 min walk" },
  { name: "Main Library", distance: "8 min walk" },
  { name: "Student Center", distance: "7 min walk" },
  { name: "Recreation Center", distance: "12 min walk" },
  { name: "Engineering Hall", distance: "6 min walk" },
];

const PopularLocations = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Popular Locations</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc, i) => (
          <LocationCard key={i} {...loc} />
        ))}
      </div>
    </div>
  );
};

export default PopularLocations;
