import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ScheduleCard = () => {
  const subjects = [
    { name: "Advanced Mathematics", room: "204", time: "10:00 AM - 11:30 AM" },
    { name: "Physics", room: "102", time: "9:00 AM - 10:00 AM" },
    { name: "Chemistry Lab", room: "305", time: "1:00 PM - 2:00 PM" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
      <div className="space-y-2">
        {subjects.map((subject, index) => (
          <div key={index} className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
            <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-600" />
            <span>{subject.time}: {subject.name} (Room {subject.room})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;

