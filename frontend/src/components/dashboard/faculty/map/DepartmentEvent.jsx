import { Users, Mic, FileCheck } from "lucide-react";

const events = [
  { name: "Faculty Meeting", place: "Conf Hall A", time: "10:00 AM", type: "meeting" },
  { name: "Research Symposium", place: "Auditorium", time: "2:00 PM", type: "event" },
  { name: "Thesis Defense", place: "Room 405", time: "3:30 PM", type: "defense" },
];

const icons = {
  meeting: Users,
  event: Mic,
  defense: FileCheck,
};

export default function DepartmentEvents() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow border dark:border-gray-700 p-4">
      <h3 className="font-semibold mb-4 text-base text-gray-900 dark:text-white">Department Events</h3>
      <div className="space-y-4">
        {events.map((e) => {
          const Icon = icons[e.type] || Users;
          return (
            <div key={e.name} className="flex items-center gap-3">
              <Icon className="w-6 h-6 text-blue-500" />
              <div>
                <div className="font-medium text-gray-800 dark:text-white">{e.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{e.place}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">{e.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
