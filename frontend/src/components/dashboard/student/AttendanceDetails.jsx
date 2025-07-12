import { AttendanceCalendar } from "./AttendanceCalendar";

export default function AttendanceDetails() {
  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-950">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Your Attendance
      </h1>
      <div className="max-w-2xl mx-auto">
        <AttendanceCalendar />
      </div>
    </div>
  );
}
