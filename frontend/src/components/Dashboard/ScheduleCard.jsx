import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ScheduleCard = () => {
  const schedule = [
    { status: "Upcoming", time: "04:30 PM - 06:00 PM", room: "Room 305", subject: "English Literature" },
    { status: "Upcoming", time: "02:00 PM - 04:00 PM", room: "Lab Building B", subject: "Physics Laboratory" },
    { status: "Upcoming", time: "11:00 AM - 12:30 PM", room: "Room 203", subject: "Advanced Mathematics" },
    { status: "Completed", time: "09:00 AM - 10:30 AM", room: "Room 101", subject: "Introduction to Computer Science" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
      <div className="space-y-4">
        {schedule.map((item, i) => (
          <div key={i} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              item.status === "Upcoming" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
            }`}>
              {item.status}
            </span>
            <div className="flex-1">
              <span className="font-bold">{item.subject}</span>
              <div className="flex items-center text-gray-600 mt-1">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <span>{item.time} • {item.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-right text-blue-600 cursor-pointer hover:underline">
        Full Schedule
      </p>
    </div>
  );
};

export default ScheduleCard;

