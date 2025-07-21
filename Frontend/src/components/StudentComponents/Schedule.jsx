import { useState } from "react";
import {
    FaPlus,
    FaChalkboardTeacher,
    FaUsers,
    FaBookOpen,
    FaClipboardList,
    FaMicrophone,
} from "react-icons/fa";

const Schedule = ({ templates, eventTypes }) => {
    const [selectedType, setSelectedType] = useState([]);

    const toggleType = (type) => {
        setSelectedType((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    return (
        <div className="w-full min-h-screen p-4">
            <div className="w-full p-6 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl flex flex-col md:flex-row gap-8 transition-colors border dark:border-violet-700">
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">Calendar</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Spring Summer</p>

                    <div className="border rounded-xl p-5 mb-6 dark:border-gray-700">
                        <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                            <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                        </div>
                        <div className="grid grid-cols-7 text-center gap-y-2 text-sm text-gray-700 dark:text-gray-200">
                            {Array.from({ length: 35 }, (_, i) => (
                                <div
                                    key={i}
                                    className={`py-2 rounded-full ${i === 24
                                        ? 'bg-indigo-600 text-white font-semibold'
                                        : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {i % 31 + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Event Type</h3>
                        <div className="flex flex-wrap gap-4 text-sm">
                            {eventTypes.map((type) => (
                                <label key={type.label} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="accent-indigo-600"
                                        onChange={() => toggleType(type.label)}
                                        checked={selectedType.includes(type.label)}
                                    />
                                    <span className="text-gray-700 dark:text-gray-300">{type.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">Upcoming Events</h3>
                        <div className="space-y-3 text-sm">
                            <div className="border rounded-lg p-4 bg-white dark:bg-gray-700 shadow-sm">
                                <p className="font-semibold text-indigo-600 dark:text-indigo-400">Registration Completes I</p>
                                <p className="text-gray-500 dark:text-gray-300 text-xs">JAN 25, 2025, 10:00 AM</p>
                                <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">Lecture Confirmation</p>
                            </div>
                            <div className="border rounded-lg p-4 bg-white dark:bg-gray-700 shadow-sm">
                                <p className="font-semibold text-purple-600 dark:text-purple-400">Personal Coaching With Yasmine!</p>
                                <p className="text-gray-500 dark:text-gray-300 text-xs">FEB 5, 2025, 11:00 AM</p>
                                <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">Coaching on College</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <button className="w-full py-3 mb-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-md">
                        <FaPlus /> Add New Event
                    </button>

                    <div className="space-y-4">
                        {templates.map((tpl, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm p-4 hover:shadow-md transition"
                            >
                                <div className="text-indigo-500 dark:text-indigo-300 text-xl">{tpl.icon}</div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{tpl.title}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-300">{tpl.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
