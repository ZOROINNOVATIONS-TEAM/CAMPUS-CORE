import { useState } from "react";
import FacultyTopNavigation from "../../components/dashboard/faculty/FacultyTopNavigation";
import { FacultyNavTabs } from "../../components/dashboard/faculty/FacultyNav";
import FacultyWelcomeBanner from "../../components/dashboard/faculty/FacultyWelcomeBanner";
import FacultyAttendanceCard from "../../components/dashboard/faculty/FacultyAttendanceCard";
import FacultyUpcomingEventsCard from "../../components/dashboard/faculty/FacultyUpcomingEventsCard";
import FacultyScheduleCard from "../../components/dashboard/faculty/FacultyScheduleCard";
import FacultyAnnouncementsCard from "../../components/dashboard/faculty/FacultyAnnouncementsCard";
import FacultyMapDashboard from "../../components/dashboard/faculty/FacultyMapDashboard";

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      <FacultyTopNavigation />
      <div className="px-4 py-4 md:px-10 md:py-6">
        <section id="top" className="min-h-[50vh] p-4 md:p-6 bg-gray-50">
          <FacultyWelcomeBanner
            facultyName="Dr. Lee"
            facultyId="F102529"
            nextClass={{ name: "Data Structures", time: "09:30 AM - 11:00 AM" }}
          />
          <FacultyNavTabs activeTab={activeTab} onChange={setActiveTab} />
          <div className="p-4 sm:p-6 lg:p-8">
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="space-y-6 md:col-span-2">
                  <FacultyAttendanceCard />
                  <FacultyScheduleCard />
                </div>
                <div className="space-y-6">
                  <FacultyUpcomingEventsCard />
                  <FacultyAnnouncementsCard />
                </div>
              </div>
            )}
            {activeTab === "map" && (
              <FacultyMapDashboard />
            )}
        
          </div>
        </section>
      </div>
    </div>
  );
}
