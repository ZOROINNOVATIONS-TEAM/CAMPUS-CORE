import React, { useState } from "react";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiFilter } from "react-icons/fi";

// Dummy calendar for January 2025 (simple, not dynamic)
const calendarDays = [
  ["", "", "", "", "", "1", "2"],
  ["3", "4", "5", "6", "7", "8", "9"],
  ["10", "11", "12", "13", "14", "15", "16"],
  ["17", "18", "19", "20", "21", "22", "23"],
  ["24", "25", "26", "27", "28", "29", "30"],
  ["31", "", "", "", "", "", ""],
];

const eventTypes = [
  { label: "Lecture", color: "bg-purple-500", value: "lecture" },
  { label: "Group Study", color: "bg-gray-400", value: "group" },
  { label: "Coaching", color: "bg-blue-400", value: "coaching" },
];

const initialEvents = [
  {
    type: "lecture",
    title: "Registration Completes!",
    date: "JAN 17, 2025, 11:00 AM",
    desc: "Lecture Confirmation",
  },
  {
    type: "coaching",
    title: "Personal Coaching With Yasmine!",
    date: "JAN 29, 2025, 11:00 AM",
    desc: "Coaching in College",
  },
];

const templates = [
  {
    type: "coaching",
    label: "Personal Coaching",
    date: "JAN 17, 2025, 11:00 AM",
  },
  {
    type: "group",
    label: "Group Study",
    date: "FEB 12, 2025, 5:00 PM",
  },
  {
    type: "lecture",
    label: "Introductory Lecture",
    date: "FEB 17, 2025, 10:00 AM",
  },
  {
    type: "assignment",
    label: "Assignment Deadline",
    date: "MAR 1, 2025, 12:00 AM",
  },
  {
    type: "presentation",
    label: "Presentation Day",
    date: "JUN 21, 2025, 3:00 PM",
  },
];

export default function Schedule() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("17");
  const [upcomingEvents, setUpcomingEvents] = useState(initialEvents);

  // Add event (demo: just pushes a simple event)
  function handleAddEvent() {
    const newEvent = {
      type: "group",
      title: "New Group Study Event",
      date: `JAN ${selectedDate}, 2025, 1:00 PM`,
      desc: "Added via + Add New Event",
    };
    setUpcomingEvents([...upcomingEvents, newEvent]);
  }

  return (
    <div className="min-h-screen bg-[#ededed] p-0 flex flex-col">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Calendar Section */}
          <div className="bg-white rounded-xl shadow p-6 flex-1 col-span-2">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xl tracking-tight">Calendar</span>
              <span className="font-bold text-xl tracking-tight">Spring Summer</span>
            </div>
            {/* Calendar */}
            <div className="bg-[#fafafa] rounded-xl border border-gray-200 p-4 w-[340px] mx-auto mb-5">
              <div className="flex items-center justify-between mb-2">
                <button className="p-1 rounded hover:bg-gray-100">
                  <FiChevronLeft />
                </button>
                <span className="font-semibold text-gray-800">January 2025</span>
                <button className="p-1 rounded hover:bg-gray-100">
                  <FiChevronRight />
                </button>
              </div>
              <table className="w-full text-center text-xs">
                <thead>
                  <tr className="text-gray-400">
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                    <th>Su</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarDays.map((week, wi) => (
                    <tr key={wi}>
                      {week.map((day, di) => (
                        <td key={di} className="py-1">
                          {day ? (
                            <button
                              onClick={() => setSelectedDate(day)}
                              className={`w-7 h-7 rounded-full transition ${
                                selectedDate === day
                                  ? "bg-[#3666F6] text-white font-bold"
                                  : "hover:bg-gray-100 text-gray-700"
                              }`}
                            >
                              {day}
                            </button>
                          ) : (
                            ""
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Event Type Filter */}
            <div className="flex items-center gap-6 mb-4">
              <span className="text-lg">
                <span className="border border-black rounded-[4px] inline-block w-[22px] h-[22px] align-middle mr-2" />
                Event Type
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                Filter Event <FiFilter />
              </span>
            </div>
            {/* Event Types */}
            <div className="flex items-center gap-6 mb-4">
              {eventTypes.map((et) => (
                <label
                  key={et.value}
                  className="flex items-center gap-2 text-base font-semibold cursor-pointer"
                >
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedType === et.value
                        ? et.color
                        : "border-gray-400 bg-white"
                    }`}
                    onClick={() => setSelectedType(et.value)}
                  >
                    {selectedType === et.value && (
                      <FaRegDotCircle className="text-white text-lg" />
                    )}
                  </span>
                  <span
                    className={`${
                      et.color
                    } inline-block w-3 h-3 rounded-full mr-1 align-middle`}
                  ></span>
                  {et.label}
                </label>
              ))}
            </div>
            {/* Upcoming Events */}
            <div className="mb-2 font-semibold text-[#3666F6] text-lg">
              Upcoming Events
            </div>
            <div className="flex flex-col gap-4">
              {upcomingEvents
                .filter((ev) => !selectedType || ev.type === selectedType)
                .map((ev, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fafafa] rounded-lg px-4 py-3 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${
                          eventTypes.find((et) => et.value === ev.type)?.color
                        }`}
                      ></span>
                      <span className="font-semibold text-base">
                        {ev.title}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{ev.date}</div>
                    <div className="text-xs text-gray-400">{ev.desc}</div>
                  </div>
                ))}
            </div>
          </div>
          {/* Add Event Section */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <div className="font-semibold text-lg mb-4">Add Event</div>
            <button
              className="w-full bg-[#3666F6] hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow mb-4 transition"
              onClick={handleAddEvent}
            >
              + Add New Event
            </button>
            <div className="font-semibold text-base mb-2">Saved Templates</div>
            <div className="flex flex-col gap-2">
              {templates.map((tpl, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg"
                >
                  <span
                    className={`inline-block w-6 h-6 rounded-full flex items-center justify-center ${
                      tpl.type === "lecture"
                        ? "bg-purple-500 text-white"
                        : tpl.type === "group"
                        ? "bg-gray-400 text-white"
                        : tpl.type === "coaching"
                        ? "bg-blue-400 text-white"
                        : tpl.type === "assignment"
                        ? "bg-yellow-400 text-white"
                        : tpl.type === "presentation"
                        ? "bg-pink-400 text-white"
                        : "bg-gray-300 text-white"
                    }`}
                  >
                    {tpl.type === "lecture" && <FaRegDotCircle />}
                    {tpl.type === "group" && <FaRegCircle />}
                    {tpl.type === "coaching" && <FaRegDotCircle />}
                    {tpl.type === "assignment" && <FaRegCircle />}
                    {tpl.type === "presentation" && <FaRegCircle />}
                  </span>
                  <div>
                    <div className="font-semibold text-base">{tpl.label}</div>
                    <div className="text-xs text-gray-500">{tpl.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}