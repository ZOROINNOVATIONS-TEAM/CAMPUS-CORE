import { Card, CardHeader, CardContent } from "../../../ui/card";
import { TrendingUp, Users, Star } from "lucide-react";

export default function KeyInsightsCard() {
  // Example insights (replace or fetch as needed)
  const insights = [
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      label: "Avg. Attendance",
      value: "94%",
      change: "+2.1% this month",
    },
    {
      icon: <Users className="w-5 h-5 text-purple-500" />,
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
    <Card className="w-full h-full">
      <CardHeader>
        <h3 className="text-md font-semibold text-gray-800">Key Insights</h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {insights.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-full">{item.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-600 font-medium">{item.label}</div>
              <div className="font-semibold text-base text-gray-900">{item.value}</div>
              <div className="text-xs text-green-600">{item.change}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
