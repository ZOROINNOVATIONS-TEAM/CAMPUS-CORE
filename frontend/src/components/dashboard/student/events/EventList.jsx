export default function EventList({ events, onDelete, onEdit, small }) {
  if (!events.length)
    return (
      <div className="text-gray-400 dark:text-gray-500 text-sm mt-2">
        No events.
      </div>
    );

  return (
    <ul className="space-y-2 mt-3">
      {events.map(event => {
        const date = new Date(event.date);
        const dateStr = date.toLocaleDateString(undefined, { dateStyle: "medium" });
        const timeStr = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

        return (
          <li
            key={event.id}
            className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white 
              flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm 
              ${small ? "text-xs" : "text-base"}`}
          >
            <div className="flex-1 min-w-0">
              <div className="font-semibold truncate">{event.title}</div>
              <div className="text-gray-500 dark:text-gray-400">
                {dateStr} {timeStr}
              </div>
              {event.description && (
                <div className="text-xs text-gray-400 dark:text-gray-500 truncate">
                  {event.description}
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-2 sm:mt-0 w-full sm:w-auto justify-end">
              {onEdit && (
                <button
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  onClick={() => onEdit(event)}
                >
                  Edit
                </button>
              )}
              {onDelete && (
                <button
                  className="text-red-500 hover:underline dark:text-red-400"
                  onClick={() => onDelete(event.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
