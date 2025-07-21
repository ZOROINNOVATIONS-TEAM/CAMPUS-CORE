// src/pages/admin/AdminDashboard.jsx
import React from "react";
import {
  AdminTopBar,
  AdminBannerAndTabs,
} from "@/components/dashboard/admin/AdminHeader";

import TotalUsersCard from "@/components/dashboard/admin/TotalUsersCard";
import UpcomingEventsCard from "@/components/dashboard/admin/UpcomingEventsCard";
import SystemNotificationsCard from "@/components/dashboard/admin/SystemNotificationsCard";
import QuizReportsCard from "@/components/dashboard/admin/QuizReportsCard";
import AnnouncementsCard from "@/components/dashboard/faculty/AnnouncementsPanel";
import UserManagementCard from "@/components/dashboard/admin/UserManagementCard";

const AdminDashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900 dark:bg-stone-900 dark:border-t border-blue-500 dark:text-gray-900 transition-colors duration-200">
      {/* Sticky Top Nav */}
      <AdminTopBar />

      {/* Welcome Banner and Tabs (scrolls with page) */}
      <AdminBannerAndTabs />

      {/* Dashboard Grid Content */}
      <main className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-6">
          <TotalUsersCard />
          <UpcomingEventsCard />
          <SystemNotificationsCard />
          <QuizReportsCard />
          <AnnouncementsCard />
          <UserManagementCard />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

