import React from "react";

const UpcomingEvents = ({ events }) => (
  <div>
    <h3 className="font-semibold text-blue-700 mb-2">Upcoming Events</h3>
    {events.map(event => (
      <div key={event.id} className="bg-blue-50 rounded p-3 mb-2 shadow-sm">
        <div className="font-bold">{event.title}</div>
        <div className="text-sm text-gray-600">{event.date} • {event.location}</div>
      </div>
    ))}
  </div>
);

export default UpcomingEvents;
