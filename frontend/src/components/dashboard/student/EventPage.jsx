import React from "react";
import EventCalendarCard from "./events/EventCalendarCard";
import EventTypeFilter from "./events/EventTpyeFilter";
import UpcomingEventsList from "./events/UpcomingEventsList";
import AddEventSidebar from "./events/AddEventSidebar";

export default function EventPage() {
  // Example state (replace with your real state or react-query)
  const [selectedType, setSelectedType] = React.useState(null);

  // Example events data (replace/fetch your real event list)
  const events = [
    {
      id: 1,
      date: "Jan 12 2025",
      time: "11:00 AM",
      title: "Registration Completes!",
      type: "Lecture",
      location: "Lecture Confirmation",
    },
    {
      id: 2,
      date: "Feb 5 2025",
      time: "11:00 AM",
      title: "Personal Coaching With Yasmine!",
      type: "Coaching",
      location: "Coaching on College",
    },
  ];

  // Filter events by type
  const filteredEvents = selectedType
    ? events.filter(ev => ev.type.toLowerCase() === selectedType)
    : events;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE (Main) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Calendar + filter */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">Calendar</h2>
                <span className="text-xl font-medium">Spring Summer</span>
              </div>
              <EventCalendarCard />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                <EventTypeFilter selected={selectedType} onChange={setSelectedType} />
                <span className="ml-auto text-gray-500 text-sm">
                  {/* Example: a filter dropdown (optional) */}
                  Filter Event <span className="ml-1">▼</span>
                </span>
              </div>
            </div>
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow p-6">
              <UpcomingEventsList events={filteredEvents} />
            </div>
          </div>
          {/* RIGHT SIDEBAR */}
          <div>
            <AddEventSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
