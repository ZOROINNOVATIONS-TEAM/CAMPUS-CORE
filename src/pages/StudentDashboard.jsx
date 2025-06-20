import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import Announcements from "../components/Dashboard/Announcements";
import AttendanceChart from "../components/Dashboard/AttendanceChart";
import RecentResults from "../components/Dashboard/RecentResults";
import ScheduleCard from "../components/Dashboard/ScheduleCard";

const StudentDashboard = ({ studentName = "Dev", studentId = "ID: 12345" }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 overflow-auto">
        {/* Topbar */}
        <Topbar studentName={studentName} studentId={studentId} />

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="md:col-span-2">
            <ScheduleCard />
          </div>
          <div>
            <AttendanceChart />
          </div>
          <div>
            <RecentResults />
          </div>
        </div>

        {/* Announcements */}
        <Announcements />
      </div>
    </div>
  );
};

export default StudentDashboard;


