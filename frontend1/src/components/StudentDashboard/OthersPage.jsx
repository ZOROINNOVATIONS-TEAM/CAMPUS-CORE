import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaRegBuilding,
  FaHome,
  FaUtensils,
  FaFutbol,
  FaMapMarkerAlt,
  FaWalking,
  FaSearch,
  FaRegClock,
  FaDownload,
} from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

// Dummy map image (use real map or react-leaflet for production)
const MAP_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_Cambridge_University_faculty_sites.png/640px-Map_of_Cambridge_University_faculty_sites.png";

const layersList = [
  { label: "Academic Buildings", color: "bg-blue-500", key: "academic" },
  { label: "Residence Halls", color: "bg-green-400", key: "residence" },
  { label: "Dining Facilities", color: "bg-yellow-300", key: "dining" },
  { label: "Sports Facilities", color: "bg-purple-400", key: "sports" },
  { label: "Parking Lots", color: "bg-red-400", key: "parking" },
  { label: "Bus Stops", color: "bg-gray-400", key: "bus" },
];

const displayOptionsList = [
  { label: "Show Walking Paths", key: "walkingPaths" },
  { label: "Show Building Names", key: "buildingNames" },
  { label: "Show Accessibility Routes", key: "accessibility" },
  { label: "3D Building View", key: "threeD" },
];

// Top stat cards
const statCards = [
  {
    title: "Academic Buildings",
    value: "12 buildings",
    icon: <FaRegBuilding className="text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    title: "Residence Halls",
    value: "8 buildings",
    icon: <FaHome className="text-green-600" />,
    color: "bg-green-100",
  },
  {
    title: "Dining Facilities",
    value: "5 locations",
    icon: <FaUtensils className="text-yellow-600" />,
    color: "bg-yellow-100",
  },
  {
    title: "Sports Facilities",
    value: "4 locations",
    icon: <FaFutbol className="text-purple-600" />,
    color: "bg-purple-100",
  },
];

// Popular locations
const locations = [
  {
    name: "Science Building",
    type: "Academic Building",
    color: "bg-blue-100 text-blue-700",
    icon: <FaRegBuilding />,
    walk: "5 min walk",
    directions: "#",
  },
  {
    name: "Main Library",
    type: "Study Space",
    color: "bg-green-100 text-green-700",
    icon: <MdLibraryBooks />,
    walk: "8 min walk",
    directions: "#",
  },
  {
    name: "Student Center",
    type: "Dining Hall",
    color: "bg-yellow-100 text-yellow-700",
    icon: <FaUtensils />,
    walk: "3 min walk",
    directions: "#",
  },
  {
    name: "Recreation Center",
    type: "Sports Facility",
    color: "bg-purple-100 text-purple-700",
    icon: <FaFutbol />,
    walk: "12 min walk",
    directions: "#",
  },
  {
    name: "Engineering Hall",
    type: "Academic Building",
    color: "bg-red-100 text-red-700",
    icon: <FaRegBuilding />,
    walk: "7 min walk",
    directions: "#",
  },
];

// Lower cards
const recentLocations = [
  {
    title: "Computer Science Lab",
    time: "Today, 9:30 AM",
    room: "",
  },
  {
    title: "Campus Café",
    time: "Yesterday, 1:15 PM",
    room: "",
  },
  {
    title: "Study Room 204",
    time: "Jan 15, 2025",
    room: "",
  },
];

const upcomingClasses = [
  {
    title: "Advanced Algorithms",
    time: "11:00 AM",
    room: "",
  },
  {
    title: "Chemistry Lab",
    time: "2:30 PM",
    room: "Chemistry Building, Lab 4",
  },
  {
    title: "Business Ethics",
    time: "4:15 PM",
    room: "Business Building, Room 105",
  },
];

const campusEvents = [
  {
    title: "Career Fair",
    location: "Student Center, Main Hall",
    time: "10:00 AM",
  },
  {
    title: "Concert: Jazz Ensemble",
    location: "Arts Building, Auditorium",
    time: "2:00 PM",
  },
  {
    title: "Student Club Fair",
    location: "Campus Quad",
    time: "3:00 PM",
  },
];

export default function OthersPage() {
  const [displayOptions, setDisplayOptions] = useState({
    walkingPaths: true,
    buildingNames: true,
    accessibility: false,
    threeD: false,
  });

  return (
    <div className="min-h-screen bg-[#F5F6FA] px-4 py-6 flex flex-col">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
        <div>
          <h2 className="text-lg font-semibold">Campus Map</h2>
          <p className="text-gray-500 text-sm mt-1">
            Find your way around campus buildings and facilities
          </p>
        </div>
        <button className="bg-[#5B8DF6] hover:bg-[#3666F6] text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow font-medium self-start md:self-auto transition">
          <FaDownload />
          Download Map
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 p-4 rounded-lg shadow-sm ${card.color}`}
          >
            <span className="text-xl p-2 rounded-lg">{card.icon}</span>
            <div>
              <div className="font-semibold text-sm">{card.title}</div>
              <div className="text-gray-500 text-xs">{card.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Map & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Map Card */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-4 flex flex-col gap-3">
          {/* Search Bar */}
          <div className="flex items-center gap-2 mb-2">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                className="pl-10 pr-4 py-2 rounded-md border border-gray-200 w-full text-sm focus:ring-[#3666F6] focus:border-[#3666F6]"
                placeholder="Search for buildings, rooms, or facilities..."
              />
            </div>
            <select className="bg-gray-100 border border-gray-200 rounded-md px-2 py-2 text-sm font-medium">
              <option>Building Type</option>
              <option>Academic Building</option>
              <option>Residence Hall</option>
              <option>Dining Facility</option>
              <option>Sports Facility</option>
            </select>
            <select className="bg-gray-100 border border-gray-200 rounded-md px-2 py-2 text-sm font-medium">
              <option>Floor Level</option>
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
            </select>
          </div>
          {/* Map Image (replace with real map for production) */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden border">
            <img
              src={MAP_IMAGE}
              alt="Campus Map"
              className="absolute w-full h-full object-cover"
            />
            {/* Example markers (simulate) */}
            <span className="absolute left-1/4 top-1/3 text-blue-600 text-2xl">
              <FaMapMarkerAlt />
            </span>
            <span className="absolute left-1/2 top-2/3 text-green-600 text-2xl">
              <FaMapMarkerAlt />
            </span>
            <span className="absolute left-[70%] top-1/4 text-yellow-500 text-2xl">
              <FaMapMarkerAlt />
            </span>
            <span className="absolute left-[60%] top-3/4 text-purple-500 text-2xl">
              <FaMapMarkerAlt />
            </span>
            {/* Map controls (simulate) */}
            <div className="absolute right-3 top-3 bg-white rounded shadow flex flex-col">
              <button className="p-1 hover:bg-gray-100">+</button>
              <button className="p-1 hover:bg-gray-100">-</button>
            </div>
          </div>
        </div>

        {/* Map Layers / Display Options */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="font-semibold text-base mb-3">Map Layers</div>
          <ul className="flex flex-col gap-2 mb-4">
            {layersList.map((layer) => (
              <li key={layer.key} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full inline-block ${layer.color}`} />
                <span className="text-gray-700 text-sm">{layer.label}</span>
              </li>
            ))}
          </ul>
          <div className="font-semibold text-base mb-3">Display Options</div>
          <div className="flex flex-col gap-2">
            {displayOptionsList.map((option) => (
              <label key={option.key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={displayOptions[option.key]}
                  onChange={(e) =>
                    setDisplayOptions((prev) => ({
                      ...prev,
                      [option.key]: e.target.checked,
                    }))
                  }
                  className="w-5 h-5 rounded border"
                />
                <span className="text-gray-700 text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Locations */}
      <div className="flex items-center justify-between mb-2 mt-8">
        <div className="text-lg font-semibold">Popular Locations</div>
        <button className="flex items-center gap-1 text-[#3666F6] font-medium text-sm hover:underline">
          View All <IoIosArrowForward />
        </button>
      </div>
      <div className="flex flex-wrap gap-3 mb-6">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 p-3 rounded-lg shadow-sm bg-white min-w-[200px]`}
          >
            <span
              className={`text-xl w-10 h-10 flex items-center justify-center rounded-lg ${loc.color}`}
            >
              {loc.icon}
            </span>
            <div>
              <div className="font-semibold text-sm">{loc.name}</div>
              <div className="text-xs text-gray-400">{loc.type}</div>
              <div className="flex gap-2 items-center mt-1">
                <FaRegClock className="text-gray-400" />
                <span className="text-xs">{loc.walk}</span>
                <a
                  href={loc.directions}
                  className="text-[#3666F6] text-xs font-medium hover:underline ml-2"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lower Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {/* Recent Locations */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="font-semibold text-base mb-3">Your Recent Locations</div>
          <ul className="flex flex-col gap-3">
            {recentLocations.map((item, idx) => (
              <li className="flex items-center gap-3" key={idx}>
                <FaSearch className="text-blue-400" />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Upcoming Classes */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="font-semibold text-base mb-3">Upcoming Classes</div>
          <ul className="flex flex-col gap-3">
            {upcomingClasses.map((item, idx) => (
              <li className="flex items-center gap-3" key={idx}>
                <FaChalkboardTeacher className="text-green-400" />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400">
                    {item.time}
                    {item.room ? ` · ${item.room}` : ""}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Campus Events */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="font-semibold text-base mb-3">Campus Events Today</div>
          <ul className="flex flex-col gap-3">
            {campusEvents.map((item, idx) => (
              <li className="flex items-center gap-3" key={idx}>
                <FaRegClock className="text-purple-400" />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400">
                    {item.location} · {item.time}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
    </div>
  );
}