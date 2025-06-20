import { CalendarCheck2, Briefcase, FlaskConical } from "lucide-react";

const schedule = [
  { subject: "Computer Architecture", time: "11:00 AM", place: "Lecture Hall C", students: 30, type: "lecture" },
  { subject: "Office Hours", time: "2:30 PM", place: "Faculty Office 405", students: null, type: "office" },
  { subject: "Research Supervision", time: "4:15 PM", place: "Lab 301", students: null, type: "lab" },
];

const icons = {
  lecture: CalendarCheck2,
  office: Briefcase,
  lab: FlaskConical,
};

export default function TodaySchedule() {
  return (
    <div className="bg-white rounded-xl shadow border p-4">
      <h3 className="font-semibold mb-4 text-base">Today's Schedule</h3>
      <div className="space-y-4">
        {schedule.map(s => {
          const Icon = icons[s.type] || CalendarCheck2;
          return (
            <div key={s.subject} className="flex items-center gap-3">
              <Icon className="w-6 h-6 text-blue-500" />
              <div>
                <div className="font-medium">{s.subject}</div>
                <div className="text-xs text-gray-500">
                  {s.place} {s.students && `- ${s.students} students`}
                </div>
                <div className="text-xs text-gray-400">{s.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
