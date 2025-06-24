export default function EventList({ events, onDelete, onEdit, small }) {
  if (!events.length) return <div className="text-gray-400 text-sm mt-2">No events.</div>;
  return (
    <ul className="space-y-2 mt-3">
      {events.map(event => (
        <li
          key={event.id}
          className={`p-3 rounded-xl bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm ${small ? "text-xs" : "text-base"}`}
        >
          <div className="flex-1 min-w-0">
            <div className="font-semibold truncate">{event.title}</div>
            <div className="text-gray-500">
              {new Date(event.date).toLocaleDateString()}{" "}
              {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="text-xs text-gray-400">{event.description}</div>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0 w-full sm:w-auto">
            {onEdit && (
              <button className="text-blue-600 hover:underline" onClick={() => onEdit(event)}>
                Edit
              </button>
            )}
            {onDelete && (
              <button className="text-red-500 hover:underline" onClick={() => onDelete(event.id)}>
                Delete
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
