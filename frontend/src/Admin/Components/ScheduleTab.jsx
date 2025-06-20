import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const eventData = [
  { day: "Mon", events: 2 },
  { day: "Tue", events: 1 },
  { day: "Wed", events: 4 },
  { day: "Thu", events: 3 },
  { day: "Fri", events: 2 },
  { day: "Sat", events: 1 },
  { day: "Sun", events: 0 },
];

const recentEvents = [
  { title: "React Workshop", date: "Mon, 9:00 AM" },
  { title: "Team Meeting", date: "Tue, 11:00 AM" },
  { title: "Assignment Deadline", date: "Wed, 5:00 PM" },
  { title: "1-on-1 Mentoring", date: "Thu, 2:00 PM" },
  { title: "Mock Interview", date: "Fri, 3:30 PM" },
];

const ScheduleTab = () => {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-lg font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Schedule</h2>
          <p className="text-sm text-gray-600">
            View and manage upcoming events and schedules.
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          + Add New Event
        </button>
      </div>

      {/* Chart Section */}
      <div className="w-full h-64 mb-10 bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Weekly Event Summary</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={eventData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="events" fill="#3B82F6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Events Timeline */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Events</h3>
        <ul className="space-y-3">
          {recentEvents.map((event, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-3 h-3 mt-1 rounded-full bg-blue-500"></div>
              <div>
                <p className="font-medium text-gray-800">{event.title}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleTab;
