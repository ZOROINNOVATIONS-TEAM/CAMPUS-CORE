import React, { useState } from "react";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(17);
  const [eventType, setEventType] = useState("Lecture");

  const handleRadioChange = (e) => {
    setEventType(e.target.value);
  };

  return (
    <section className="p-6 md:p-10 bg-gray-100 min-h-screen">
      {/* Top Greeting Banner */}
      {/* <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl mb-8 shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-lg font-semibold">Welcome back, Dev!</h2>
            <p className="text-sm">Wednesday, June 18, 2025 | Spring Semester 2025</p>
            <p className="text-sm">Student ID: STU2024065</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">📘 Next Class</p>
            <p className="text-sm font-semibold">Advanced Mathematics in 45 minutes</p>
          </div>
        </div>
      </div> */}

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendar and Events */}
        <div className="bg-white p-6 rounded-xl shadow border">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Calendar</h3>
            <div className="text-sm font-medium">Spring Summer</div>
          </div>

          {/* Calendar */}
          <div className="grid grid-cols-7 gap-2 mb-4 text-center text-gray-700">
            <div className="col-span-7 flex justify-between items-center text-sm mb-2">
              <button>&lt;</button>
              <span className="font-medium">January 2025</span>
              <button>&gt;</button>
            </div>
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
              <div key={day} className="text-xs font-semibold text-gray-500">{day}</div>
            ))}
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
                  i + 1 === selectedDate ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedDate(i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Radio Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-sm">Event Type</label>
            <div className="flex gap-4 text-sm">
              <label className="flex items-center gap-1">
                <input type="radio" value="Lecture" checked={eventType === "Lecture"} onChange={handleRadioChange} />
                Lecture
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" value="Group Study" checked={eventType === "Group Study"} onChange={handleRadioChange} />
                Group Study
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" value="Coaching" checked={eventType === "Coaching"} onChange={handleRadioChange} />
                Coaching
              </label>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Upcoming Events</h4>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded mb-2 text-sm">
              <p className="font-medium text-blue-700">🧑‍🏫 Personal Coaching - With Yashasvi</p>
              <p className="text-xs text-gray-600">Coaching in College | Jan 17, 12:30 PM</p>
            </div>
            <div className="border p-3 rounded text-sm text-gray-700">
              <p className="font-medium">📅 Registration Conference</p>
              <p className="text-xs text-gray-600">Admin Office | Jan 17, 10:00 AM</p>
            </div>
          </div>
        </div>

        {/* Add Event Panel */}
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Event</h3>
          <button className="bg-blue-600 text-white w-full py-2 rounded-md mb-6 hover:bg-blue-700 text-sm font-medium">
            + Add New Event
          </button>

          {/* Saved Templates */}
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Saved Templates</h4>
          <div className="space-y-3 text-sm">
            <div className="border p-3 rounded text-gray-700 bg-purple-50">
              🧑‍🏫 Personal Coaching <br />
              <span className="text-xs text-gray-500">Jan 22, 12:30 PM</span>
            </div>
            <div className="border p-3 rounded text-gray-700 bg-indigo-50">
              📘 Group Study <br />
              <span className="text-xs text-gray-500">Jan 23, 11:00 AM</span>
            </div>
            <div className="border p-3 rounded text-gray-700 bg-pink-50">
              🎓 Introductory Lecture <br />
              <span className="text-xs text-gray-500">Jan 24, 9:00 AM</span>
            </div>
            <div className="border p-3 rounded text-gray-700 bg-yellow-50">
              📑 Assignment Deadline <br />
              <span className="text-xs text-gray-500">Jan 26, 5:00 PM</span>
            </div>
            <div className="border p-3 rounded text-gray-700 bg-blue-50">
              🎤 Presentation Day <br />
              <span className="text-xs text-gray-500">Jan 28, 10:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </section>
  );
};

export default Schedule;
