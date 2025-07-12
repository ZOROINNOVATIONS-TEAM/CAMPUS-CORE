const events = [
  { title: "ML Seminar", time: "10:30 AM", color: "bg-blue-400" },
  { title: "Curriculum Planning", time: "1:00 PM", color: "bg-yellow-400" },
  { title: "Peer Review Meeting", time: "3:00 PM", color: "bg-red-400" },
  { title: "Guest Lecture", time: "4:15 PM", color: "bg-orange-400" },
  { title: "Community Outreach", time: "5:30 PM", color: "bg-green-400" },
];

export default function FacultyUpcomingEventsCard() {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Upcoming Events</h2>
        <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          View Calendar
        </a>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className={`inline-block w-2 h-8 rounded-full ${event.color}`}></span>
            <div>
              <div className="font-medium text-gray-700 dark:text-gray-200">{event.title}</div>
              <div className="text-xs text-gray-400 dark:text-gray-400">{event.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
