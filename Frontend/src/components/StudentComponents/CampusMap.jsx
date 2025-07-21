import React from "react";
import { FaDownload } from "react-icons/fa";

const CampusMap = ({
    buildingCounts,
    mapLayers,
    filters,
    popularLocations,
    recentLocations,
    upcomingClasses,
    eventsToday
}) => {
    return (
        <div className="w-full min-h-screen p-4  ">
            <div className="w-full p-6 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-2xl border-violet-400 rounded-xl border dark:border-violet-700">

                <div className="flex flex-wrap gap-4">
                    {Object.entries(buildingCounts).map(([name, count], idx) => (
                        <div key={idx} className="border dark:border-gray-600 shadow-sm rounded-lg px-6 py-3 flex items-center gap-3 bg-gray-50 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{name}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {count} {count === 1 ? "location" : "buildings"}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-5">
                    <div className="col-span-2 space-y-3">
                        <div className="flex gap-2 flex-wrap">
                            <input
                                type="text"
                                placeholder="Search for buildings, rooms, or facilities..."
                                className="w-full md:flex-1 px-3 py-2 border rounded-md text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            {filters.map((filter, idx) => (
                                <select
                                    key={idx}
                                    className="border px-3 py-2 rounded-md text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option>{filter}</option>
                                </select>
                            ))}
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm flex items-center gap-1">
                                <FaDownload /> Download Map
                            </button>
                        </div>
                        <div className="h-64 md:h-80 w-full rounded-lg border overflow-hidden dark:border-gray-600">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Google_Maps_logo.svg/1024px-Google_Maps_logo.svg.png"
                                alt="Map placeholder"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 space-y-4">
                        <div>
                            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Map Layers</h4>
                            <ul className="space-y-2">
                                {mapLayers.map((layer, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                                        <span
                                            className="h-3 w-3 rounded-full"
                                            style={{ backgroundColor: layer.color }}
                                        ></span>
                                        {layer.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Display Options</h4>
                            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                                {[
                                    "Show Walking Paths",
                                    "Show Building Names",
                                    "Show Accessibility Routes",
                                    "3D Building View",
                                ].map((option, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span>{option}</span>
                                        <input type="checkbox" className="h-4 w-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Popular Locations</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
                        {popularLocations.map((loc, idx) => (
                            <div key={idx} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                                <p className="font-medium text-gray-800 dark:text-white">{loc.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-300">{loc.walk}</p>
                                <button className="text-blue-600 text-xs underline mt-1">Get Directions</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Your Recent Locations</h4>
                        <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                            {recentLocations.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Upcoming Classes</h4>
                        <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                            {upcomingClasses.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Campus Events Today</h4>
                        <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                            {eventsToday.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampusMap;
