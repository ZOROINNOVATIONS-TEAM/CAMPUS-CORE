import { Book, FlaskConical, Users } from "lucide-react";

const items = [
  { name: "Advanced Data Structures", place: "Lecture Hall A, 10:30 AM", type: "lecture", date: "Yesterday" },
  { name: "Research Lab Meeting", place: "Lab 204, 2:00 PM", type: "lab", date: "Yesterday" },
  { name: "Department Meeting", place: "Conf Room 8B, 4:00 PM", type: "meeting", date: "June 16" },
];

const icons = {
  lecture: Book,
  lab: FlaskConical,
  meeting: Users,
};

export default function RecentTeachingLocations() {
  return (
    <div className="bg-white rounded-xl shadow border p-4">
      <h3 className="font-semibold mb-4 text-base">Recent Teaching Locations</h3>
      <div className="space-y-4">
        {items.map(i => {
          const Icon = icons[i.type] || Book;
          return (
            <div key={i.name} className="flex items-center gap-3">
              <Icon className="w-6 h-6 text-blue-500" />
              <div>
                <div className="font-medium">{i.name}</div>
                <div className="text-xs text-gray-500">{i.place}</div>
                <div className="text-xs text-gray-400">{i.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
