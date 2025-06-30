import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = ({ selectedType, setSelectedType }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Calendar</h2>
      <span className="font-semibold">Spring Summer</span>
    </div>
    <div className="mb-4">
      <Calendar className="w-full border rounded-md shadow-sm" />
    </div>
    <div className="flex items-center mb-4 gap-4">
      <span className="font-semibold">Event Type</span>
      <label>
        <input
          type="checkbox"
          checked={selectedType === "Lecture"}
          onChange={() => setSelectedType("Lecture")}
        />
        <span className="ml-2 text-blue-600">Lecture</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedType === "Group Study"}
          onChange={() => setSelectedType("Group Study")}
        />
        <span className="ml-2">Group Study</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedType === "Coaching"}
          onChange={() => setSelectedType("Coaching")}
        />
        <span className="ml-2 text-purple-600">Coaching</span>
      </label>
    </div>
  </div>
);

export default EventCalendar;

