import { Card, CardHeader, CardContent } from "../../../ui/card";
import { TrendingUp, Users, Star } from "lucide-react";

export default function KeyInsightsCard() {
  const insights = [
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      label: "Avg. Attendance",
      value: "94%",
      change: "+2.1% this month",
    },
    {
      icon: <Users className="w-5 h-5 text-purple-600" />,
      label: "New Enrollments",
      value: "340",
      change: "+5.8% this month",
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      label: "Top Performer",
      value: "Priya S.",
      change: "GPA 9.8",
    },
  ];

  return (
    <Card className="w-full h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
      <CardHeader>
        <h3 className="text-md font-semibold text-gray-800 dark:text-white">
          Key Insights
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {insights.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {item.label}
              </span>
              <span className="text-base font-bold text-gray-900 dark:text-white">
                {item.value}
              </span>
              <span className="text-xs text-green-600 dark:text-green-400">
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
