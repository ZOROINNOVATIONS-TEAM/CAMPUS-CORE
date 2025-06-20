// src/components/dashboard/faculty/FacultyUpcomingEventsCard.jsx
const events = [
  { title: "ML Seminar", time: "10:30 AM", color: "blue" },
  { title: "Curriculum Planning", time: "1:00 PM", color: "yellow" },
  { title: "Peer Review Meeting", time: "3:00 PM", color: "red" },
  { title: "Guest Lecture", time: "4:15 PM", color: "orange" },
  { title: "Community Outreach", time: "5:30 PM", color: "green" },
];

export default function FacultyUpcomingEventsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800">Upcoming Events</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">View Calendar</a>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className={`inline-block w-2 h-8 rounded-full bg-${event.color}-400`}></span>
            <div>
              <div className="font-medium text-gray-700">{event.title}</div>
              <div className="text-xs text-gray-400">{event.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
