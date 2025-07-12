import { useQuery } from "@tanstack/react-query";
import { getFullSchedule } from "../../../services/scheduleService";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Clock, Check, Play } from "lucide-react";

export default function SchedulePage() {
  const { data: schedule = [], isLoading } = useQuery({
    queryKey: ["fullSchedule"],
    queryFn: getFullSchedule,
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "current":
        return "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <Check className="w-5 h-5" />;
      case "current":
        return <Play className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-950">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Your Weekly Schedule
      </h1>

      {isLoading ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading schedule...</p>
      ) : schedule.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No schedule available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {schedule.map((item) => (
            <Card
              key={item.id}
              className="transition-shadow duration-300 shadow-sm hover:shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <CardHeader className="flex justify-between items-center pb-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
  {item.course.name}
</h3>


                <div
                  className={`rounded-md p-2 flex items-center justify-center ${getStatusColor(
                    item.status
                  )}`}
                >
                  {getStatusIcon(item.status)}
                </div>
              </CardHeader>

              <CardContent className="text-sm space-y-2">
                <p>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Room:</span>{" "}
                  <span className="text-gray-800 dark:text-white">{item.course.room}</span>
                </p>
                <p>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Time:</span>{" "}
                  <span className="text-gray-800 dark:text-white">{item.startTime} – {item.endTime}</span>
                </p>
                <p>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Day:</span>{" "}
                  <span className="text-gray-800 dark:text-white">{item.day}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
