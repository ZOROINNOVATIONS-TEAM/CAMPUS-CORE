import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const attendanceData = {
  "2025-06-01": "Present",
  "2025-06-02": "Late",
  "2025-06-03": "Absent",
  "2025-06-04": "Present",
  "2025-06-05": "Present",
  "2025-06-06": "Late",
  "2025-06-07": "Absent",
};

export function AttendanceCalendar() {
  const [date, setDate] = useState(new Date());

  const tileContent = ({ date, view }) => {
    if (view !== "month") return null;
    const isoDate = date.toISOString().split("T")[0];
    const status = attendanceData[isoDate];

    if (status === "Present")
      return <CheckCircle className="text-green-500 w-4 h-4 mx-auto mt-1" />;
    if (status === "Absent")
      return <XCircle className="text-red-500 w-4 h-4 mx-auto mt-1" />;
    if (status === "Late")
      return <AlertTriangle className="text-yellow-500 w-4 h-4 mx-auto mt-1" />;

    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 rounded-xl shadow-sm mt-6">
      <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">
        Attendance Calendar
      </h3>

      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
        className="border-0 w-full dark:bg-gray-800 dark:text-white rounded-md"
      />

      <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-300">
        <span className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-green-500" /> Present
        </span>
        <span className="flex items-center gap-1">
          <AlertTriangle className="w-4 h-4 text-yellow-500" /> Late
        </span>
        <span className="flex items-center gap-1">
          <XCircle className="w-4 h-4 text-red-500" /> Absent
        </span>
      </div>
    </div>
  );
}
