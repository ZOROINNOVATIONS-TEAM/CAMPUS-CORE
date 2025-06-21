import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import EventList from "./EventList";
import EventAddModal from "./EventAddModal";
import EventTemplates from "./EventTemplates";

const initialEvents = [
  {
    id: 1,
    date: new Date(2025, 0, 17, 11, 0), // Jan is 0
    type: "Lecture",
    title: "Registration Complete!",
    description: "Lecture Confirmation",
  },
  {
    id: 2,
    date: new Date(2025, 1, 5, 11, 0), // Feb 5
    type: "Coaching",
    title: "Personal Coaching With Yasmine!",
    description: "Coaching on College",
  },
];

export default function EventCalendar() {
  const [events, setEvents] = useState(initialEvents);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  // CRUD
  function handleAddEvent(event) {
    setEvents((prev) => [...prev, { ...event, id: Date.now() }]);
    setShowModal(false);
  }
  function handleDeleteEvent(id) {
    setEvents((prev) => prev.filter(e => e.id !== id));
  }

  // Filtered events
  const filteredEvents = events.filter(e =>
    (filter === "All" || e.type === filter) &&
    e.date.toDateString() === selectedDate.toDateString()
  );

  // Upcoming Events (future only)
  const upcomingEvents = events
    .filter(e => e.date >= new Date())
    .sort((a, b) => a.date - b.date)
    .slice(0, 5);

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Calendar Panel */}
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-md min-w-[320px] max-w-[480px] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-2xl">Calendar</h2>
          <div className="font-semibold text-lg">Spring Summer</div>
        </div>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          calendarType="US"
          tileContent={({ date }) =>
            events.some(e => e.date.toDateString() === date.toDateString())
              ? <div className="w-2 h-2 rounded-full bg-violet-500 mx-auto mt-1"></div>
              : null
          }
        />
        <div className="flex items-center gap-3 mt-6">
          <label className="text-sm font-medium flex gap-1 items-center">
            <input
              type="radio"
              checked={filter === "Lecture"}
              onChange={() => setFilter("Lecture")}
              className="accent-violet-600"
            />
            <span className="ml-1 text-violet-600 font-semibold">Lecture</span>
          </label>
          <label className="text-sm font-medium flex gap-1 items-center">
            <input
              type="radio"
              checked={filter === "Group Study"}
              onChange={() => setFilter("Group Study")}
              className="accent-blue-500"
            />
            Group Study
          </label>
          <label className="text-sm font-medium flex gap-1 items-center">
            <input
              type="radio"
              checked={filter === "Coaching"}
              onChange={() => setFilter("Coaching")}
              className="accent-yellow-500"
            />
            Coaching
          </label>
          <label className="text-sm font-medium flex gap-1 items-center">
            <input
              type="radio"
              checked={filter === "All"}
              onChange={() => setFilter("All")}
              className="accent-gray-400"
            />
            All
          </label>
        </div>
        <EventList
          events={filteredEvents}
          onDelete={handleDeleteEvent}
        />
      </div>
      {/* Right Sidebar: Add event & Templates */}
      <div className="w-full lg:max-w-[300px] flex flex-col gap-4">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <button
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-xl mb-4 transition"
            onClick={() => setShowModal(true)}
          >
            + Add New Event
          </button>
          <EventTemplates onSelect={handleAddEvent} />
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5 mt-4">
          <h3 className="text-blue-700 font-semibold text-lg mb-3">Upcoming Events</h3>
          <EventList
            events={upcomingEvents}
            onDelete={handleDeleteEvent}
            small
          />
        </div>
      </div>
      {/* Modal for add event */}
      {showModal && (
        <EventAddModal
          date={selectedDate}
          onAdd={handleAddEvent}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
