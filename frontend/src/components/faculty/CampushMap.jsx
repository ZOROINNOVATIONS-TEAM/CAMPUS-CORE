import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaFlask,
  FaParking,
  FaMapMarkerAlt,
  FaWalking,
  FaSearch,
  FaRegBuilding,
  FaDownload,
  FaRegClock,
  FaRegCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { MdLibraryBooks, MdMeetingRoom } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Switch } from "@headlessui/react";

// Dummy map image (use your real map or a component like react-leaflet for real map)
const MAP_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_Cambridge_University_faculty_sites.png/640px-Map_of_Cambridge_University_faculty_sites.png";

const layersList = [
  { label: "Lecture Halls", color: "bg-blue-500", key: "lecture" },
  { label: "Staff Rooms", color: "bg-green-400", key: "staff" },
  { label: "Research Labs", color: "bg-yellow-300", key: "research" },
  { label: "Department Offices", color: "bg-gray-400", key: "office" },
  { label: "Faculty Parking", color: "bg-purple-400", key: "parking" },
  { label: "My Classes", color: "bg-pink-400", key: "myclasses" },
];

const displayOptionsList = [
  { label: "Show Walking Paths", key: "walkingPaths" },
  { label: "Show Building Names", key: "buildingNames" },
  { label: "Show Accessibility Routes", key: "accessibility" },
  { label: "3D Building View", key: "threeD" },
];

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
    icon: <MdMeetingRoom />,
    walk: "9 min walk",
    directions: "#",
  },
  {
    name: "Recreation Center",
    type: "Sports Facility",
    color: "bg-purple-100 text-purple-700",
    icon: <FaWalking />,
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

const teachingLocations = [
  {
    title: "Advanced Data Structures",
    location: "Lecture Hall 3A",
    time: "9:00 AM",
  },
  {
    title: "Research Lab Meeting",
    location: "Lab 204, North Faculty",
    time: "11:30 AM",
  },
  {
    title: "Department Meeting",
    location: "Conference Room B, Admin",
    time: "2:15 PM",
  },
];

const schedule = [
  {
    title: "Computer Architecture",
    location: "Lecture Hall 4C",
    time: "11:00 AM",
  },
  {
    title: "Office Hours",
    location: "Faculty Office 405",
    time: "2:30 PM",
  },
  {
    title: "Research Supervision",
    location: "Lab 301",
    time: "4:15 PM",
  },
];

const events = [
  {
    title: "Faculty Meeting",
    location: "Conference Room 1",
    time: "9:30 AM",
    color: "text-red-500",
  },
  {
    title: "Research Symposium",
    location: "Auditorium",
    time: "1:15 PM",
    color: "text-green-500",
  },
  {
    title: "Thesis Defense",
    location: "Research Hall B",
    time: "3:30 PM",
    color: "text-yellow-500",
  },
];

export default function CampusMap() {
  const [displayOptions, setDisplayOptions] = useState({
    walkingPaths: true,
    buildingNames: true,
    accessibility: false,
    threeD: false,
  });

  return (
    <div className="min-h-screen bg-[#F5F6FA] px-4 py-6">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
        <div>
          <h2 className="text-lg font-semibold">Campus Map</h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage and locate your teaching spaces and faculty facilities
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <button className="text-[#3666F6] font-medium text-sm hover:underline">
              Show My Classes
            </button>
            <button className="text-[#3666F6] font-medium text-sm hover:underline">
              Book a Room
            </button>
          </div>
        </div>
        <button className="bg-[#5B8DF6] hover:bg-[#3666F6] text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow font-medium self-start md:self-auto transition">
          <FaDownload />
          Download Map
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <span className="bg-blue-100 text-blue-600 text-xl p-2 rounded-lg">
            <FaChalkboardTeacher />
          </span>
          <div>
            <div className="font-semibold text-sm">Lecture Halls</div>
            <div className="text-gray-500 text-xs">15 rooms</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <span className="bg-green-100 text-green-600 text-xl p-2 rounded-lg">
            <FaUserTie />
          </span>
          <div>
            <div className="font-semibold text-sm">Staff Rooms</div>
            <div className="text-gray-500 text-xs">8 rooms</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <span className="bg-yellow-100 text-yellow-600 text-xl p-2 rounded-lg">
            <FaFlask />
          </span>
          <div>
            <div className="font-semibold text-sm">Research Labs</div>
            <div className="text-gray-500 text-xs">12 labs</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <span className="bg-purple-100 text-purple-600 text-xl p-2 rounded-lg">
            <FaParking />
          </span>
          <div>
            <div className="font-semibold text-sm">Faculty Parking</div>
            <div className="text-gray-500 text-xs">6 zones</div>
          </div>
        </div>
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
              <option>Lecture Hall</option>
              <option>Lab</option>
              <option>Office</option>
            </select>
            <select className="bg-gray-100 border border-gray-200 rounded-md px-2 py-2 text-sm font-medium">
              <option>Floor Level</option>
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
            </select>
            <button className="ml-2 p-2 hover:bg-gray-100 rounded">
              <FaChevronDown />
            </button>
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
                <Switch
                  checked={displayOptions[option.key]}
                  onChange={(checked) =>
                    setDisplayOptions((prev) => ({
                      ...prev,
                      [option.key]: checked,
                    }))
                  }
                  className={`${
                    displayOptions[option.key] ? "bg-[#3666F6]" : "bg-gray-300"
                  } relative inline-flex h-5 w-9 items-center rounded-full transition`}
                >
                  <span
                    className={`${
                      displayOptions[option.key] ? "translate-x-4" : "translate-x-1"
                    } inline-block h-3 w-3 transform bg-white rounded-full transition`}
                  />
                </Switch>
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

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {/* Recent Teaching Locations */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="font-semibold text-base mb-3">Recent Teaching Locations</div>
          <ul className="flex flex-col gap-3">
            {teachingLocations.map((item, idx) => (
              <li className="flex items-center gap-3" key={idx}>
                <FaChalkboardTeacher className="text-blue-400" />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.location} · {item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Today's Schedule */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="font-semibold text-base mb-3">Today's Schedule</div>
          <ul className="flex flex-col gap-3">
            {schedule.map((item, idx) => (
              <li className="flex items-center gap-3" key={idx}>
                <FaRegCalendarAlt className="text-green-400" />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.location} · {item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Department Events */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="font-semibold text-base mb-3">Department Events</div>
          <ul className="flex flex-col gap-3">
            {events.map((item, idx) => (
              <li className="flex items-center gap-3" key={idx}>
                <FaRegClock className={item.color} />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.location} · {item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}