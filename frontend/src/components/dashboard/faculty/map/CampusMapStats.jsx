import { Landmark, Users2, FlaskConical, ParkingCircle } from "lucide-react";

const stats = [
  { label: "Lecture Halls", value: 15, icon: Landmark, color: "text-blue-500", border: "border-blue-400" },
  { label: "Staff Rooms", value: 8, icon: Users2, color: "text-green-500", border: "border-green-400" },
  { label: "Research Labs", value: 12, icon: FlaskConical, color: "text-yellow-500", border: "border-yellow-400" },
  { label: "Faculty Parking", value: 6, icon: ParkingCircle, color: "text-purple-500", border: "border-purple-400" },
];

export default function CampusMapStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      {stats.map(({ label, value, icon: Icon, color, border }) => (
        <div
          key={label}
          className={`bg-white rounded-xl shadow border-t-4 ${border} p-4 flex flex-col items-start`}
        >
          <Icon className={`w-7 h-7 mb-2 ${color}`} />
          <span className="font-medium">{label}</span>
          <span className="text-xs text-gray-500 mt-0.5">
            {value} {label === "Faculty Parking" ? "zones" : label === "Research Labs" ? "labs" : "rooms"}
          </span>
        </div>
      ))}
    </div>
  );
}
