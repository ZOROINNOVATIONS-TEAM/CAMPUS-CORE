import { Card, CardHeader, CardContent } from "../../ui/card";
import { User, LogIn, LogOut, Edit2, Trash2 } from "lucide-react";

const ICONS = {
  login: <LogIn className="w-4 h-4 text-blue-500" />,
  logout: <LogOut className="w-4 h-4 text-yellow-500" />,
  update: <Edit2 className="w-4 h-4 text-purple-500" />,
  delete: <Trash2 className="w-4 h-4 text-red-500" />,
  user: <User className="w-4 h-4 text-gray-400" />,
};

// Mock activity data
const activity = [
  { type: "login", user: "Dev Sharma", detail: "Logged in", time: "1 min ago" },
  { type: "update", user: "Priya K.", detail: "Updated course details", time: "5 mins ago" },
  { type: "logout", user: "Ankit Singh", detail: "Logged out", time: "10 mins ago" },
  { type: "delete", user: "Rohit Agarwal", detail: "Removed student record", time: "16 mins ago" },
  { type: "update", user: "Aditi Patel", detail: "Changed password", time: "22 mins ago" },
];

export default function RecentActivityList() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <h3 className="text-md font-semibold text-gray-800 flex items-center gap-2">
          Recent Activity
        </h3>
      </CardHeader>
      <CardContent className="flex-1 max-h-64 overflow-y-auto px-0">
        <ul className="flex flex-col divide-y divide-gray-100">
          {activity.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 px-4 py-3">
              <div className="flex items-center justify-center rounded-full bg-gray-100 w-9 h-9">
                {ICONS[item.type] || ICONS.user}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800 truncate">{item.user}</div>
                <div className="text-xs text-gray-500 truncate">{item.detail}</div>
              </div>
              <span className="text-xs text-gray-400 min-w-fit">{item.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
