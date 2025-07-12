import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import EventList from "./EventList";
import EventAddModal from "./EventAddModal";
import EventTemplates from "./EventTemplates";
import './frontend/src/App.css'
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

  function handleDeleteEvent(id) {
    setEvents(prev => prev.filter(e => e.id !== id));
  }

  function handleEditEvent(event) {
    setEditEvent(event);
    setShowModal(true);
  }

  const filteredEvents = events.filter(e =>
    (filter === "All" || e.type === filter) &&
    e.date.toDateString() === selectedDate.toDateString()
  );

  const upcomingEvents = events
    .filter(e => e.date >= new Date())
    .sort((a, b) => a.date - b.date)
    .slice(0, 5);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 w-full">
      {/* SIDEBAR */}
      <aside className="w-full lg:max-w-xs flex flex-col gap-4 mt-4 lg:mt-0">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 border border-gray-200 dark:border-gray-700">
          <button
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-xl mb-4 transition"
            onClick={() => { setShowModal(true); setEditEvent(null); }}
          >
            + Add New Event
          </button>
          <EventTemplates onSelect={tpl => handleAddEvent({ ...tpl, id: Date.now() })} />
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-blue-700 dark:text-blue-400 font-semibold text-lg mb-2">Upcoming Events</h3>
          <EventList
            events={upcomingEvents}
            onDelete={handleDeleteEvent}
            onEdit={handleEditEvent}
            small
          />
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 max-w-full mx-auto min-w-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
          <h2 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white">Calendar</h2>
          <div className="font-semibold text-base sm:text-lg text-gray-500 dark:text-gray-400">Spring Summer</div>
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
          className="w-full mb-3 rounded-lg overflow-hidden
            !border-0 text-sm
            [&_.react-calendar__navigation]:bg-white dark:[&_.react-calendar__navigation]:bg-gray-900
            [&_.react-calendar__navigation]:text-gray-900 dark:[&_.react-calendar__navigation]:text-white
            [&_.react-calendar__navigation__label]:font-semibold
            [&_.react-calendar__month-view__weekdays]:bg-white dark:[&_.react-calendar__month-view__weekdays]:bg-gray-900
            [&_.react-calendar__month-view__weekdays]:text-gray-600 dark:[&_.react-calendar__month-view__weekdays]:text-gray-400
            [&_.react-calendar__tile]:rounded-lg
            [&_.react-calendar__tile]:transition
            [&_.react-calendar__tile]:duration-200
            [&_.react-calendar__tile]:hover:bg-blue-50 dark:[&_.react-calendar__tile]:hover:bg-gray-800
            [&_.react-calendar__tile--active]:bg-violet-600 [&_.react-calendar__tile--active]:text-white [&_.react-calendar__tile--active]:font-bold
            [&_.react-calendar__tile--now]:bg-blue-100 dark:[&_.react-calendar__tile--now]:bg-blue-900 [&_.react-calendar__tile--now]:text-blue-700 dark:[&_.react-calendar__tile--now]:text-blue-300
          "
        />

        {/* FILTER */}
        <div className="flex flex-wrap items-center gap-3 mt-4 mb-2">
          {["Lecture", "Group Study", "Coaching", "All"].map(ft => (
            <label key={ft} className="text-xs sm:text-sm font-medium flex gap-1 items-center cursor-pointer text-gray-700 dark:text-gray-300">
              <input
                type="radio"
                checked={filter === ft}
                onChange={() => setFilter(ft)}
                className="accent-violet-600 dark:accent-violet-500"
              />
              <span className={ft === filter ? "font-bold text-violet-600 dark:text-violet-400" : ""}>{ft}</span>
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
