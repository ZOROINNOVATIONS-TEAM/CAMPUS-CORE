import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function EventCalendarCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-4">
      <Calendar
        onChange={setDate}
        value={date}
        className="!border-0 !w-full text-sm dark:text-white
          [&_.react-calendar__navigation]:bg-transparent
          [&_.react-calendar__navigation]:text-gray-800 dark:[&_.react-calendar__navigation]:text-gray-100
          [&_.react-calendar__month-view__weekdays]:text-gray-600 dark:[&_.react-calendar__month-view__weekdays]:text-gray-400
          [&_.react-calendar__tile]:rounded-lg [&_.react-calendar__tile]:transition [&_.react-calendar__tile]:duration-200
          [&_.react-calendar__tile]:hover:bg-violet-100 dark:[&_.react-calendar__tile]:hover:bg-gray-800"
        tileClassName={({ date: tileDate }) => {
          const isToday = new Date().toDateString() === tileDate.toDateString();
          const isSelected = new Date(date).toDateString() === tileDate.toDateString();

          return [
            "!rounded-lg !p-2",
            isToday ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium" : "",
            isSelected ? "bg-violet-600 text-white font-bold" : ""
          ].join(" ");
        }}
      />
    </div>
  );
}
