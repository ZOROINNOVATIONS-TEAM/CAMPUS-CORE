import React from "react";
import FacultyHeader from "../../components/dashboard/faculty/FacultyHeader.jsx";
import SubmitAttendanceCard from "../../components/dashboard/faculty/SubmitAttendanceCard.jsx";
import TodaysClassScheduleTable from "../../components/dashboard/faculty/TodaysClassScheduleTable.jsx";
import UpcomingEventsList from "../../components/dashboard/faculty/UpcomingEventsList.jsx";
import AnnouncementsPanel from "../../components/dashboard/faculty/AnnouncementsPanel.jsx";
import CourseCard from "../../components/dashboard/faculty/CourseCard.jsx";


const FacultyDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <FacultyHeader/>

      {/* Main Content Grid */}
      <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Left Column - Submit Attendance & Class Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <SubmitAttendanceCard />
          <TodaysClassScheduleTable />
        </div>

        {/* Right Column - Events & Announcements */}
        <div className="space-y-6">
          <UpcomingEventsList />
          <AnnouncementsPanel />
        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;