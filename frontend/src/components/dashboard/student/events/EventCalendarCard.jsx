import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function EventCalendarCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-xl">
      <Calendar
        onChange={setDate}
        value={date}
        className="!border-0 !w-full"
        tileClassName={({ date, view }) =>
          view === "month" ? "!rounded-lg !p-2" : undefined
        }
      />
    </div>
  );
}
