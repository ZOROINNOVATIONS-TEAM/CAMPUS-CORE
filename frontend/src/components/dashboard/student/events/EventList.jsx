export default function EventList({ events, onDelete, small }) {
  if (!events.length) return <div className="text-gray-400 text-sm mt-2">No events.</div>;
  return (
    <ul className="space-y-2 mt-3">
      {events.map(event => (
        <li key={event.id} className={`p-3 rounded-xl bg-gray-50 flex items-center justify-between shadow-sm ${small ? "text-xs" : "text-base"}`}>
          <div>
            <div className="font-semibold">{event.title}</div>
            <div className="text-gray-500">{event.date.toLocaleDateString()} {event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div className="text-xs text-gray-400">{event.description}</div>
          </div>
          {onDelete && (
            <button className="ml-4 text-red-500 hover:underline" onClick={() => onDelete(event.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
