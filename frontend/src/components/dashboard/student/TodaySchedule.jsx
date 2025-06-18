import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { getTodaySchedule } from "../../../services/scheduleService";
import { Check, Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";


export function TodaySchedule() {
  const { data: schedule = [], isLoading } = useQuery({
  queryKey: ["todaySchedule"],
  queryFn: getTodaySchedule,
});


  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <Check className="w-5 h-5 text-green-600" />;
      case "current":
        return <Play className="w-5 h-5 text-blue-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    const base = "text-xs font-semibold px-2 py-0.5 rounded-full";
    switch (status) {
      case "completed":
        return <span className={`${base} bg-green-100 text-green-800`}>Done</span>;
      case "current":
        return <span className={`${base} bg-blue-100 text-blue-800`}>Now</span>;
      default:
        return <span className={`${base} bg-gray-100 text-gray-800`}>Next</span>;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100";
      case "current":
        return "bg-blue-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Today’s Schedule</CardTitle>
        <Link to="/schedule" className="text-blue-600 text-sm hover:underline">
  View Full Schedule
</Link>

      </CardHeader>

      <CardContent>
  {isLoading ? (
    <p className="text-sm text-gray-500">Loading today’s schedule...</p>
  ) : schedule.length === 0 ? (
    <p className="text-sm text-gray-500">No classes scheduled for today.</p>
  ) : (
    <div className="space-y-4">
      {schedule.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200"
        >
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getStatusColor(
              item.status
            )}`}
          >
            {getStatusIcon(item.status)}
          </div>

          <div className="flex-grow">
            <h4 className="font-medium text-gray-900">{item.course.name}</h4>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span>
                {item.startTime} – {item.endTime}
              </span>
              <span>{item.course.room}</span>
            </div>
          </div>

          <div className="flex-shrink-0">{getStatusBadge(item.status)}</div>
        </div>
      ))}
    </div>
  )}
</CardContent>

    </Card>
  );
}
