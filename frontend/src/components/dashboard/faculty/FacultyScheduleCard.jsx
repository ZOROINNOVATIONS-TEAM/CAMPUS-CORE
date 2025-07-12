const schedule = [
  { subject: "Data Structures", time: "09:30 AM - 11:00 AM", location: "Room 214", status: "Upcoming" },
  { subject: "Algorithms", time: "11:30 AM - 01:00 PM", location: "Room 312", status: "Upcoming" },
  { subject: "Operating Systems", time: "02:00 PM - 03:30 PM", location: "Lab 2", status: "Completed" },
  { subject: "Faculty Meeting", time: "04:00 PM - 05:00 PM", location: "Board Room", status: "Upcoming" },
];

export default function FacultyScheduleCard() {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Today's Schedule</h2>
        <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Full Schedule</a>
      </div>
      <div className="flex flex-col gap-3">
        {schedule.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gray-50 dark:bg-neutral-800 rounded-lg px-4 py-2"
          >
            <div>
              <div className="font-medium text-gray-700 dark:text-gray-100">{item.subject}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {item.time} &bull; {item.location}
              </div>
            </div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                item.status === "Completed"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
