import React from "react";

const categories = [
  { label: "Academic Buildings", count: 12, color: "bg-blue-100 text-blue-700" },
  { label: "Residence Halls", count: 8, color: "bg-green-100 text-green-700" },
  { label: "Dining Facilities", count: 5, color: "bg-yellow-100 text-yellow-700" },
  { label: "Sports Facilities", count: 6, color: "bg-purple-100 text-purple-700" },
];

export default function MapCategoryCards() {
  return (
    <div className="flex gap-4">
      {categories.map((cat) => (
        <div key={cat.label} className={`flex-1 rounded-lg shadow p-4 ${cat.color}`}>
          <div className="font-semibold">{cat.label}</div>
          <div className="text-2xl font-bold">{cat.count} buildings</div>
        </div>
      ))}
    </div>
  );
}
