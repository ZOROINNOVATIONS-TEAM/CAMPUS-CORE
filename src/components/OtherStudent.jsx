// File: OtherStudent.jsx

import React from "react";
import map from "../assets/map.png";

// Dummy SVG Icon
const SvgIcon = ({ children }) => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-gray-100 text-gray-500">{children}</span>
);

const navItems = [
  { name: "Home", icon: <SvgIcon><svg width="20" height="20" fill="none"><path d="M2 10L10 3l8 7" stroke="#64748b" strokeWidth="2" /><rect x="6" y="10" width="8" height="7" rx="2" fill="#e5e7eb" /></svg></SvgIcon> },
  { name: "Schedule", icon: <SvgIcon>📅</SvgIcon> },
  { name: "Course Setup", icon: <SvgIcon>📚</SvgIcon> },
  { name: "Result", icon: <SvgIcon>🎓</SvgIcon> },
  { name: "Fees", icon: <SvgIcon>💸</SvgIcon> },
  { name: "Other", icon: <SvgIcon>⚙️</SvgIcon> },
  { name: "Mentor", icon: <SvgIcon>🧑‍🏫</SvgIcon> },
];

const quickFilters = [
  { title: "Academic Buildings", count: 12, icon: <SvgIcon>🏢</SvgIcon> },
  { title: "Residence Halls", count: 8, icon: <SvgIcon>🏠</SvgIcon> },
  { title: "Dining Facilities", count: 5, icon: <SvgIcon>🍽️</SvgIcon> },
  { title: "Special Facilities", count: 4, icon: <SvgIcon>⭐</SvgIcon> },
];

const mapLayers = [
  { name: "Academic Buildings", color: "bg-blue-500", checked: true },
  { name: "Residence Halls", color: "bg-green-500", checked: true },
  { name: "Dining Facilities", color: "bg-yellow-400", checked: false },
  { name: "Special Facilities", color: "bg-purple-500", checked: false },
];

const displayOptions = [
  { name: "Building Names", checked: true },
  { name: "Walking Routes", checked: true },
  { name: "Accessible Routes", checked: false },
];

const popularLocations = [
  { name: "Science Building", tag: "Academic", icon: <SvgIcon>🔬</SvgIcon> },
  { name: "North Library", tag: "Library", icon: <SvgIcon>📖</SvgIcon> },
  { name: "Student Center", tag: "Social", icon: <SvgIcon>🏛️</SvgIcon> },
  { name: "Recreation Center", tag: "Sports", icon: <SvgIcon>🏋️</SvgIcon> },
  { name: "Engineering Hall", tag: "Academic", icon: <SvgIcon>🛠️</SvgIcon> },
];

const recentLocations = [
  { name: "Computer Science Lab", building: "Science Building", icon: <SvgIcon>💻</SvgIcon> },
  { name: "North Library", building: "Library", icon: <SvgIcon>📚</SvgIcon> },
  { name: "Study Room 204", building: "Student Center", icon: <SvgIcon>📝</SvgIcon> },
];

const upcomingClasses = [
  { name: "Advanced Algebra", time: "10:00 AM", icon: <SvgIcon>➗</SvgIcon> },
  { name: "Physics II", time: "12:00 PM", icon: <SvgIcon>🔭</SvgIcon> },
];

const campusEvents = [
  { name: "Robotics Workshop", time: "2:00 PM", icon: <SvgIcon>🤖</SvgIcon> },
  { name: "Career Fair", time: "4:00 PM", icon: <SvgIcon>💼</SvgIcon> },
];

export default function OtherStudent() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] flex flex-col font-sans">
      {/* Header */}
    

      {/* Main Content */}
      <main className="flex-1 px-8 mt-8">
        {/* Campus Map Section */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-gray-800">Campus Map</h3>
            <button className="bg-blue-100 text-blue-700 font-medium rounded-lg px-4 py-2 shadow hover:bg-blue-200 transition">Download Map</button>
          </div>
          <p className="text-gray-500 mb-4">Find your way around campus buildings and facilities.</p>
          <div className="flex space-x-4 mb-4">
            {quickFilters.map((filter) => (
              <div
                key={filter.title}
                className="bg-white rounded-xl shadow flex flex-col items-center justify-center p-4 w-70"
              >
                {filter.icon}
                <div className="text-base font-semibold mt-2">{filter.title}</div>
                <span className="text-blue-600 font-bold text-xl">{filter.count}</span>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            {/* Map Card */}
            <div className="bg-white rounded-xl shadow p-4 flex-1 min-h-[340px] flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <SvgIcon>🔍</SvgIcon>
                <input
                  type="text"
                  placeholder="Search location, building or facility"
                  className="flex-1 p-2 rounded-lg border border-gray-200 shadow focus:outline-none text-gray-700"
                />
                <select className="ml-5 p-4 rounded-lg border border-gray-200 text-gray-600">
                  <option>Building Type</option>
                  <option>Academic</option>
                  <option>Residence</option>
                  <option>Dining</option>
                  <option>Special</option>
                </select>
              </div>
              <div className="flex-1 flex items-center justify-center rounded-lg bg-gray-100 border border-gray-200">
                <img
                  src={map}
                  alt="Campus Map"
                  className="w-full h-[200px] object-cover rounded"
                />
              </div>
            </div>
            {/* Map Layers Sidebar */}
            <div className="bg-white rounded-xl shadow p-4 w-80 flex flex-col ml-2">
              <h4 className="font-semibold mb-2 text-gray-800">Map Layers</h4>
              <div className="space-y-2 mb-4">
                {mapLayers.map((layer) => (
                  <label key={layer.name} className="flex items-center justify-between cursor-pointer">
                    <span className="flex items-center">
                      <span className={`w-3 h-3 mr-2 rounded-full ${layer.color}`}></span>
                      <span className="text-gray-700">{layer.name}</span>
                    </span>
                    <input type="checkbox" checked={layer.checked} readOnly className="accent-blue-600" />
                  </label>
                ))}
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Display Options</h4>
              <div className="space-y-2">
                {displayOptions.map((opt) => (
                  <label key={opt.name} className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700">{opt.name}</span>
                    <input type="checkbox" checked={opt.checked} readOnly className="accent-blue-600" />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Locations */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-gray-800">Popular Locations</h3>
            <button className="bg-blue-100 text-blue-700 font-medium rounded-lg px-4 py-2 shadow hover:bg-blue-200 transition">
              Show All
            </button>
          </div>
          <div className="flex space-x-4">
            {popularLocations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-xl shadow flex flex-col items-center p-4 w-56"
              >
                {loc.icon}
                <div className="text-base font-semibold mt-2">{loc.name}</div>
                <span className="text-xs mt-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{loc.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Cards */}
        <section className="mt-10 flex space-x-4">
          {/* Recent Locations */}
          <div className="bg-white rounded-xl shadow p-4 w-1/3">
            <h4 className="font-semibold mb-2 text-gray-800">Your Recent Locations</h4>
            <ul>
              {recentLocations.map((loc) => (
                <li key={loc.name} className="flex items-center space-x-2 mb-2">
                  {loc.icon}
                  <span className="text-gray-700">{loc.name}</span>
                  <span className="text-gray-400 text-xs">({loc.building})</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Upcoming Classes */}
          <div className="bg-white rounded-xl shadow p-4 w-1/3">
            <h4 className="font-semibold mb-2 text-gray-800">Upcoming Classes</h4>
            <ul>
              {upcomingClasses.map((cls) => (
                <li key={cls.name} className="flex items-center space-x-2 mb-2">
                  {cls.icon}
                  <span className="text-gray-700">{cls.name}</span>
                  <span className="text-gray-400 text-xs">{cls.time}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Campus Events */}
          <div className="bg-white rounded-xl shadow p-4 w-1/3">
            <h4 className="font-semibold mb-2 text-gray-800">Campus Events Today</h4>
            <ul>
              {campusEvents.map((evt) => (
                <li key={evt.name} className="flex items-center space-x-2 mb-2">
                  {evt.icon}
                  <span className="text-gray-700">{evt.name}</span>
                  <span className="text-gray-400 text-xs">{evt.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-white shadow mt-10 py-2 px-8 flex justify-between text-gray-400 text-sm">
        <span>Designed and developed by ZeroTeam</span>
        <span>2025 ZeroInnovations</span>
      </footer> */}
    </div>
  );
}
