import CampusMapStats from "./map/CampusMapStats";
import PopularLocations from "./map/PopularLocations";
import RecentTeachingLocations from "./map/RecentTeachingLocations";
import TodaySchedule from "./map/TodaySchedule";
import DepartmentEvents from "./map/DepartmentEvent";
import MapLayersAndOptions from "./map/MapLayersAndOptions";

function StaticMap() {
  return (
    <div className="w-full h-[250px] rounded-lg overflow-hidden border bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
      <iframe
        title="Campus Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.026842195695!2d85.31690977540636!3d27.71624107618443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191203b250e9%3A0x8e870af6c21f30c1!2sTribhuvan%20University!5e0!3m2!1sen!2sin!4v1718888928412!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
}

export default function FacultyMapDashboard() {
  return (
    <section className="w-full py-4 md:py-8 bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title + Actions */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Campus Map</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Manage and locate your teaching spaces and faculty facilities
            </p>
            <div className="flex gap-2 mt-1">
              <button className="text-blue-600 dark:text-blue-400 text-xs underline">
                Show My Classes
              </button>
              <button className="text-blue-600 dark:text-blue-400 text-xs underline">
                Book a Room
              </button>
            </div>
          </div>
          <button className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg px-4 py-1 text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition">
            Download Map
          </button>
        </div>

        <CampusMapStats />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Map Section */}
          <div className="flex-1">
            <div className="bg-white dark:bg-[#2a2a2a] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
              <div className="flex flex-wrap gap-2 items-center mb-3">
                <input
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                  placeholder="Search for buildings, rooms, or facilities..."
                />
                <select className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <option>Building Type</option>
                  <option>Academic</option>
                  <option>Admin</option>
                  <option>Dining</option>
                </select>
                <select className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <option>Floor Level</option>
                  <option>Ground</option>
                  <option>1st</option>
                  <option>2nd</option>
                </select>
                <button className="ml-2 text-gray-500 dark:text-gray-400 text-xs px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  ⟳
                </button>
              </div>
              <div className="w-full h-[320px] rounded-lg overflow-hidden border bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <iframe
                  title="Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.026842195695!2d85.31690977540636!3d27.71624107618443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191203b250e9%3A0x8e870af6c21f30c1!2sTribhuvan%20University!5e0!3m2!1sen!2sin!4v1718888928412!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[250px] md:h-[300px] border-0"
                ></iframe>
              </div>
            </div>
            <PopularLocations />
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[350px] flex flex-col gap-6">
            <div className="bg-white dark:bg-[#2a2a2a] rounded-xl shadow border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold mb-2 text-base text-gray-800 dark:text-white">Map Layers</h3>
              <MapLayersAndOptions />
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <RecentTeachingLocations />
          <TodaySchedule />
          <DepartmentEvents />
        </div>
      </div>
    </section>
  );
}
