// src/components/faculty/EventCalendar.jsx (assumed path)
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = ({ selectedType, setSelectedType, isDark }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-indigo-800">Calender</h2>
      <span className="font-semibold">Spring Summer</span>
    </div>
    <div className="mb-4">
      <Calendar
        className="w-full border rounded-md shadow-sm"
        tileClassName={({ activeStartDate, date, view }) => {
          if (view === 'month' && date.getMonth() !== activeStartDate.getMonth()) {
            return isDark ? 'text-gray-400 font-bold' : 'text-black font-bold'; // Light gray in dark mode, black in light mode
          }
          return null;
        }}
      />
    </div>
    <div className="flex items-center mb-4 gap-4">
      <span className="font-semibold text-red-100">Event Type</span>
      <label>
        <input
          type="checkbox"
          checked={selectedType === "Meeting"}
          onChange={() => setSelectedType("Meeting")}
        />
        <span className="ml-2 text-purple-600">Meeting</span>
      </label>
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
        <span className="ml-2 text-blue-100">Group Study</span>
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
