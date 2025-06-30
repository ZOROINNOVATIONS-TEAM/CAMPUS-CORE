import React, { useState } from "react";
import EventCalendar from "@/components/dashboard/student/event/EventCalendar";
import UpcomingEvents from "@/components/dashboard/student/event/UpcomingEvents";
import AddEventPanel from "@/components/dashboard/student/event/AddEventPanel";
import EventModal from "@/components/dashboard/student/event/EventModal";

const EventPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [events, setEvents] = useState([
    { id: 1, title: "Registration Complete I", date: "Jan 17, 2025", type: "Lecture", location: "Lecture Auditorium" },
    { id: 2, title: "Personal Coaching With Yashrel", date: "Jan 18, 2025", type: "Coaching", location: "Counselling Center" },
  ]);

  const filteredEvents = selectedType === "All"
    ? events
    : events.filter(event => event.type === selectedType);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 w-2/3">
        <EventCalendar selectedType={selectedType} setSelectedType={setSelectedType} />
        <UpcomingEvents events={filteredEvents} />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 w-1/3">
        <AddEventPanel onAddEvent={handleAddEvent} />
      </div>
    </div>
  );
};

export default EventPage;

