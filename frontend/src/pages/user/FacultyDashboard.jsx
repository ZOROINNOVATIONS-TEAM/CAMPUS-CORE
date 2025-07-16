import { useState } from "react";
import FacultyTopNavigation from "../../components/dashboard/faculty/FacultyTopNavigation";
import { FacultyNavTabs } from "../../components/dashboard/faculty/FacultyNav";
import FacultyWelcomeBanner from "../../components/dashboard/faculty/FacultyWelcomeBanner";
import FacultyAttendanceCard from "../../components/dashboard/faculty/FacultyAttendanceCard";
import FacultyUpcomingEventsCard from "../../components/dashboard/faculty/FacultyUpcomingEventsCard";
import FacultyScheduleCard from "../../components/dashboard/faculty/FacultyScheduleCard";
import FacultyAnnouncementsCard from "../../components/dashboard/faculty/FacultyAnnouncementsCard";
import FacultyMapDashboard from "../../components/dashboard/faculty/FacultyMapDashboard";
import FacultyMentoring from "../../components/dashboard/faculty/FacultyMentoring";
import CourseSetup from "../../components/dashboard/faculty/course/CourseSetup";
import AttendanceMarkingPage from "../../components/dashboard/faculty/FacultyAttendanceMarking";
import AttendanceDetailsModal from "../../components/dashboard/faculty/AttendanceDetailsModal";

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const handleViewDetails = (data) => {
    setDetailData(data);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Main Dashboard Content */}
      <div className="px-4 py-4 md:px-10 md:py-6">
        <section className="min-h-[50vh] p-4 md:p-6 rounded-xl transition-colors duration-300">
          <FacultyWelcomeBanner facultyName="Dr. Lee" facultyId="F102529" />
          <FacultyNavTabs activeTab={activeTab} onChange={setActiveTab} />

          <div className="p-4 sm:p-6 lg:p-8">
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="space-y-6 md:col-span-2">
                  <FacultyAttendanceCard onViewDetails={handleViewDetails} />
                  <FacultyScheduleCard />
                </div>
                <div className="space-y-6">
                  <FacultyUpcomingEventsCard />
                  <FacultyAnnouncementsCard />
                </div>
              </div>
            )}

            {activeTab === "map" && <FacultyMapDashboard />}
            {activeTab === "mentor" && <FacultyMentoring />}
            {activeTab === "courses" && <CourseSetup />}
            {activeTab === "attendance" && <AttendanceMarkingPage />}
          </div>
        </section>
      </div>
      {detailData && (
        <AttendanceDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          detailData={detailData}
        />
      )}
    </div>
  );
}
