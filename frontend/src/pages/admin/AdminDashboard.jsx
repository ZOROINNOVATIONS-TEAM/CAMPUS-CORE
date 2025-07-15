import { useState } from "react";
import { TopNavigation } from "../../components/dashboard/TopNavigation";
import { NavMenu } from "../../components/dashboard/admin/NavMenu";
import { WelcomeBanner } from "../../components/dashboard/admin/WelcomeBannerA";
import { TotalUsersCard } from "../../components/dashboard/admin/TotalUsersCard";
import { UpcomingEventsCard } from "../../components/dashboard/admin/UpcomingEventsCard";
import { SystemNotificationsCard } from "../../components/dashboard/admin/SystemNotificationCard";
import { QuickReportsCard } from "../../components/dashboard/admin/QuickReportsCard";
import { AnnouncementsCard } from "../../components/dashboard/admin/AnnouncementCard";
import { UserManagementCard } from "../../components/dashboard/admin/UserManagementCard";
import { FileText, BarChart2, BookOpen, DollarSign } from "lucide-react";
import CourseSetupPage from "../../components/dashboard/admin/CourseSetupPage";
import AnalyticsDashboard from "../../components/dashboard/admin/analytics/AnalyticsDashboard";

// Mock Data
const notifications = [
  { type: "error", text: "System maintenance scheduled for June 15th", time: "2 hours ago" },
  { type: "info", text: "New course registration opens next week", time: "5 hours ago" },
  { type: "success", text: "Semester grades have been finalized", time: "1 day ago" },
];

const events = [
  {
    month: "JUN",
    day: 15,
    title: "Faculty Development Workshop",
    time: "09:00 AM",
    location: "Main Auditorium",
  },
  {
    month: "JUN",
    day: 18,
    title: "Student Orientation Day",
    time: "10:30 AM",
    location: "Conference Hall",
  },
  {
    month: "JUN",
    day: 20,
    title: "Board Meeting",
    time: "02:00 PM",
    location: "Meeting Room A",
  },
];

const reports = [
  {
    icon: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    iconColor: "bg-blue-100 dark:bg-blue-900",
    title: "Attendance Report",
    subtitle: "Last updated today",
    active: false,
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    iconColor: "bg-purple-100 dark:bg-purple-900",
    title: "Performance Stats",
    subtitle: "Last updated yesterday",
    active: false,
  },
  {
    icon: <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />,
    iconColor: "bg-green-100 dark:bg-green-900",
    title: "Course Report",
    subtitle: "Last updated 2 days ago",
    active: false,
  },
  {
    icon: <DollarSign className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    iconColor: "bg-yellow-100 dark:bg-yellow-900",
    title: "Financial Summary",
    subtitle: "Last updated 3 days ago",
    active: false,
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="px-4 py-4 md:px-10 md:py-6 max-w-7xl mx-auto">
        <section>
          <WelcomeBanner />
        </section>

        <NavMenu activeTab={activeTab} onChange={setActiveTab} />

        <section className="mt-8">
          {activeTab === "home" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <TotalUsersCard />
              <SystemNotificationsCard notifications={notifications} />
              <UpcomingEventsCard events={events} />
              <QuickReportsCard reports={reports} />
              <AnnouncementsCard />
              <UserManagementCard />
            </div>
          )}

          {activeTab === "schedule" && <div className="text-gray-700 dark:text-gray-300">Schedule content here</div>}
          {activeTab === "courses" && <CourseSetupPage />}
          {activeTab === "analytics" && <AnalyticsDashboard />}
          {activeTab === "notification" && <div className="text-gray-700 dark:text-gray-300">Notifications content here</div>}
          {activeTab === "message" && <div className="text-gray-700 dark:text-gray-300">Messages content here</div>}
          {activeTab === "mentor" && <div className="text-gray-700 dark:text-gray-300">Mentor content here</div>}
        </section>
      </main>
    </div>
  );
}
