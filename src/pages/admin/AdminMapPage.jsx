// src/pages/admin/AdminMapPage.jsx
import React from "react";
import { AdminTopBar, AdminBannerAndTabs } from "../../components/dashboard/admin/AdminHeader";
import CampusMap from "@/pages/student/CampusMap"; 

const AdminMapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-stone-900 text-gray-900 dark:text-gray-900">
      {/* Sticky top bar with logo, search, notifications, dark mode, profile */}
      <AdminTopBar />

      {/* Scrollable welcome banner and tabs */}
      <AdminBannerAndTabs />

      {/* Main map content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h1 className="text-lg text-gray-900 dark:text-gray-100 mb-6">
            View campus locations (admin view).
          </h1>
          {/* Reused CampusMap component */}
          <CampusMap isAdmin={true} /> {/* Optional prop if you want admin-specific features */}
        </div>
      </main>
    </div>
  );
};

export default AdminMapPage;
