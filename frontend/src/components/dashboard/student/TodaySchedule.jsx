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
        return <Check className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case "current":
        return <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500 dark:text-gray-300" />;
    }
  };

  const getStatusBadge = (status) => {
    const base = "text-xs font-semibold px-2 py-0.5 rounded-full";
    switch (status) {
      case "completed":
        return (
          <span className={`${base} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300`}>
            Done
          </span>
        );
      case "current":
        return (
          <span className={`${base} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300`}>
            Now
          </span>
        );
      default:
        return (
          <span className={`${base} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200`}>
            Next
          </span>
        );
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 dark:bg-green-900";
      case "current":
        return "bg-blue-100 dark:bg-blue-900";
      default:
        return "bg-gray-100 dark:bg-gray-800";
    }
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between">
  <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
    Today's Schedule
  </h2>
  <Link
    to="/schedule"
    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
  >
    View Full Schedule
  </Link>
</CardHeader>


      <CardContent>
        {isLoading ? (
          <div className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
            Loading today’s schedule...
          </div>
        ) : schedule.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-gray-400 dark:text-gray-500 text-sm italic">
            No classes scheduled for today.
          </div>
        ) : (
          <div className="space-y-4">
            {schedule.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] transition hover:shadow-sm"
              >
                {/* Status Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getStatusBg(
                    item.status
                  )}`}
                >
                  {getStatusIcon(item.status)}
                </div>

                {/* Course Info */}
                <div className="flex-grow overflow-hidden">
                  <h4 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 truncate">
                    {item.course.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <time>
                      {item.startTime} – {item.endTime}
                    </time>
                    <span>{item.course.room}</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex-shrink-0">{getStatusBadge(item.status)}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
