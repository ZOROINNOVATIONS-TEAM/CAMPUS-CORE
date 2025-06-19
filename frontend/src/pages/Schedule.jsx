import React from "react";
import { Filter } from "lucide-react";
import Topbar from "../components/AdminDashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import Menu from "../components/dashboard/Menu";

const events = [
  {
    title: "Registration Completion",
    time: "JAN 17 2025, 10:00 AM",
    type: "Lecture",
    location: "Lahore Conference",
  },
  {
    title: "Personal Coaching With Yourself",
    time: "FEB 5 2025, 10:00 AM",
    type: "Coaching",
    location: "Coaching - College",
  },
];

export default function Schedule() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] p-6 text-gray-800 space-y-6">
      {/* ✅ Topbar and WelcomeCard */}
      <Topbar />
      <WelcomeCard />
      <Menu/>

      {/* ✅ Main Section */}
      <div className="flex gap-6">
        {/* Left Calendar Panel */}
        <div className="w-2/3 bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">📅 Calendar</h2>
            <span className="text-gray-500 font-medium">Spring Summer</span>
          </div>

          {/* Weekdays Grid */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600 mb-4">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d, i) => (
              <div key={i} className="font-medium">{d}</div>
            ))}
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`py-2 rounded-full cursor-pointer ${
                  i === 16
                    ? "bg-indigo-500 text-white font-bold"
                    : "hover:bg-indigo-100"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex gap-3 items-center text-sm">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-purple-500" />
                <span>Lecture</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-pink-500" />
                <span>Group Study</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-green-500" />
                <span>Coaching</span>
              </label>
            </div>
            <div className="ml-auto flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              <Filter size={16} />
              Filter Event
            </div>
          </div>

          {/* Events */}
          <h3 className="text-blue-700 font-semibold mb-2">Upcoming Events</h3>
          <div className="space-y-3">
            {events.map((e, i) => (
              <div
                key={i}
                className="bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-indigo-50 transition"
              >
                <p className="text-sm font-medium text-indigo-700">{e.title}</p>
                <p className="text-xs text-gray-500">{e.time}</p>
                <p className="text-xs text-gray-500">{e.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/3 bg-gray-900 text-white rounded-2xl p-6 shadow-xl">
          <button className="w-full bg-indigo-500 py-2 rounded-lg hover:bg-indigo-600 transition font-medium">
            ➕ Add New Event
          </button>

          <p className="mt-6 text-sm text-gray-300 mb-2">Saved Templates</p>
          <div className="space-y-3">
            {[
              { label: "Personal Coaching", date: "JAN 17 2025, 10:00 AM" },
              { label: "Group Study", date: "FEB 15 2025, 12:00 PM" },
              { label: "Introductory Lecture", date: "FEB 20 2025, 11:00 AM" },
              { label: "Assignment Deadline", date: "MAR 05 2025, 01:00 PM" },
              { label: "Presentation Day", date: "APR 27 2025, 10:00 AM" },
            ].map((template, i) => (
              <div
                key={i}
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
              >
                <p className="text-sm font-medium">{template.label}</p>
                <p className="text-xs text-gray-400">{template.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
