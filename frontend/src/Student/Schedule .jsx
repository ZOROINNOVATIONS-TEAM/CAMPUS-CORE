import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarDays, MapPin } from "lucide-react";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  const [date, setDate] = useState(new Date());

  const events = [
    {
      title: "Registration Complete!",
      date: new Date(2025, 0, 17),
      time: "11:00 AM",
      location: "Lecture at Craft Pavilion",
      type: "Lecture",
    },
    {
      title: "Personal Coaching With Yasmin",
      date: new Date(2025, 1, 5),
      time: "11:00 AM",
      location: "Coaching on College",
      type: "Coaching",
    },
  ];

  const filteredEvents = events.filter(
    (event) => format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 bg-gray-100 min-h-screen text-gray-800">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-6 lg:h-[calc(100vh-3rem)] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">📅 Calendar</h2>
          <span className="text-lg font-semibold text-gray-600">Spring Summer</span>
        </div>

        {/* Calendar */}
        <div className="bg-gray-100 p-4 rounded-xl grow">
          <Calendar
            onChange={setDate}
            value={date}
            calendarType="gregory"
            className="w-full h-full"
            tileClassName={({ date: d }) =>
              format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
                ? "bg-blue-600 text-white rounded-md"
                : "hover:bg-gray-200 rounded-md"
            }
          />
        </div>

        {/* Event Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-semibold text-gray-700">Event Type:</span>
          {["Lecture", "Group Study", "Coaching"].map((type, i) => (
            <label key={i} className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span
                className={`${
                  type === "Lecture"
                    ? "text-violet-600"
                    : type === "Group Study"
                    ? "text-blue-600"
                    : "text-rose-600"
                }`}
              >
                {type}
              </span>
            </label>
          ))}
        </div>

        {/* Events */}
        <div className="overflow-auto">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">Scheduled Events</h3>
          {filteredEvents.length > 0 ? (
            <div className="space-y-4">
              {filteredEvents.map((event, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-bold text-gray-800 mb-1">{event.title}</h4>
                  <div className="flex items-center text-sm text-gray-600 gap-2">
                    <CalendarDays size={16} />
                    {format(event.date, "MMM dd, yyyy")}, {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 gap-2 mt-1">
                    <MapPin size={16} />
                    {event.location}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No events scheduled for this day.</p>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-6 lg:h-[calc(100vh-3rem)] overflow-auto">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition text-sm">
          + Schedule New Event
        </button>

        <h3 className="text-lg font-semibold text-gray-800">Saved Templates</h3>

        <div className="space-y-3 text-sm">
          {[
            { title: "🎯 Personal Coaching", time: "Jan 17, 2025, 11:00 AM" },
            { title: "👥 Group Study", time: "Feb 25, 2025, 5:00 PM" },
            { title: "📘 Introductory Lecture", time: "Feb 27, 2025, 10:00 AM" },
            { title: "📄 Assignment Deadline", time: "Mar 12, 2025, 9:00 AM" },
            { title: "🎤 Presentation Day", time: "Apr 29, 2025, 3:00 PM" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition"
            >
              <p className="font-medium text-gray-800">{item.title}</p>
              <p className="text-gray-500">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
