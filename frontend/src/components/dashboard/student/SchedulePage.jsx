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
        return "bg-green-100";
      case "current":
        return "bg-blue-100";
      default:
        return "bg-gray-100";
    }
  };

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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Weekly Schedule</h1>

      {isLoading ? (
        <p className="text-sm text-gray-500">Loading schedule...</p>
      ) : schedule.length === 0 ? (
        <p className="text-sm text-gray-500">No schedule available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schedule.map((item) => (
            <Card key={item.id}>
              <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-base">{item.course.name}</CardTitle>
                <div className={`rounded-md p-2 ${getStatusColor(item.status)}`}>
                  {getStatusIcon(item.status)}
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                <p><strong>Room:</strong> {item.course.room}</p>
                <p><strong>Time:</strong> {item.startTime} - {item.endTime}</p>
                <p><strong>Day:</strong> {item.day}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
