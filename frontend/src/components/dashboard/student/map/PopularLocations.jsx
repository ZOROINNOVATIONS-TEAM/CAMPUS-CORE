import { FaUniversity, FaBook, FaUtensils, FaDumbbell, FaBuilding } from "react-icons/fa";

const locations = [
  {
    name: "Science Building",
    type: "Academic Building",
    icon: <FaUniversity className="text-blue-500" size={28} />,
    color: "bg-blue-50",
    time: "5 min walk",
  },
  {
    name: "Main Library",
    type: "Study Space",
    icon: <FaBook className="text-green-500" size={28} />,
    color: "bg-green-50",
    time: "8 min walk",
  },
  {
    name: "Student Center",
    type: "Dining Hall",
    icon: <FaUtensils className="text-yellow-500" size={28} />,
    color: "bg-yellow-50",
    time: "3 min walk",
  },
  {
    name: "Recreation Center",
    type: "Sports Facility",
    icon: <FaDumbbell className="text-purple-500" size={28} />,
    color: "bg-purple-50",
    time: "12 min walk",
  },
  {
    name: "Engineering Hall",
    type: "Academic Building",
    icon: <FaBuilding className="text-red-500" size={28} />,
    color: "bg-red-50",
    time: "7 min walk",
  },
];

export default function PopularLocations() {
  return (
    <div>
      <div className="flex justify-between items-center mt-8 mb-4">
        <h2 className="text-2xl font-bold">Popular Locations</h2>
        <button className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-semibold shadow">
          View All
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {locations.map((loc, i) => (
          <div key={i} className={`flex flex-col justify-between w-60 rounded-xl shadow ${loc.color} p-4`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full bg-white p-2 shadow">{loc.icon}</div>
              <div>
                <div className="font-semibold text-lg">{loc.name}</div>
                <div className="text-gray-500 text-sm">{loc.type}</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-600 flex items-center gap-1">
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l9-7-9-7-9 7 9 7z" /></svg>
                {loc.time}
              </span>
              <a href="#" className="text-blue-500 font-medium hover:underline">Get Directions</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


