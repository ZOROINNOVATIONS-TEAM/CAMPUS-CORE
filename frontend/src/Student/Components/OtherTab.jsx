import React, { useState } from 'react';
import {
  School,
  Home,
  Utensils,
  Dumbbell,
  Landmark,
  BookOpen,
  UsersRound,
  LibraryBig,
  Building2,
  Clock,
  MapPin,
  FlaskConical,
  BriefcaseBusiness,
  PartyPopper,
  Music,
  Coffee,
  NotebookPen,
  GraduationCap,
} from 'lucide-react';

const topFilters = [
  { label: "Academic Buildings", count: 12, icon: <School className="w-5 h-5 text-blue-600" /> },
  { label: "Residence Halls", count: 8, icon: <Home className="w-5 h-5 text-green-600" /> },
  { label: "Dining Facilities", count: 5, icon: <Utensils className="w-5 h-5 text-yellow-500" /> },
  { label: "Sports Facilities", count: 4, icon: <Dumbbell className="w-5 h-5 text-purple-600" /> },
];

const popularLocations = [
  { name: "Science Building", type: "Academic", time: "5 min walk", icon: <Landmark className="w-5 h-5 text-blue-500" /> },
  { name: "Main Library", type: "Study Space", time: "8 min walk", icon: <LibraryBig className="w-5 h-5 text-green-600" /> },
  { name: "Student Center", type: "Dining Hall", time: "3 min walk", icon: <UsersRound className="w-5 h-5 text-yellow-600" /> },
  { name: "Recreation Center", type: "Sports Facility", time: "12 min walk", icon: <Dumbbell className="w-5 h-5 text-pink-500" /> },
  { name: "Engineering Hall", type: "Academic", time: "7 min walk", icon: <Building2 className="w-5 h-5 text-blue-400" /> },
];

const ToggleSwitch = ({ enabled, setEnabled }) => (
  <button
    onClick={() => setEnabled(!enabled)}
    className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${enabled ? 'bg-blue-600' : 'bg-gray-300'}`}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full shadow-md transform ${enabled ? 'translate-x-6' : 'translate-x-0'} transition-transform duration-300`}
    />
  </button>
);

const IconCircle = ({ children, bgColor }) => (
  <div className={`p-2 rounded-full shadow-md ${bgColor} flex items-center justify-center`}>
    {children}
  </div>
);

const OtherTab = () => {
  const [walkPaths, setWalkPaths] = useState(true);
  const [buildingNames, setBuildingNames] = useState(false);
  const [accessibility, setAccessibility] = useState(false);
  const [building3D, setBuilding3D] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {topFilters.map((item, i) => (
          <div key={i} className="p-4 bg-white rounded-xl shadow hover:shadow-md flex items-center gap-4">
            <IconCircle bgColor="bg-gray-100">{item.icon}</IconCircle>
            <div>
              <div className="text-gray-700 font-semibold">{item.label}</div>
              <div className="text-gray-500 text-sm">{item.count} buildings</div>
            </div>
          </div>
        ))}
      </div>

      {/* Map + Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 rounded-xl shadow overflow-hidden">
          <iframe
            title="Campus Map"
            src="https://maps.google.com/maps?q=university&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] border-0"
          />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Map Layers</h3>
          <div className="space-y-3">
            {topFilters.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm text-gray-600">
                <span>{item.label}</span>
                <input type="checkbox" defaultChecked={i < 2} />
              </div>
            ))}
            <div className="mt-5 border-t pt-4">
              <h4 className="font-semibold mb-3 text-gray-700">Display Options</h4>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span>Show Walking Paths</span>
                <ToggleSwitch enabled={walkPaths} setEnabled={setWalkPaths} />
              </div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span>Show Building Names</span>
                <ToggleSwitch enabled={buildingNames} setEnabled={setBuildingNames} />
              </div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span>Show Accessibility Routes</span>
                <ToggleSwitch enabled={accessibility} setEnabled={setAccessibility} />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>3D Building View</span>
                <ToggleSwitch enabled={building3D} setEnabled={setBuilding3D} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Locations */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Popular Locations</h3>
        <button className="text-blue-600 hover:underline text-sm">View All</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {popularLocations.map((loc, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-1">
              <IconCircle bgColor="bg-gray-100">{loc.icon}</IconCircle>
              <h4 className="font-semibold text-gray-800">{loc.name}</h4>
            </div>
            <p className="text-sm text-gray-500">{loc.type}</p>
            <div className="flex items-center justify-between text-sm mt-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{loc.time}</span>
              <a href="#" className="text-blue-600 hover:underline ml-auto text-sm">Get Directions</a>
            </div>
          </div>
        ))}
      </div>

      {/* Info Cards with Shadowed Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Recent Locations */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="font-bold text-gray-700 mb-3">Your Recent Locations</h4>
          <ul className="text-sm space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-blue-100"><NotebookPen className="w-4 h-4 text-blue-600" /></IconCircle>
              Computer Science Lab – Tue 10:30 AM
            </li>
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-yellow-100"><Coffee className="w-4 h-4 text-yellow-600" /></IconCircle>
              Campus Café – Today 1:15 PM
            </li>
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-green-100"><LibraryBig className="w-4 h-4 text-green-600" /></IconCircle>
              Study Room 204 – Jun 16, 5:30 PM
            </li>
          </ul>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="font-bold text-gray-700 mb-3">Upcoming Classes</h4>
          <ul className="text-sm space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-indigo-100"><GraduationCap className="w-4 h-4 text-indigo-600" /></IconCircle>
              Advanced Algorithms – 11:00 AM
            </li>
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-red-100"><FlaskConical className="w-4 h-4 text-red-500" /></IconCircle>
              Chemistry Lab – 2:30 PM
            </li>
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-pink-100"><BriefcaseBusiness className="w-4 h-4 text-pink-500" /></IconCircle>
              Business Ethics – 4:15 PM
            </li>
          </ul>
        </div>

        {/* Campus Events */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="font-bold text-gray-700 mb-3">Campus Events Today</h4>
          <ul className="text-sm space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-purple-100"><BriefcaseBusiness className="w-4 h-4 text-purple-600" /></IconCircle>
              Career Fair – 10:00 AM
            </li>
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-yellow-100"><Music className="w-4 h-4 text-yellow-500" /></IconCircle>
              Concert: Jazz Ensemble – 7:00 PM
            </li>
            <li className="flex items-center gap-3">
              <IconCircle bgColor="bg-blue-100"><PartyPopper className="w-4 h-4 text-blue-500" /></IconCircle>
              Student Club Fair – 3:00 PM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherTab;
