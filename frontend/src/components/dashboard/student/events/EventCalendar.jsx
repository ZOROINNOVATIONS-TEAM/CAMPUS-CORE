import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import EventList from "./EventList";
import EventAddModal from "./EventAddModal";
import EventTemplates from "./EventTemplates";

// Initial event data
const initialEvents = [
  {
    id: 1,
    date: new Date(2025, 0, 17, 11, 0),
    type: "Lecture",
    title: "Registration Complete!",
    description: "Lecture Confirmation",
  },
  {
    id: 2,
    date: new Date(2025, 1, 5, 11, 0),
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
  const [editEvent, setEditEvent] = useState(null);

  // Add or Edit event
  function handleAddEvent(event) {
    if (editEvent) {
      setEvents(prev =>
        prev.map(e => (e.id === editEvent.id ? { ...event, id: editEvent.id } : e))
      );
      setEditEvent(null);
    } else {
      setEvents(prev => [...prev, { ...event, id: Date.now() }]);
    }
    setShowModal(false);
  }

  // Delete event
  function handleDeleteEvent(id) {
    setEvents(prev => prev.filter(e => e.id !== id));
  }

  // Edit event (opens modal)
  function handleEditEvent(event) {
    setEditEvent(event);
    setShowModal(true);
  }

  // Filter events by type and date
  const filteredEvents = events.filter(e =>
    (filter === "All" || e.type === filter) &&
    e.date.toDateString() === selectedDate.toDateString()
  );

  // Upcoming events (future only)
  const upcomingEvents = events
    .filter(e => e.date >= new Date())
    .sort((a, b) => a.date - b.date)
    .slice(0, 5);

  // MAIN RENDER
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 w-full">
      {/* SIDEBAR: Templates & Upcoming (collapses under calendar on mobile) */}
      <aside className="w-full lg:max-w-xs flex flex-col gap-4 mt-4 lg:mt-0">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <button
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-xl mb-4 transition"
            onClick={() => { setShowModal(true); setEditEvent(null); }}
          >
            + Add New Event
          </button>
          <EventTemplates onSelect={tpl => handleAddEvent({ ...tpl, id: Date.now() })} />
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="text-blue-700 font-semibold text-lg mb-2">Upcoming Events</h3>
          <EventList
            events={upcomingEvents}
            onDelete={handleDeleteEvent}
            onEdit={handleEditEvent}
            small
          />
        </div>
      </aside>
      {/* MAIN: Calendar and event filter/results */}
      <main className="flex-1 bg-white p-4 sm:p-6 rounded-2xl shadow-md max-w-full mx-auto min-w-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
          <h2 className="font-bold text-xl sm:text-2xl">Calendar</h2>
          <div className="font-semibold text-base sm:text-lg text-gray-500">Spring Summer</div>
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
          className="w-full mb-3"
        />
        {/* FILTER */}
        <div className="flex flex-wrap items-center gap-3 mt-4 mb-2">
          {["Lecture", "Group Study", "Coaching", "All"].map(ft => (
            <label key={ft} className="text-xs sm:text-sm font-medium flex gap-1 items-center">
              <input
                type="radio"
                checked={filter === ft}
                onChange={() => setFilter(ft)}
                className={`accent-${ft === "Lecture" ? "violet-600" : ft === "Group Study" ? "blue-500" : ft === "Coaching" ? "yellow-500" : "gray-400"}`}
              />
              <span className={ft === filter ? "font-bold text-violet-600" : ""}>{ft}</span>
            </label>
          ))}
        </div>
        {/* EVENTS FOR SELECTED DAY */}
        <EventList
          events={filteredEvents}
          onDelete={handleDeleteEvent}
          onEdit={handleEditEvent}
        />
      </main>
      {/* MODAL */}
      {showModal && (
        <EventAddModal
          date={selectedDate}
          onAdd={handleAddEvent}
          onClose={() => { setShowModal(false); setEditEvent(null); }}
          initialData={editEvent}
        />
      )}
    </div>
  );
}
