export default function UpcomingEventsList({ events = [] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>
      <div className="space-y-3">
        {events.length === 0 && (
          <div className="text-gray-400 text-sm">No events found.</div>
        )}
        {events.map(ev => (
          <div
            key={ev.id}
            className="bg-gray-50 rounded-xl shadow-sm p-3 flex flex-col gap-1"
          >
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{ev.date} {ev.time}</span>
              <span>{ev.location}</span>
            </div>
            <div className="font-medium">{ev.title}</div>
            <div className="text-xs text-gray-400">{ev.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
