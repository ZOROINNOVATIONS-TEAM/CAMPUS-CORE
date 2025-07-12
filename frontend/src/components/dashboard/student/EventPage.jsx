import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import EventList from "./events/EventList";
import EventAddModal from "./events/EventAddModal";
import EventTemplates from "./events/EventTemplates";

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
    date: new Date(2025, 1, 5, 16, 30),
    type: "Coaching",
    title: "Personal Coaching With Yasmine!",
    description: "Coaching on College",
  },
];

export default function EventPage() {
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
    new Date(e.date).toDateString() === selectedDate.toDateString()
  );

  const upcomingEvents = events
    .filter(e => e.date >= new Date())
    .sort((a, b) => a.date - b.date)
    .slice(0, 5);

  function handleTemplateAdd(tpl) {
    const newDate = new Date(selectedDate);
    newDate.setHours(10, 0, 0, 0);
    handleAddEvent({
      ...tpl,
      date: newDate,
      id: Date.now(),
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 px-1 sm:px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Calendar Panel */}
          <main className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 min-w-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
              <h2 className="font-bold text-2xl tracking-tight dark:text-white">Event Calendar</h2>
              <div className="font-semibold text-base sm:text-lg text-gray-500 dark:text-gray-300">
                Spring/Summer
              </div>
            </div>

            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              tileContent={({ date }) =>
                events.some(e => new Date(e.date).toDateString() === date.toDateString())
                  ? <div className="w-2 h-2 rounded-full bg-violet-500 mx-auto mt-1"></div>
                  : null
              }
              className="w-full mb-4 rounded-xl overflow-hidden"
            />

            <div className="flex flex-wrap items-center gap-3 mt-4 mb-2">
              {["Lecture", "Group Study", "Coaching", "All"].map(ft => (
                <label
                  key={ft}
                  className="text-sm font-medium flex gap-1 items-center cursor-pointer dark:text-gray-300"
                >
                  <input
                    type="radio"
                    checked={filter === ft}
                    onChange={() => setFilter(ft)}
                    className={`accent-${ft === "Lecture" ? "violet-600" : ft === "Group Study" ? "blue-500" : ft === "Coaching" ? "yellow-500" : "gray-400"}`}
                  />
                  <span className={ft === filter ? "font-bold text-violet-600 dark:text-violet-400" : ""}>
                    {ft}
                  </span>
                </label>
              ))}
            </div>

            <EventList
              events={filteredEvents}
              onDelete={handleDeleteEvent}
              onEdit={handleEditEvent}
            />
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:max-w-xs flex flex-col gap-5 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5">
              <button
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-xl mb-4 transition"
                onClick={() => { setShowModal(true); setEditEvent(null); }}
              >
                + Add New Event
              </button>
              <EventTemplates onSelect={handleTemplateAdd} />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5">
              <h3 className="text-blue-700 dark:text-blue-400 font-semibold text-lg mb-2">
                Upcoming Events
              </h3>
              <EventList
                events={upcomingEvents}
                onDelete={handleDeleteEvent}
                onEdit={handleEditEvent}
                small
              />
            </div>
          </aside>

          {/* Modal */}
          {showModal && (
            <EventAddModal
              date={selectedDate}
              onAdd={handleAddEvent}
              onClose={() => { setShowModal(false); setEditEvent(null); }}
              initialData={editEvent}
            />
          )}
        </div>
      </div>
    </div>
  );
}
